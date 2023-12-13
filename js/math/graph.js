class Graph {
  constructor(points = [], segments = []) {
    this.points = points
    this.segments = segments
  }

  addPoint(point) {
    this.points.push(point)
  }

  addSegment(segment) {
    this.segments.push(segment)
  }

  containsPoint(point) {
    return this.points.find((p) => p.equals(point))
  }

  constainsSegment(segment) {
    return this.segments.find((s) => s.equals(segment))
  }

  tryAddPoint(point) {
    if (!this.containsPoint(point)) {
      this.addPoint(point)
      return true
    }
    return false
  }

  tryAddSegment(segment) {
    if (!this.constainsSegment(segment) && !segment.p1.equals(segment.p2)) {
      this.addSegment(segment)
      return true
    }

    return false
  }

  removeSegment(segment) {
    graph.segments.splice(this.segments.indexOf(segment), 1)
  }

  removePoint(point) {
    const segs = this.getSegmentsWithPoint(point)
    for (const seg of segs) {
      this.removeSegment(seg)
    }
    graph.points.splice(this.points.indexOf(point), 1)
  }

  getSegmentsWithPoint(point) {
    const segs = []
    for (const seg of this.segments) {
      if (seg.includes(point)) {
        segs.push(seg)
      }
    }
    return segs
  }

  dispose() {
    this.points.length = 0
    this.segments.length = 0
  }

  draw(ctx) {
    for (const seg of this.segments) {
      seg.draw(ctx)
    }

    for (const point of this.points) {
      point.draw(ctx)
    }
  }
}
