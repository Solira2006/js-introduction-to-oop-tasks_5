export default class Time {
  // BEGIN
  static fromString(timeString) {
    const [hourPart, minutePart] = timeString.split(':');
    return new Time(parseInt(hourPart, 10), parseInt(minutePart, 10));
  }
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}