// BEGIN
export default function each(list, handler) {
  for (let idx = 0; idx < list.length; idx++) {
    handler.call(list[idx]);
  }
}
// END