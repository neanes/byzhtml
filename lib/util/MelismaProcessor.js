import byzhtml from '../byzhtml.js';
import { CssVars } from './CssVars.js';
import { TextMetrics } from './TextMetrics.js';

const TATWEEL = '\u0640';

function isElementInOrNearViewport(el) {
  const rect = el.getBoundingClientRect();

  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top >= -viewportHeight &&
    rect.left >= -viewportWidth &&
    rect.bottom <= viewportHeight * 2 &&
    rect.right <= viewportWidth * 2
  );
}

function binarySearch(melismas) {
  let start = 0;
  let end = melismas.length - 1;
  let currentIndex;
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  while (start <= end) {
    currentIndex = Math.floor((start + end) / 2);
    const rect = melismas[currentIndex].getBoundingClientRect();

    if (rect.top < 0) {
      start = currentIndex + 1;
    } else if (rect.bottom > viewportHeight) {
      end = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }

  return -1;
}

function processAutoMelisma(melisma) {
  let change;
  const parentNote = melisma.closest('x-note, x-n');
  const siblingLyrics = parentNote.querySelector('x-lyric, x-ly');
  const siblingLyricsRect = siblingLyrics.getBoundingClientRect();

  let nextNote = parentNote.nextElementSibling;
  let nextLyrics;
  let depth = 0;
  let melismaWidth;
  let lastNoteRight;

  while (
    nextNote &&
    (nextNote.nodeName === 'X-NOTE' || nextNote.nodeName === 'X-N') &&
    depth < 100
  ) {
    nextLyrics = nextNote.querySelector('x-lyric, x-ly');

    const nextNoteRect = nextNote.getBoundingClientRect();

    if (
      nextNoteRect.left < siblingLyricsRect.left &&
      lastNoteRight !== undefined
    ) {
      // We have wrapped around. Extend the melisma to the end of the last note
      // that was on the same line
      melismaWidth = lastNoteRight - siblingLyricsRect.right;
      break;
    }

    if (nextLyrics) {
      // We've found lyrics. Extend the melisma to the start of the lyrics.
      const nextLyricsRect = nextLyrics.getBoundingClientRect();

      melismaWidth = nextLyricsRect.left - siblingLyricsRect.right;
      break;
    }

    lastNoteRight = nextNoteRect.right;
    nextNote = nextNote.nextElementSibling;

    depth++;
  }

  if (melismaWidth) {
    change = { melisma };

    const melismaStyle = getComputedStyle(melisma);
    const fontFamily = melismaStyle.getPropertyValue(CssVars.LyricFontFamily);
    const fontSize = melismaStyle.getPropertyValue(CssVars.LyricFontSize);
    const font = `${fontSize} ${fontFamily}`;

    let text = '';

    if (melisma.hasAttribute('hyphen') || melisma.hasAttribute('h')) {
      const widthOfHyphen = TextMetrics.getTextWidthFromCache('-', font);

      text = '-';

      change.right = `${melismaWidth / 2 + widthOfHyphen / 2}px`;
    } else {
      change.width = `${melismaWidth}px`;
      change.top = `${-TextMetrics.getFontBoundingBoxDescentFromCache(font)}px`;
      change.height = `${TextMetrics.getFontHeight(font)}px`;
      change.borderMelisma = true;
    }

    change.textContent = text;
  }

  return change;
}

function processAutoMelismaRtl(melisma) {
  let change;
  const parentNote = melisma.closest('x-note, x-n');
  const siblingLyrics = parentNote.querySelector('x-lyric, x-ly');
  const siblingLyricsRect = siblingLyrics.getBoundingClientRect();

  let nextNote = parentNote.nextElementSibling;
  let nextLyrics;
  let depth = 0;
  let melismaWidth;
  let lastNoteLeft;

  while (
    nextNote &&
    (nextNote.nodeName === 'X-NOTE' || nextNote.nodeName === 'X-N') &&
    depth < 100
  ) {
    nextLyrics = nextNote.querySelector('x-lyric, x-ly');

    const nextNoteRect = nextNote.getBoundingClientRect();

    if (lastNoteLeft < nextNoteRect.left && lastNoteLeft !== undefined) {
      // We have wrapped around. Extend the melisma to the end of the last note
      // that was on the same line
      melismaWidth = siblingLyricsRect.left - lastNoteLeft;
      break;
    }

    if (nextLyrics && nextLyrics.innerText != TATWEEL) {
      // We've found lyrics. Extend the melisma to the start of the lyrics.
      const nextLyricsRect = nextLyrics.getBoundingClientRect();

      melismaWidth = siblingLyricsRect.left - nextLyricsRect.right;

      break;
    }

    lastNoteLeft = nextNoteRect.left;
    nextNote = nextNote.nextElementSibling;

    depth++;
  }

  if (melismaWidth) {
    change = { melisma };

    const melismaStyle = getComputedStyle(melisma);
    const fontFamily = melismaStyle.getPropertyValue(CssVars.LyricFontFamily);
    const fontSize = melismaStyle.getPropertyValue(CssVars.LyricFontSize);
    const font = `${fontSize} ${fontFamily}`;

    let text = '';

    const widthOfTatweel = TextMetrics.getTextWidthFromCache(TATWEEL, font);

    const numberOfTatweelsNeeded = Math.ceil(melismaWidth / widthOfTatweel);

    for (let i = 0; i < numberOfTatweelsNeeded; i++) {
      text += TATWEEL;
    }

    change.width = `${melismaWidth}px`;

    change.textContent = text;
  } else {
    console.log('zero width');
  }
  return change;
}

export function processAutoMelismas() {
  const melismas = document.querySelectorAll(
    'x-melisma[auto], x-mel[auto], x-melisma[a], x-mel[a]',
  );
  const melismasInViewPort = [];

  const changes = [];

  // Find all visible elements

  // Binary search to find an element in the viewport.
  // Assume elements are arranged top to bottom
  const currentIndex = binarySearch(melismas);

  // If an element was found, search before and after the element
  // to find all elements in the viewport
  if (currentIndex !== -1) {
    for (let i = currentIndex; i < melismas.length; i++) {
      if (isElementInOrNearViewport(melismas[i])) {
        melismasInViewPort.push(melismas[i]);
      } else {
        break;
      }
    }

    for (let i = currentIndex; i >= 0; i--) {
      if (isElementInOrNearViewport(melismas[i])) {
        melismasInViewPort.push(melismas[i]);
      } else {
        break;
      }
    }
  }

  // Calculate the changes
  for (let melisma of melismasInViewPort) {
    let change = byzhtml.options.melkiteRtl
      ? processAutoMelismaRtl(melisma)
      : processAutoMelisma(melisma);

    if (change) {
      changes.push(change);
    }
  }

  // Apply changes
  for (let change of changes) {
    change.melisma.textContent = change.textContent;

    if (change.width != null) {
      change.melisma.setAttribute('width', change.width);
    }

    if (change.right != null) {
      change.melisma.setAttribute('right', change.right);
    }

    if (change.top != null) {
      change.melisma.setAttribute('top', change.top);
    }

    if (change.height != null) {
      change.melisma.setAttribute('height', change.height);
    }

    if (change.borderMelisma) {
      change.melisma.setAttribute('border', '');
    } else {
      change.melisma.removeAttribute('border');
    }
  }
}
