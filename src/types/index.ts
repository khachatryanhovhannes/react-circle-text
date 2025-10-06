export interface CircularTextProps {
  text: string;
  radius?: number;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: string;
  color?: string;
  angleDeg?: number;
  width?: number;
  height?: number;
  direction?: "clockwise" | "counter-clockwise";
  flip?: boolean;
  align?: "start" | "center" | "end";
  rtl?: boolean;
  letterSpacing?: number;
  exportAs?: "png" | "svg";
  onExport?: (dataUrl: string) => void;
}
