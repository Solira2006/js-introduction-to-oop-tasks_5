export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
export function parseJson(jsonData) {
  try {
    return JSON.parse(jsonData);
  } catch (exception) {
    throw new ParseError("Invalid JSON string");
  }
}
// END