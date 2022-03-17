/* ToNumber(ToPrimitive([])) == ToNumber(false) */
[] == false; // true

// Internally this is evaluated as ToBoolean([]) === true ? 'truthy' : 'falsy'
[] ? "truthy" : "falsy"; // 'truthy'

// All objects are considered truthy and an array is an instance of object
