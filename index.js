import byzhtml from './lib/byzhtml.js';
import { defineCustomElements } from './lib/util/defineCustomElements.js';
import { isWebkit } from './lib/util/isWebkit.js';
import { processAutoMelismas } from './lib/util/MelismaProcessor.js';
import { throttle } from 'throttle-debounce';

if (isWebkit()) {
  console.log('byzhtml: webkit browser detected. Using webkit positioning.');

  const fontFamilies = ['Neanes', 'NeanesRTL', 'NeanesStathisSeries'];

  (async () => {
    for (const fontFamily of fontFamilies) {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/neanes/byzhtml@1.0.26/dist/${fontFamily.toLowerCase()}.metadata.json`,
        );

        const data = await response.json();
        byzhtml.fontService.loadMap(fontFamily, data);
      } catch (err) {
        console.error(`could not load font metadata for ${fontFamily}: ${err}`);
      }
    }
  })().then(() => {
    byzhtml.neumeMappingService.glyphNameToCodepointMap.set(
      'oligonKentimataBelow.alt01',
      '\uF000',
    );

    byzhtml.neumeMappingService.glyphNameToCodepointMap.set(
      'antikenoma.alt01',
      '\uF002',
    );

    byzhtml.options.useWebkitPositioning = true;

    defineCustomElements();
  });
} else {
  defineCustomElements();
}

window.addEventListener('load', (event) => {
  setTimeout(processAutoMelismas, 0);

  // TODO figure out how to determine whether custom elements
  // have loaded
  setTimeout(processAutoMelismas, 100);
  setTimeout(processAutoMelismas, 1000);

  window.addEventListener('resize', throttle(100, processAutoMelismas));

  window.addEventListener('scroll', throttle(100, processAutoMelismas));
});

export { byzhtml as default };
