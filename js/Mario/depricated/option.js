function Option() {

    Options = []; // Keys from Type
    Current = null; // Key Value From Options
    Defaults = 0; // Key Value For Default Option

}


// Default Type
var distance = function Distance() {
    Option.call(this);
    Option.constructor(Distance());

    this.Value = {
        0: 5,
        1: 10,
        2: 20
    };
    this.Defaults = 1;
};


function Distance() {

    var Value = new Option(, );
    var Metric = new Option({
        pixels: "px",
        percent: "%"
    }, "px");
    var Defaults = new

        this.distance = Distance;
    this.metric = Metric;

    // this.distance.prototype = Distance.prototype;

}


// Default Type
var Speed = Object.create(Type.prototype, {

    constructor: new Type({
        slow: "slow",
        fast: "fast"
    }, "slow"),

});





//Self-Invoking Function,
// Uses the Same Scope/This as Above
// Uses Call to Append Above Type Protocol
(function() {

        var Values = this.Values;
        var Value = this.Value;
        var Defaults = this.Defaults;

        // Extend Objects /w Functions


        Values.undefined = function(value) {

        };
        Object.create(obj, {});

        Values.exists = function(value) {
            return (Values.typeof(value) !== 'undefined') ? true : false);
    };

    Value.reset = function() {
        this.Value = this.Default;
        return this.Value;
    };


    //Private Function
    function update(newValue) {
        this.Value = newValue;
        return this.Value;
    }

    // Public Functions

    this.isValid = function(value) {



    };

    function setValue(key) {
        return ((this.isValid(newVObject.keys(Values)[value]) === true) ? update(value) : this.Value);
    };


    // Non-Redefinable Property
    Object.defineProperty(this, 'value', {
        get: function() {
            return this.Value;
        },
        set: function(value) {
            this.setValue();
        },
        configurable: true,
        enumerable: true,
        writeable: false
    });

    //this.value = this.Value;

}).call(Type.prototype);



var vector = (function Vector() {

    var options = new types();

    options();

});



(function() {
    this.update = function(name) {
        this.name = name;
    };
}).call(newObject.prototype);

newObject('hello');

/**
 * Factory Pattern
 *
 * Creates a new adjustable vector option.
 *
 *      @param type { Value, Unit, Speed }
 */
var option = function(Options) {

    // Overide Prototype Defaults
    var type;
    var defaultValue;

    this.currentValue = [];
    this.lastValue = defaultValue;

}

(function() {
    // Shared prototype properties

    // Defined Option Types
    var speed = new type([5, 10, 20], 1);




    console.log(DefaultTypes.speeds);

    // Create New Types




    types.addType("speeds", [0, 10, 20], 0);


    // Set the Constructor Functions Private Values


    this.type = Object.keys(types).;


    (function setInitialValue() {
        update(options[defaults[this.type]]);
    })();



    this.getDefault = function() {
        return this.default;
    };

    this.assign = function(option) {
        valid(option): update(validOptions[])
    }

    function assign(option) {

        if (valid(option)) {

            return update(validOptions[option]);
        } else {
            update(validOptions.defaults);
            return currentValue;
        }

    }

}).call(option.prototype);

/**
 *  Annoymous Function
 *  Parameters are Passed From Instance Variables Scope
 *  Code is hidden from the user.
 *
 *  Parameters
 *      @param option    : name of option
 *      @param defaults  : defaults options object
 *      @param options   : available options Object
 */
function(option, defaults, options) {



    /**
     * Returns the Newly Assigned Value
     *
     * Updates lastValue
     */





    function log(msg) {
        console.log(msg);
    }

    // Return Function, Called when Option() is Called
    // User Specified Parameters
    return function(value) {

        // Externally Visible Code
        if (typeof value !== 'undefined') {
            return {
                current: currentValue,
                new: value,
                result: assign(value)
            };
        }

        return {
            current: currentValue
        };
    };

    // Globally Passed Variables, Not Assignable
})(option, defaults, options);