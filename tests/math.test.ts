import { describe, it, expect } from "vitest";
import {
  calculateTextAngularLength,
  calculateTextStartAngle,
} from "../src/utils/math";

describe("math utilities", () => {
  it("calculates text angular length correctly", () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    ctx.font = "normal 20px Arial";

    const length = calculateTextAngularLength(ctx, "ABC", 100, 0, false);
    expect(length).toBeGreaterThan(0);
  });

  it("calculates start angle for center alignment", () => {
    const angle = calculateTextStartAngle(0, Math.PI, "center", "clockwise");
    expect(angle).toBeCloseTo(-Math.PI / 2, 1);
  });
});
