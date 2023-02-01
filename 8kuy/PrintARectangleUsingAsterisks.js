function getRectangleString(w, h) {
  const rn = "\r\n"
  const tb = "*".repeat(w) + rn
  const mid = (w > 1) ? ("*" + " ".repeat(w - 2) + "*" + rn).repeat(h - 2) : ""
  
  return (h > 1) ? tb + mid + tb : tb.repeat(h);
}