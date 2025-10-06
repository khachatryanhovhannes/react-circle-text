import "@testing-library/jest-dom";
import { createCanvas, Image } from "canvas";

Object.defineProperty(global, "HTMLCanvasElement", {
  value: class {
    width = 300;
    height = 150;
    getContext(type: string) {
      if (type === "2d")
        return createCanvas(this.width, this.height).getContext("2d");
      return null;
    }
    toDataURL() {
      return "data:image/png;base64,";
    }
  },
});

Object.defineProperty(global, "Image", {
  value: Image,
});
