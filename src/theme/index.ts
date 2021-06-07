import { Breakpoint as breakpoint } from "./variables/breakpoint";
import { Color as color } from "./variables/color";
import font from "./variables/font";
import size from "./variables/size";
import { Space as space } from "./variables/spacing";

const theme = {
  breakpoint,
  breakpoints: [`${breakpoint.sm}px`, `${breakpoint.md}px`, `${breakpoint.lg}px`, `${breakpoint.xl}px`],
  color,
  font,
  space,
  size,
};

export { theme };
