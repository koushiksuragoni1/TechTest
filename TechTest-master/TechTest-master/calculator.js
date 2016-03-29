require('amd-loader');

define(function() {

    function Color(value, isMultiplier, tolerance) {

        this.value = value;

        this.isMultiplier = isMultiplier;

        this.tolerance = tolerance;
    }

    var _colors = {};

    _colors["black"]  = new Color(0,  true,  null);
    _colors["brown"]  = new Color(1,  true,  "1");
    _colors["red"]    = new Color(2,  true,  "2");
    _colors["orange"] = new Color(3,  true,  null);
    _colors["yellow"] = new Color(4,  true,  null);
    _colors["green"]  = new Color(5,  true,  "0.5");
    _colors["blue"]   = new Color(6,  true,  "0.25");
    _colors["violet"] = new Color(7,  true,  "0.10");
    _colors["grey"]   = new Color(8,  false, "0.05");
    _colors["white"]  = new Color(9,  false, null);
    _colors["gold"]   = new Color(-1, true,  "5");
    _colors["silver"] = new Color(-2, true,  "10");

    function multiplier(x, p) {

        var precision = 2;

        var returnValue = "";

        x = x * Math.pow(10, p);

        if (x >= 0 && x < 1e3) {

            returnValue = x.toPrecision(precision) / 1;
        }
        else if (x >= 1e3 && x < 1e6) {
            returnValue = x.toPrecision(precision) / 1e3 + "K";
        }
        else if (x >= 1e6 && x < 1e9) {
            returnValue = x.toPrecision(precision) / 1e6 + "M";
        }
        else if (x >= 1e9 && x < 1e12) {
            returnValue = x.toPrecision(precision) / 1e9 + "G";
        }
        else {
            return undefined;
        }

        return returnValue;
    }

    return {
        colors: function() {
            return _colors;
        },

        getResistorValue: function(bandOne, bandTwo, bandThree, bandFour) {
            {
                var resistance = (bandOne.value * 10 + bandTwo.value * 1);

                var power = bandThree.value;

                var tolerance = bandFour.tolerance;

                return multiplier(resistance, power) + String.fromCharCode(937) + " " + String.fromCharCode(177) + tolerance + "%";
            }
        }
    };
});
