# CamanJS White Balance filter

This is a filter for [CamanJS](http://camanjs.com) which is a JavaScript library for canvas/image manipulation.
The filter gives CamanJS ability to white balance an image with an RGB color or a color temperature (in Kelvin).

# How to use

* Include `caman.whitebalance.js` in your HTML after including CamanJS' latest bundle.
* If you want to input an RGB color, use this.whiteBalanceRgb(rgbColor)
* If you want to input a color temperature, use this.whiteBalance(colorTemperature)

```javascript
var rgbColor = {r: 100, g: 110, b: 70};
var colorTemperature = 3500; // e.g. some temperature between 0 and 40,000 K

Caman('#lut-preview', function () {
    this.revert(true); // update the canvas' context
    this.whiteBalanceRgb(rgbColor); // in case of RGB input
    this.whiteBalance(colorTemperature); // in case of color temperature input
    this.render(); // render back to canvas with ID #lut-preview
});
```

*Information:* Both filters use the same logic in the background. White balancing with a color temperature just adds converting the color temperature to a RGB value.
