function Color(value, isMultiplier, tolerance) {

    this.value = value;

    this.isMultiplier = isMultiplier;

    this.tolerance = tolerance;
}

var colors = {};

colors["black"]  = new Color(0,  true,  null);
colors["brown"]  = new Color(1,  true,  "1");
colors["red"]    = new Color(2,  true,  "2");
colors["orange"] = new Color(3,  true,  null);
colors["yellow"] = new Color(4,  true,  null);
colors["green"]  = new Color(5,  true,  "0.5");
colors["blue"]   = new Color(6,  true,  "0.25");
colors["violet"] = new Color(7,  true,  "0.10");
colors["grey"]   = new Color(8,  false, "0.05");
colors["white"]  = new Color(9,  false, null);
colors["gold"]   = new Color(-1, true,  "5");
colors["silver"] = new Color(-2, true,  "10");

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

function getResistorValue(bandOne, bandTwo, bandThree, bandFour) {
    var resistance = (bandOne.value * 10 + bandTwo.value * 1);

    var power = bandThree.value;

    var tolerance = bandFour.tolerance;

    return multiplier(resistance, power) + String.fromCharCode(937) + " " + String.fromCharCode(177) + tolerance + "%";
}

