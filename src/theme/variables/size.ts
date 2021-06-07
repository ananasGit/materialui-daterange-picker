export type Size = Readonly<{
  width: Readonly<{
    container: {
      lg: number;
      md: number;
      xl: number;
      xxl: number;
    };
  }>;
  padding: Readonly<{
    btn: string;
    btnMedium: string;
    btnSmall: string;
    textInput: string;
    menuLink: string;
    container: string;
    containerLg: string;
  }>;
  radius: Readonly<{
    xsoft: string;
    soft: string;
  }>;
}>;

const size: Size = {
  width: {
    container: {
      md: 1204,
      lg: 1648,
      xl: 1680,
      xxl: 1856,
    },
  },
  padding: {
    btn: "13px 24px",
    btnMedium: "7px 16px",
    btnSmall: "7px 10px",
    textInput: "9.5px 10px",
    menuLink: "9.5px 24px",
    container: "24px",
    containerLg: "32px",
  },
  radius: {
    xsoft: "4px",
    soft: "8px",
  },
};

export default size;
