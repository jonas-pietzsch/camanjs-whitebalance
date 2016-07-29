Caman.prototype.colorTemperatureToRgb = function (temp) {
    var m = window.Math;
    temp /= 100;
    var r, g, b;

    if (temp <= 66) {
        r = 255;
        g = m.min(m.max(99.4708025861 * m.log(temp) - 161.1195681661, 0), 255);
    } else {
        r = m.min(m.max(329.698727446 * m.pow(temp - 60, -0.1332047592), 0), 255);
        g = m.min(m.max(288.1221695283 * m.pow(temp - 60, -0.0755148492), 0), 255);
    }

    if (temp >= 66) {
        b = 255;
    } else if (temp <= 19) {
        b = 0;
    } else {
        b = temp - 10;
        b = m.min(m.max(138.5177312231 * m.log(b) - 305.0447927307, 0), 255);
    }

    return {
        r: r,
        g: g,
        b: b
    }
};

var whiteBalance = function (pixel, color) {
    pixel.r = pixel.r * (255 / color.r);
    pixel.g = pixel.g * (255 / color.g);
    pixel.b = pixel.b * (255 / color.b);

    return pixel;
};

Caman.Filter.register('whiteBalance', function (colorTemperature) {
    var rgbColor = this.colorTemperatureToRgb(colorTemperature);

    return this.process('whiteBalance', function (pixel) {
        return whiteBalance(pixel, rgbColor);
    });
});

Caman.Filter.register('whiteBalanceRgb', function (rgbColor) {
    return this.process('whiteBalanceRgb', function (pixel) {
        return whiteBalance(pixel, rgbColor);
    });
});
