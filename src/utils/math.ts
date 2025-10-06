export function calculateTextAngularLength(
  ctx: CanvasRenderingContext2D,
  text: string,
  radius: number,
  letterSpacing: number,
  rtl: boolean
): number {
  const renderText = rtl ? text.split("") : text.split("").reverse();
  const totalWidth = renderText.reduce(
    (acc, ch) => acc + ctx.measureText(ch).width + letterSpacing,
    0
  );
  return totalWidth / radius;
}

export function calculateTextStartAngle(
  angleDeg: number,
  totalAngularLength: number,
  align: "start" | "center" | "end",
  direction: "clockwise" | "counter-clockwise"
): number {
  const baseAngle = (angleDeg * Math.PI) / 180;
  const clockwise = direction === "clockwise" ? 1 : -1;
  if (align === "start") return baseAngle;
  if (align === "center")
    return baseAngle - (clockwise * totalAngularLength) / 2;
  return baseAngle - clockwise * totalAngularLength;
}
