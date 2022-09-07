import _ from "lodash";
let exampleOne = _.chunk(["a", "b", "c", "d", "e"], 4);
console.log(exampleOne);
let exampleTwo = _.compact([0, 1, false, 2, "", 3]);
console.log(exampleTwo);

//How its working
function isObject(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
}
function isSymbol(value) {
  const type = typeof value;
  return (
    type == "symbol" ||
    (type === "object" && value != null && getTag(value) == "[object Symbol]")
  );
}

function toNumber(value) {
  if (typeof value === "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    const other = typeof value.valueOf === "function" ? value.valueOf() : value;
    value = isObject(other) ? `${other}` : other;
  }
  if (typeof value !== "string") {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, "");
  const isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value)
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : reIsBadHex.test(value)
    ? NAN
    : +value;
}

const INFINITY = 1 / 0;
const MAX_INTEGER = 1.7976931348623157e308;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    const sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

function toInteger(value) {
  const result = toFinite(value);
  const remainder = result % 1;

  return remainder ? result - remainder : result;
}

function chunk(array, size = 1) {
  size = Math.max(toInteger(size), 0);
  const length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  let index = 0;
  let resIndex = 0;
  const result = new Array(Math.ceil(length / size));

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size));
  }
  return result;
}

console.log(chunk(["1", "b", "c", "d", "e"], 4));
