export class TextMetrics {
  static canvas;
  static cache = new Map();
  static metricCache = new Map();

  static getContext() {
    const canvas = this.canvas || document.createElement('canvas');
    this.canvas = canvas;

    return canvas.getContext('2d');
  }

  static getTextWidth(text, font) {
    const context = TextMetrics.getContext();
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  }

  static getTextWidthFromCache(text, font) {
    const key = `${text} | ${font}`;

    let width = TextMetrics.cache.get(key);

    if (width == null) {
      width = TextMetrics.getTextWidth(text, font);

      TextMetrics.cache.set(key, width);
    }

    return width;
  }

  static getFontBoundingBoxDescentFromCache(font) {
    const key = `fontBoundingBoxDescent | ${font}`;

    let descent = TextMetrics.metricCache.get(key);

    if (descent == null) {
      const context = TextMetrics.getContext();
      context.font = font;

      const metrics = context.measureText('M');
      descent =
        metrics.fontBoundingBoxDescent ?? metrics.actualBoundingBoxDescent ?? 0;

      TextMetrics.metricCache.set(key, descent);
    }

    return descent;
  }

  static getFontHeight(font) {
    const key = `fontHeight | ${font}`;

    let height = TextMetrics.metricCache.get(key);

    if (height == null) {
      const context = this.getContext();

      context.font = font;
      const metrics = context.measureText('M');

      height =
        metrics.fontBoundingBoxAscent != null &&
        metrics.fontBoundingBoxDescent != null
          ? metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent
          : metrics.actualBoundingBoxAscent != null &&
              metrics.actualBoundingBoxDescent != null
            ? metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
            : 0;

      TextMetrics.metricCache.set(key, height);
    }

    return height;
  }
}
