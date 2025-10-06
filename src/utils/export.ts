export function exportCanvas(
  canvas: HTMLCanvasElement,
  type: "png" | "svg"
): string {
  if (type === "png") return canvas.toDataURL("image/png");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${
    canvas.height
  }">
      <image href="${canvas.toDataURL("image/png")}" width="${
    canvas.width
  }" height="${canvas.height}" />
    </svg>`;
  const blob = new Blob([svg], { type: "image/svg+xml" });
  return URL.createObjectURL(blob);
}
