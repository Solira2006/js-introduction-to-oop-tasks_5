// BEGIN
export default function bind(context, func) {
  return function(...argumentsList) {
    return func.apply(context, argumentsList);
  };
}
// END