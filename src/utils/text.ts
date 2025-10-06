export function getRenderTextArray(text: string, rtl: boolean): string[] {
  return rtl ? text.split("") : text.split("").reverse();
}
