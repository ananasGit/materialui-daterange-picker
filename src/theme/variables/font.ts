export type Font = Readonly<{
  size: Readonly<{
    base: number;
    note: number;
    xs: number;
    xxs: number;
    small: number;
    medium: number;
    slarge: number;
    large: number;
    mlarge: number;
    xlarge: number;
    xxlrage: number;
    huge: number;
    xhuge: number;
  }>;
  family: Readonly<{
    sans: string;
  }>;
  weight: Readonly<{
    light: number;
    regular: number;
    semiBold: number;
    bold: number;
    extraBold: number;
  }>;
  lineHeight: Readonly<{
    light: number;
    medium: number;
    regular: number;
    large: number;
    xlarge: number;
    xxlarge: number;
  }>;
}>;

const font: Font = {
  size: {
    base: 14,
    note: 8,
    xxs: 10,
    xs: 12,
    small: 14,
    medium: 16,
    slarge: 18,
    large: 20,
    mlarge: 21,
    xlarge: 24,
    xxlrage: 30,
    huge: 32,
    xhuge: 36,
  },
  family: {
    sans: "Open Sans",
  },
  weight: {
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
  lineHeight: {
    light: 1.1,
    medium: 1.2,
    regular: 1.25,
    large: 1.33,
    xlarge: 1.4,
    xxlarge: 1.6,
  },
};

export default font;
