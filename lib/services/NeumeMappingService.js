import glyphnames from '../../assets/fonts/sbmufl/glyphnames.json' with { type: 'json' };

export class NeumeMappingService {
  constructor() {
    this.glyphNameToCodepointMap = new Map();

    this.initMap();
  }

  getMapping(neume) {
    return this.glyphNameToCodepointMap.get(neume);
  }

  initMap() {
    for (let glyph in glyphnames) {
      const data = glyphnames[glyph];
      const codepoint = Number('0x' + data.codepoint.substring(2));
      this.glyphNameToCodepointMap.set(glyph, String.fromCodePoint(codepoint));
    }

    // TODO hard-coding optional glyphs
    // This is okay for now since Neanes is the only SBMuFL font

    this.glyphNameToCodepointMap.set(
      'oligonKentimataBelow.alt01',
      String.fromCodePoint(0xf000),
    );

    this.glyphNameToCodepointMap.set(
      'oligonKentimataAbove.alt01',
      String.fromCodePoint(0xf001),
    );

    this.glyphNameToCodepointMap.set(
      'antikenoma.alt01',
      String.fromCodePoint(0xf002),
    );

    this.glyphNameToCodepointMap.set(
      'modeFirst.salt01',
      String.fromCodePoint(0xf003),
    );

    this.glyphNameToCodepointMap.set(
      'modeFourth.salt01',
      String.fromCodePoint(0xf004),
    );

    this.glyphNameToCodepointMap.set(
      'oligonKentimataBelow.alt02',
      String.fromCodePoint(0xf005),
    );

    this.glyphNameToCodepointMap.set(
      'psifiston.salt01',
      String.fromCodePoint(0xf006),
    );

    this.glyphNameToCodepointMap.set(
      'heteronConnecting.salt01',
      String.fromCodePoint(0xf007),
    );

    this.glyphNameToCodepointMap.set(
      'psifiston.alt01',
      String.fromCodePoint(0xf008),
    );
  }
}
