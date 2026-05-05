// BEGIN
export function Point(coordX, coordY) {
  this.x = coordX;
  this.y = coordY;
}

Point.prototype.getX = function() {
  return this.x;
};

Point.prototype.getY = function() {
  return this.y;
};

export function Segment(startPoint, finishPoint) {
  this.startPoint = startPoint;
  this.finishPoint = finishPoint;
}

Segment.prototype.getBeginPoint = function() {
  return this.startPoint;
};

Segment.prototype.getEndPoint = function() {
  return this.finishPoint;
};

export function reverse(lineSegment) {
  const firstPoint = lineSegment.getBeginPoint();
  const lastPoint = lineSegment.getEndPoint();
  
  return new Segment(
    new Point(lastPoint.getX(), lastPoint.getY()),
    new Point(firstPoint.getX(), firstPoint.getY())
  );
}
// END