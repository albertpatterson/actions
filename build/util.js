export function createFcnWithName(fcn, name) {
  return new Function('body', `return function ${name}(){return body();}`)(fcn);
}
