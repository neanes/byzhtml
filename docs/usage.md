<link rel="stylesheet" href="usage.css" />

# Usage

## Neumes

To display a neume, use any of the [neume components](component-list-neumes.md). Note that many components have shorter aliases, which can be used instead of the full name.

Example:

```html
<x-ison></x-ison>
```

or

```html
<x-i></x-i>
```

Result: <x-ison></x-ison>

### Supporting Neumes

Supporting neumes must be written without any space between tags.

```html
<x-ison></x-ison><x-psifiston></x-psifiston>
```

Result: <x-note><x-ison></x-ison><x-psifiston></x-psifiston></x-note>

Let's see what happens when this rule is not followed.

```html
<x-ison></x-ison> <x-psifiston></x-psifiston>
```

Result: <x-note><x-ison></x-ison> <x-psifiston></x-psifiston></x-note>

!> Note that if you are using an Apple Webkit browser, such as Safari, the above "bad example" may ironically be rendered correctly.

Multiple supporting neumes may combined.

```html
<x-apostrofos></x-apostrofos><x-antikenoma></x-antikenoma><x-apli></x-apli>
```

Result: <x-note><x-apostrofos></x-apostrofos><x-antikenoma></x-antikenoma><x-apli></x-apli></x-note>

### Formatting the HTML for Supporting Neumes

If you wish to put neumes on different lines for the sake of readability, you may write the neumes in the following way.

<!-- prettier-ignore -->
```html
<x-ison></x-ison
><x-psifiston></x-psifiston>
```

### Martyria

For convenience, there is an `x-martyria` component that can be used to group the martyria neumes. This makes it easier to apply CSS styling to all martyria.

<!-- prettier-ignore -->
```html
<x-martyria>
    <x-martyria-note-pa></x-martyria-note-pa
    ><x-martyria-alpha-below></x-martyria-alpha-below>
</x-martyria>
```

<!-- prettier-ignore -->
Result:
<x-martyria>
    <x-martyria-note-pa></x-martyria-note-pa
    ><x-martyria-alpha-below></x-martyria-alpha-below>
</x-martyria>

Tempo sign components (`x-agogi-*-above`) may be combined with martyria, in which case the tempo sign is placed above the martyria.

<!-- prettier-ignore -->
```html
<x-martyria>
    <x-martyria-note-pa></x-martyria-note-pa
    ><x-martyria-alpha-below></x-martyria-alpha-below
    ><x-agogi-metria-above class="agogi"></x-agogi-metria-above>
</x-martyria>
```

Result:
<x-martyria>
<x-martyria-note-pa></x-martyria-note-pa
    ><x-martyria-alpha-below></x-martyria-alpha-below
    ><x-agogi-metria-above class="agogi"></x-agogi-metria-above>
</x-martyria>

## Lyrics

The `x-note` component groups neumes and lyrics together. Lyrics should be placed in an `x-lyric` component.

?> Lyrics may be abbreviated with the following alias: `<x-ly></x-ly>`.

```html
<x-note>
  <x-ison></x-ison>
  <x-lyric>To</x-lyric>
</x-note>
<x-note>
  <x-oligon></x-oligon>
  <x-lyric>thee,</x-lyric>
</x-note>
<x-note>
  <x-ison></x-ison>
  <x-lyric>O</x-lyric>
</x-note>
<x-note>
  <x-apostrofos></x-apostrofos>
  <x-lyric>Lord.</x-lyric>
</x-note>
```

Result:
<x-note>
<x-ison></x-ison>
<x-lyric>To</x-lyric>
</x-note>
<x-note>
<x-oligon></x-oligon>
<x-lyric>Thee,</x-lyric>
</x-note>
<x-note>
<x-ison></x-ison>
<x-lyric>O</x-lyric>
</x-note>
<x-note>
<x-apostrofos></x-apostrofos>
<x-lyric>Lord.</x-lyric>
</x-note>

### Melismas

Melismas can be displayed with the `x-melisma` component. Use the `auto` attribute to automatically calculate the melismas. If you do not like the automated result, then you may omit the `auto` attribute and type out the melisma as underscores.

?> Automatic melismas may be abbreviated with the following alias: `<x-mel a></x-mel>`.

!> If you are using byzhtml as part of a single page application (SPA), and/or if you are adding neumes to the DOM after the initial page has loaded, then you will need to call `byzhtml.processAutoMelismas()` after the elements have been added to the DOM in order to process and display the automatic melismas.

#### Automatic Melismas

<!-- prettier-ignore -->
```html
<x-note>
  <x-oligon-kentimata-above></x-oligon-kentimata-above
  ><x-gorgon-above></x-gorgon-above>
  <x-lyric>Lord,</x-lyric>
  <x-melisma auto></x-melisma>
</x-note>
<x-note>
  <x-apostrofos></x-apostrofos>
</x-note>
<x-note>
  <x-apostrofos></x-apostrofos>
  <x-lyric>I</x-lyric>
</x-note>
```

<!-- prettier-ignore -->
Result:
<x-note>
  <x-oligon-kentimata-above></x-oligon-kentimata-above><x-gorgon-above class="gorgon"></x-gorgon-above>
  <x-lyric>Lord,</x-lyric>
  <x-melisma auto></x-melisma>
</x-note>
<x-note>
<x-apostrofos></x-apostrofos>
</x-note>
<x-note>
  <x-apostrofos></x-apostrofos>
  <x-lyric>I</x-lyric>
</x-note>

#### Custom Melismas

<!-- prettier-ignore -->
```html
<x-note>
  <x-oligon-kentimata-above></x-oligon-kentimata-above
  ><x-gorgon-above></x-gorgon-above>
  <x-lyric>Lord,</x-lyric>
  <x-melisma>____</x-melisma>
</x-note>
<x-apostrofos></x-apostrofos>
<x-note>
  <x-apostrofos></x-apostrofos>
  <x-lyric>I</x-lyric>
</x-note>
```

<!-- prettier-ignore -->
Result:
<x-note>
  <x-oligon-kentimata-above></x-oligon-kentimata-above><x-gorgon-above class="gorgon"></x-gorgon-above>
  <x-lyric>Lord,</x-lyric>
  <x-melisma>___</x-melisma>
</x-note>
<x-apostrofos></x-apostrofos>
<x-note>
  <x-apostrofos></x-apostrofos>
  <x-lyric>I</x-lyric>
</x-note>

### Hyphenation

Hyphenation also uses the `x-melisma` component. Hyphens may be automatically calculated using the `auto hyphen` attributes. If you do not like the automatically calculated result, then you may omit the attributes and write out the desired number of spaces and hyphens inside the `x-melisma` component.

?> Automatic hyphenation may be abbreviated with the following alias: `<x-mel a h></x-mel>`.

!> If you are using byzhtml as part of a single page application (SPA), and/or if you are adding neumes to the DOM after the initial page has loaded, then you will need to call `byzhtml.processAutoMelismas()` after the elements have been added to the DOM in order to process and display the automatic hyphenation.

#### Automatic Hyphenation

<!-- prettier-ignore -->
```html
<x-note>
  <x-ison></x-ison>
  <x-lyric>Re</x-lyric>
  <x-melisma auto hyphen></x-melisma>
</x-note>
<x-note>
  <x-ison></x-ison>
  <x-lyric>joice</x-lyric>
</x-note>
```

<!-- prettier-ignore -->
Result:
<x-note>
  <x-ison></x-ison>
  <x-lyric>Re</x-lyric>
  <x-melisma auto hyphen></x-melisma>
</x-note>
<x-note>
  <x-ison></x-ison>
  <x-lyric>joice</x-lyric>
</x-note>

#### Custom Hyphenation

<!-- prettier-ignore -->
```html
<x-note>
  <x-ison></x-ison>
  <x-lyric>Re</x-lyric>
  <x-melisma> -</x-melisma>
</x-note>
<x-note>
  <x-ison></x-ison>
  <x-lyric>joice</x-lyric>
</x-note>
```

!> If your HTML editor automatically removes whitespace, then you may want to disable that feature, or use the `&nbsp;` character instead. E.g. `<x-melisma>&nbsp;-</x-melisma>`

<!-- prettier-ignore -->
Result:
<x-note>
  <x-ison></x-ison>
  <x-lyric>Re</x-lyric>
  <x-melisma> -</x-melisma>
</x-note>
<x-note>
  <x-ison></x-ison>
  <x-lyric>joice</x-lyric>
</x-note>

## Fixing collisions

While SBMuFL fonts attempt to automatically align supporting neumes, sometimes collisions happen, especially if there are many supporting neumes on the same base neume. Or sometimes, you may simply want to reposition a supporting neume because you think it would look nicer somewhere else. To do this, we can use the `left` and `top` attributes on the supporting neume components.

<!-- prettier-ignore -->
Let's say that we think the following looks a little too crowded.
<x-note><x-oligon></x-oligon><x-fthora-enharmonic-above class="fthora"></x-fthora-enharmonic-above><x-ison-indicator-pa class="ison-indicator"></x-ison-indicator-pa></x-note>

Let's move the ison indicator a little to the left with the attribute `left="-0.5em"`.

<!-- prettier-ignore -->
```html
<x-oligon></x-oligon
><x-fthora-enharmonic-above></x-fthora-enharmonic-above
><x-ison-indicator-pa left="-0.5em"></x-ison-indicator-pa>
```

<!-- prettier-ignore -->
Result:
<x-note><x-oligon></x-oligon><x-fthora-enharmonic-above class="fthora"></x-fthora-enharmonic-above><x-ison-indicator-pa class="ison-indicator" left="-0.5em"></x-ison-indicator-pa></x-note>

## Configuration & Styling

Any component may be styled with CSS using the standard CSS properties. There are also several custom properties that may be used to apply styling.

| Custom Property               | Description                                     |
| ----------------------------- | ----------------------------------------------- |
| --byz-color-accidental        | Sets the color for the yfesis and the diesis.   |
| --byz-color-agogi             | Sets the color for agogi                        |
| --byz-color-barline           | Sets the color for barlines                     |
| --byz-color-fthora            | Sets the color for fthores.                     |
| --byz-color-gorgon            | Sets the color for gorgons.                     |
| --byz-color-heteron           | Sets the color for heterons.                    |
| --byz-color-ison-indicator    | Sets the color for ison indicators.             |
| --byz-color-koronis           | Sets the color for the koronis.                 |
| --byz-color-martyria          | Sets the color for martyria.                    |
| --byz-color-measure-number    | Sets the color for measure numbers.             |
| --byz-color-note-indicator    | Sets the color for note indicators.             |
| --byz-drop-cap-color          | Sets the color for drop caps.                   |
| --byz-drop-cap-font-family    | Sets the font family for drop caps.             |
| --byz-drop-cap-font-size      | Sets the font size for drop caps.               |
| --byz-drop-cap-offset-v       | Sets the vertical offset for drop caps.         |
| --byz-lyric-font-family       | Sets the font family for lyrics.                |
| --byz-lyric-font-size         | Sets the font size for lyrics.                  |
| --byz-lyric-offset-h          | Sets the horizontal offset for lyrics.          |
| --byz-lyric-offset-v          | Sets the vertical offset for lyrics.            |
| --byz-neume-font-family       | Sets the font family for neumes.                |
| --byz-neume-font-size         | Sets the font size for neumes.                  |
| --byz-spacer-width-apostrofos | Sets the width in ems of the apostrofos spacer. |
| --byz-spacer-width-vareia     | Sets the width in ems of the vareia spacer.     |

Defaults for these custom properties may be defined in `:root` or `html` and they may be overridden at any scope.

<!-- prettier-ignore -->
```html
<x-ison></x-ison>
<x-ison style="--byz-neume-font-size: 15pt"></x-ison>
```

<!-- prettier-ignore -->
Result:
<x-ison></x-ison>
<x-ison style="--byz-neume-font-size: 15pt"></x-ison>
