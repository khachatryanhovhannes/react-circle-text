import { describe, it, expect } from "vitest";
import { renderCircularText } from "../src/renderers/circular-text-renderer/index";

describe("circularTextRenderer", () => {
  it("renders without throwing errors", () => {
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext("2d")!;

    expect(() => {
      renderCircularText(ctx, {
        text: "Hello",
        radius: 150,
        fontSize: 24,
        fontFamily: "Arial",
        fontWeight: "normal",
        color: "#000",
        angleDeg: 0,
        direction: "clockwise",
        flip: false,
        align: "center",
        rtl: false,
        letterSpacing: 0,
        width: 400,
        height: 400,
      });
    }).not.toThrow();
  });
});
