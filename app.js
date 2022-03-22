
let quantity;


let input= document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');

input.focus();



let defaultQuantityID = 'length';
let quantities = [
  
  { name:             'Area',
    description:      'Convert area measurements like square meters, square feet, acres.',
    defaultUnitIndex: 0,
    units: [
      ["acres",                      "",    4046.8564224],
      ["ares",                       "",    100],
      ["circular inches",            "",    0.000506707479],
      ["hectares",                   "",    1e4],
      ["hides",                      "",    485000], 
      ["roods",                      "",    1011.7141056],
      ["square centimeters",         "cmВІ", 1e-4],
      ["square feet (US & UK)",      "",    0.09290304],
      ["square feet (US survey)",    "",    0.092903411613],
      ["square inches",              "",    0.00064516],
      ["square kilometers",          "kmВІ", 1e6],
      ["square meters",              "mВІ",  1],
      ["square miles",               "",    2589988.110336],
      ["square millimeters",         "mmВІ", 1e-6],
      ["squares (of timber)",        "",    9.290304],
      ["square rods (or poles)",     "",    25.29285264],
      ["square yards",               "",    0.83612736],
      ["townships",                  "",    93239571.972]
    ]},
  { name:             'Bits & Bytes',
    description:      'Convert bits, bytes, kilobytes, gigabytes.',
    defaultUnitIndex: 1,
    units: [
      ["bits",           "",   0.125],
      ["bytes",          "",   1],
      ["kilobits",       "Kb", 128],
      ["kilobytes",      "KB", 1024],
      ["megabits",       "Mb", 131072],
      ["megabytes",      "MB", 1048576],
      ["gigabits",       "Gb", 134217728],
      ["gigabytes",      "GB", 1073741824],
      ["terabits",       "Tb", 137438953472],
      ["terabytes",      "TB", 1099511627776],
      ["petabits",       "Pb", 140737488355328],
      ["petabytes",      "PB", 1125899906842624],
      ["exabits",        "Eb", 144115188075855872],
      ["exabytes",       "EB", 1152921504606846976]
    ]},
  
  { name:             'Density',
    description:      'Convert density measurements like kilogram / cubic meter, milligram / liter, pounds / cubic inch.',
    defaultUnitIndex: 2,
    units: [
      ["grains/gallon (UK)",       "gr/gal", 0.000014253948343691203],
      ["grains/gallon (US)",       "gr/gal", 0.000017118011571775823],
      ["grams/cubic centimeters",  "g/cmВі",  1],
      ["grams/liter",              "g/l",    1e-3],
      ["grams/milliliters",        "g/ml",   1],
      ["kilograms/cubic meters",   "kg/mВі",  1e-3],
      ["kilograms/liter",          "kg/l",   1],
      ["megagrams/cubic meter",    "Mg/mВі",  1],
      ["milligrams/milliliter",    "mg/ml",  1e-3],
      ["milligrams/liter",         "mg/l",   1e-6],
      ["ounces/cubic inch",        "oz/inВі", 1.729994044],
      ["ounces/gallon (UK)",       "oz/gal", 0.006236023],
      ["ounces/gallon (US)",       "oz/gal", 0.007489152],
      ["pounds/cubic inch",        "lb/inВі", 27.679904],
      ["pounds/cubic foot",        "lb/ftВі", 0.016018463],
      ["pounds/gallon (UK)",       "lb/gal", 0.099776373],
      ["pounds/gallon (US)",       "lb/gal", 0.119826427],
      ["slugs/cubic foot",         "",       0.51531788206],
      ["tonnes/cubic meter",       "",       1],
      ["tons (UK)/cubic yard",     "",       1.328939184],
      ["tons (US)/cubic yard",     "",       1.186552843]
    ]},
  { name:             'Electric Current',
    description:      'Convert electric current measurements like ampere, watt / volt',
    defaultUnitIndex: 3,
    units: [
      
      ["ampere",                          "A", 1],
      ["kiloampere",                      "kA", 1e3],
      ["milliampere",                     "mA", 1e-3],
      ["biot",                            "Bi", 10],
      ["abampere",                        "abA", 10],
      ["centiampere",                     "", 0.01],
      ["statampere",                      "stA", 3.335641e-10],
      ["coulomb/second",                  "", 1],
      ["EMU of current",                  "", 10],
      ["ESU of current",                  "", 3.335641e-10],
      ["franklin/second",                 "", 3.335641e-10],
      ["gaussian electric current",       "", 3.335641e-10],
      ["gigaampere",                      "", 1e+9],
      ["gilbert",                         "Gi", 0.79577472],     
      ["megaampere",                      "", 1e6],
      ["microampere",                     "", 1e-6],     
      ["milliamp",                        "", 1e-3],
      ["nanoampere",                      "", 1e-9],
      ["picoampere",                      "", 1e-12],
      ["siemens volt",                    "", 1],
      ["teraampere",                      "", 1e+12],
      ["volt/ohm",                        "", 1],
      ["watt/volt",                       "", 1],
      ["weber/henry",                     "", 1]
    ]},
  { name:             'Energy',
    description:      'Convert energy measurements like calories, joules, megajoules, watt hour.',
    defaultUnitIndex: 4,
    units: [
      ["joules",                      "J",      1], 
      ["kilojoules",                  "kJ",     1e3],
      ["kilowatt hours",              "kWh",    3.6e6],
      ["watt hours",                  "Wh",     3600],
      ["calories (food)" ,             "",      4186.8],
      ["horsepower hours",            "",       2684520],
      ["Btu (th)",                    "",       1054.350],
      ["Btu (mean)",                  "",       1055.87],
      ["megajoules",                  "MJ",     1e6],
      ["gigajoules",                  "GJ",     1e9],
      ["petajoules",                  "PJ",     1e15],
      ["terajoules",                  "TJ",     1e12],
      ["electron volts",              "eV",     1.60219e-19],
      ["ergs",                        "",       1e-7],
      ["gigawatt hours",              "GWh",    3.6e12],  
      ["megawatt hours",              "MWh",    3.6e9],
      ["watt seconds",                "Ws",     1],
      ["calories (IT)",               "",       4.1868],
      ["calories (th)",               "",       4.184],
      ["calories (mean)",             "",       4.19002],
      ["calories (15C)",              "",       4.18580],
      ["calories (20C)",              "",       4.18190],      
      ["centigrade heat units",       "",       1900.4],
      ["exajoules",                   "EJ",     1e18],           
      ["kilocalories (IT)",           "",       4186.8],
      ["kilocalories (th)",           "",       4184],
      ["kilogram-force meters",       "",       9.80665],       
      ["newton meters",               "Nm",     1],     
      ["terawatt hours",              "TWh",    3.6e15],
      ["therms",                      "",       105505585.257348],      
      ["foot-pound force",            "ft lbs", 1.3558179483314004],
      ["foot poundals",               "",       0.042140],
      ["gasoline (L)",                "",       34200000],        
      ["inch-pound force",         "  in lbf",  0.11298482902761668] 
    ]},


  { name:             'Force',
    description:      'Convert force measurements like newtons, pound force, tons force.',
    defaultUnitIndex: 5,
    units: [
      ["newtons",          "N",   1],
      ["meganewtons",      "MN",  1e6],
      ["dynes",            "dyn", 1e-5],
      ["kilograms force",  "kgf", 9.80665],
      ["kilonewtons",      "kN",  1000],
      ["kips",             "",    4448.222],      
      ["pounds force",     "lbf", 4.4482216152605],
      ["poundals",         "pdl", 0.138255],
      ["sthГЁne",           "sn",  1000],
      ["tonnes force",     "",    9806.65],
      ["tons force (UK)",  "",    9964.01641818352],
      ["tons force (US)",  "",    8896.443230521]
    ]},

  { name:             'Length',
  description:      'Convert length measurements like meter, inches, feet or light years.',
  defaultUnitIndex: 6,
  units: [
      ["meters",                          "m",        1, 0],
      ["kilometers",                      "km",       1000, 0],
      ["centimeters",                     "cm",       0.01, 0],
      ["decimeters",                      "dm",       0.1, 0],
      ["millimeters",                     "mm",       0.001, 0],
      ["micrometers",                     "Вµm",       1e-6, 0],
      ["nanometers",                      "nm",       1e-9, 0],
      ["miles (UK & US)",                 "",         1609.344, 0],
      ["yards",                           "yd",       0.9144, 0],
      ["feet (UK & US)",                  "",         0.3048, 0],
      ["inches",                          "in",       0.0254, 0],
      ["light years",                     "",         9.460528405e15, 0]
      //name, code , count, decimal
    
  ]},
{ name:             'Mass',
  description:      'Convert mass measurements like kilograms, pounds, stones.',
  defaultUnitIndex: 7,
  units: [ 
     ["grams",                          "g",    1e-3],
     ["kilograms",                      "kg",   1],
    ["kilotonnes",                     "kt",   1e6],
    ["megatonnes",                     "Mt",   1e9],
    ["micrograms",                     "Вµg",   1e-9],
    ["milligrams",                     "mg",   1e-6],
    ["nanograms",                      "ng",   1e-12],
    ["ounces (US & UK)",               "oz",   0.028349523125],
    ["ounces (troy, precious metals)", "oz t", 0.0311034768],
    ["picograms",                      "pg",   1e-15],
    ["pounds (US & UK)",               "lbs",  0.45359237],
    ["pounds (troy, precious metals)", "lb t", 0.3732417216],
    ["Solar masses",                   "Mв‰",  1.989e30],
    ["slugs (g-pounds)",               "",     14.593903],
    ["stones",                         "st",   6.35029318],
    ["tons (UK or long)",              "LT",   1016.0469088],
    ["tons (US or short)",             "ST",   907.18474],
    ["tonnes (metric)",                "t",    1000],
    ["carats (metric)",                "CD",   0.0002],
    ["cental",                         "",     45.359237],
    ["decagrams",                      "dag",  0.01],
    ["Earth masses",                   "MвЉ•",   5.980e24],
    ["femtograms",                     "fg",   1e-18],
    ["grains",                         "gr",   0.00006479891],
    ["hectograms",                     "hg",   0.1],
    ["hundredweights",                 "cwt",  50.80234544]
   
  ]},
  { name:             'Power',
    description:      'Convert power measurements like watts, horsepower, joules/second.',
    defaultUnitIndex: 8,
    units: [
      ["watts",                        "W",  1],
      ["petawatts",                    "PW", 1e15],
      ["megawatts",                    "MW", 1e6],
      ["gigawatts",                    "GW", 1e9],
      ["terawatts",                    "TW", 1e12],
      ["kilowatts",                    "kW", 1e3],
      ["horsepowers (electric)",       "",   746],
      ["horsepowers (international)",  "",   745.69987158227022],
      ["horsepowers (water)",          "",   746.043],
      ["horsepowers (metric)",         "",   735.4988],
      ["Btu/hour",                     "",   0.2930711],
      ["Btu/minute",                   "",   17.584267],
      ["Btu/second",                   "",   1055.056],
      ["kilocalories(th)/hour",        "",   1.162222222222222222],
      ["kilocalories(th)/minute",      "",   69.73333333333333333],
      ["kilogram-force meters/hour",   "",   0.002724],
      ["kilogram-force meters/minute", "",   0.163444],
      ["calories(th)/hour",            "",   0.001162222222222222],
      ["calories(th)/minute",          "",   0.069733333333333333],
      ["calories(th)/second",          "",   4.184],
      ["foot pounds-force/minute",     "",   0.022597],
      ["foot pounds-force/second",     "",   1.35582],      
      ["joules/hour",                  "",   0.0002777777777777778],
      ["joules/minute",                "",   0.016666666666666666],
      ["joules/second",                "",   1],
      ["ton of refrigeration",         "TR", 3516.853]
      
    ]},
  { name:             'Pressure',
    description:      'Convert pressure measurements like pascals, psi, bars, atmospheres, newton/sq. meter',
    defaultUnitIndex: 9,
    units: [
      ["pascals",                       "Pa",    1],
      ["kilopascals [kPa]",             "",      1000],
      ["bars",                          "",      1e5],
      ["atmospheres",                   "atm",   101325],      
      ["megapascals [MPa]",             "",      1e6],
      ["hectopascals",                  "hPa",   100],
      ["newtons/sq.centimeter",         "N/cmВІ", 1e4],
      ["newtons/sq.meter",              "N/mВІ",  1],
      ["newtons/sq.millimeter",         "N/mmВІ", 1e6],
      ["kilonewtons/sq.meter",          "",      1e3],
      ["kilonewtons/sq.millimeter",     "",      1e9],          
      ["kips/sq.inch",                  "",      6894760],
      ["meganewtons/sq.meter",          "",      1e6],
      ["meganewtons/sq.millimeter",     "",      1e12],      
      ["meters of water",               "",      9806.65],
      ["millibars",                     "",      100],
      ["kilogram-forces/sq.centimeter", "",      98066.5],
      ["kilogram-forces/sq.meter",      "",      9.80665],
      ["tonnes-force/sq.cm",            "",      98066500],
      ["tonnes-force/sq.meter",         "",      9806.65],
      ["torr (mm Hg 0В°C)",              "",      133.322],
      ["poundals/sq.foot",              "",      1.44816],
      ["tons (UK)-force/sq.foot",       "",      107251],
      ["tons (UK)-force/sq.inch",       "",      15444300],
      ["tons (US)-force/sq.foot",       "",      95760],
      ["tons (US)-force/sq.inch",       "",      13789500],
      ["centimeters mercury",           "",      1333.22],
      ["centimeters water",             "",      98.0665],
      ["feet of water",                 "",      2989.06692],      
      ["inches of water",               "",      249.08891],
      ["inches of mercury",             "",      3386.388],
      ["millimeters of mercury",        "mmHg",  133.322],
      ["millimeters of water",          "",      9.80665],      
      ["pounds-force/sq.foot",          "",      47.880],
      ["pounds-force/sq.inch",          "psi",   6894.757]

      
    ]},
  { name:             'Speed',
    description:      'Convert speed measurements like kilometers/hour, miles/hour, knots.',
    defaultUnitIndex: 10,
    units: [
      ["centimeters/minute",          "",     0.00016666666666666666],
      ["centimeters/second",          "",     0.01],
      ["feet/hour",                   "",     0.00008466683600033866],
      ["feet/minute",                 "",     0.00508],
      ["feet/second",                 "ft/s", 0.3048],
      ["inches/minute",               "",     0.0004233341800016934],
      ["inches/second",               "",     0.0254],
      ["kilometers/hour",             "km/h", 0.2777777777777778],
      ["kilometers/second",           "",     1000],
      ["knots",                       "kn",   0.5144444444444444444],
      ["Mach number (ISA/Sea level)", "",     340.2933],
      ["meters/hour",                 "m/h",  0.0002777777777777778],
      ["meters/minute",               "",     0.016666666666666666],
      ["meters/second",               "m/s",  1],
      ["miles/hour",                  "mph",  0.44704],
      ["miles/minute",                "",     26.8224],
      ["miles/second",                "",     1609.344],
      ["nautical miles/hour",         "",     0.5144444444444444444],
      ["Nm/24hr",                     "",     0.0214351851851851851],
      ["speed of light",              "",     2.9979e8],
      ["speed of sound",              "",     343],
      ["yards/hour",                  "",     0.000254000508001016],
      ["yards/minute",                "",     0.01524],
      ["yards/second",                "",     0.9144]
    ]},
  
  { name:             'Time',
    description:      'Convert time measurements like seconds, minutes, hours, days, weeks, years.',
    defaultUnitIndex: 11,
    units: [
      ["seconds",                      "s",   1],
      ["microseconds",                 "Ојs",  1e-6],
      ["millenia",                     "",    31536000000],
      ["milliseconds",                 "ms",  1e-3], 
      ["nanoseconds",                  "ns",  1e-9],
      ["picoseconds",                  "ps",  1e-12],
      ["minutes",                      "min", 60],
      ["hours",                        "h",   3600],
      ["days",                         "d",   86400],
      ["weeks",                        "",    604800],
      ["months (Common)",              "",    2628000],
      ["quarters (Common)",            "",    7884000],
      ["months (Synodic)",             "",    2551442.8896], 
      ["years (Common)",               "y",   31536000],
      ["years (Average Gregorian)",    "",    31556952],
      ["years (Julian)",               "",    31557600],
      ["years (Leap)",                 "",    31622400],
      ["years (Tropical)",             "",    31556925.216], 
      ["decades",                      "",    315360000],
      ["centuries",                    "",    3153600000],
      ["femtoseconds",                 "fs",  1e-15],
      ["fortnights",                   "",    1209600]
     
      
    ]},

    
  { name:             'Volume',
    description:      'Convert volume measurements like cubic meters, liters, gallons, pints.',
    defaultUnitIndex: 12,
    units: [
      ["acre foot",               "",       1233481.83754752],
      ["barrels (oil)",           "bbl",    158.987294928],
      ["bushels (UK)",            "",       36.36872],
      ["bushels (US)",            "",       35.23907016688],
      ["centiliters",             "",       0.01],
      ["cubic centimeters",       "cmВі",    1e-3],
      ["cubic decimeters",        "dmВі",    1],
      ["cubic decameters",        "",       1e6],
      ["cubic feet",              "ftВі",    28.316846592],
      ["cubic inches",            "",       0.016387064],
      ["cubic kilometers",        "",       1e12],
      ["cubic meters",            "mВі",     1e3],
      ["cubic mile",              "",       4.168181825e12],
      ["cubic millimeters",       "",       1e-6],
      ["cubic yards",             "",       764.554857984],
      ["cups",                    "",       0.2365882365],
      ["deciliters",              "",       0.1],
      ["dram (imperial)",         "",       0.0035516328125000],
      ["dram (US)",               "",       0.0036966911953125],
      ["fluid ounces (imperial)", "fl oz",  0.0284130625],
      ["fluid ounces (US)",       "fl oz",  0.0295735295625],
      ["gallons (imperial)",      "gal",    4.54609],
      ["gallons, dry (US)",       "",       4.40488377086],
      ["gallons, liquid (US)",    "gal",    3.785411784],
      ["gill (imperial)",         "gi",     0.1420653125],
      ["gill (US)",               "gi",     0.11829411825],
      ["kiloliters",              "kl",     1e3],
      ["liters",                  "l or L", 1],
      ["liters (1901-1964)",      "",       1.000028],
      ["milliliters",             "ml",     1e-3],
      ["microliters",             "Вµl",     1e-6],
      ["nanoliters",              "nl",     1e-9],
      ["picoliters",              "pl",     1e-12],
      ["pints (imperial)",        "pt",     0.56826125],
      ["pints, dry (US)",         "",       0.5506104713575],
      ["pints, liquid (US)",      "pt",     0.473176473],
      ["quarts (imperial)",       "qt",     1.1365225],
      ["quarts, dry (US)",        "",       1.101220942715],
      ["quarts, liquid (US)",     "qt",     0.946352946],
      ["table spoons",            "",       0.01478676478125],
      ["tea spoons",              "",       0.00492892159375]
    ]}
];

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function convertInternal(fromUnitIndex, value, toUnitIndex, inputResult, type) {


  let unitFromFactor = quantities[type].units[fromUnitIndex][2];
  let unitToFactor   = quantities[type].units[toUnitIndex][2];


    if (isNumber(unitFromFactor)) {
      value = value * unitFromFactor;
    }
    else {
      value = eval(unitFromFactor);
    }

    if (isNumber(unitToFactor)) {
      value = value / unitToFactor;
    }
    else {
      value = eval(quantity.units[toUnitIndex][3]);
    }

   
  inputResult.value = value.toPrecision(4);


};  

  




function convert(type){
 
  let fromValue = parseFloat(input.value);
  if (isNaN(fromValue)) {
      result.value = '';
  } else 
      convertInternal(inputType.selectedIndex, fromValue, resultType.selectedIndex, result, type);
  }


function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {

      alertify.error('Please enter only number!');
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}



























