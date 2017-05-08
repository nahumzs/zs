// one formula to rule the all
const gn = 1.61803398;
const ratio = (n = -20) => Math.abs((10 * ((n / 10) +1 )) * gn);
const tokens = {
  fontSize: {},
  padding: {},
  margin: {},
  colors: {},
  headers: {},
};

// Font size
tokens.fontSize.xxs = ratio(-4);
tokens.fontSize.xs = ratio(-3);
tokens.fontSize.s = ratio(-2);
tokens.fontSize.r = ratio();
tokens.fontSize.m = ratio(2);
tokens.fontSize.l = ratio(4);
tokens.fontSize.xl = ratio(6);
tokens.fontSize.xxl = ratio(8);
tokens.fontSize.xxxl = ratio(10);

// Font Size headers
tokens.fontSize.h1 = ratio(24);
tokens.fontSize.h2 = ratio(20);
tokens.fontSize.h3 = ratio(18);
tokens.fontSize.h4 = ratio(16);
tokens.fontSize.h5 = ratio(14);


// padding
tokens.padding.s = ratio(-8);
tokens.padding.r = ratio(-7);
tokens.padding.m = ratio(-6);
tokens.padding.l = ratio(-5);

// margin
tokens.margin.s = ratio(-8);
tokens.margin.r = ratio(-7);
tokens.margin.m = ratio(-6);
tokens.margin.l = ratio(-5);

// colors
tokens.colors = {
  black: "464646",
  white: "F2F2F2",
  grayDark: "898989",
  graySoft: "C2C2C2",
  blue: "0DAAEA",
  green: "33BE74",
  yellow: "FFCD12",
  red: "FF5100",
}

// headers
tokens.headers = {
  h1: {
    fontFamily: 'Lustria',
    fontSize: tokens.fontSize.h1,
    lineHeight: tokens.fontSize.h1 * 2.4,
    textAlign: "left",
  },
  h2: {
    fontFamily: 'Lustria',
    fontSize: tokens.fontSize.h2,
    lineHeight: tokens.fontSize.h2 * 2,
    textAlign: "left",
  },
  h3: {
    fontFamily: 'Lustria',
    fontSize: tokens.fontSize.h3,
    lineHeight: tokens.fontSize.h3 * 1.8,
    textAlign: "left",
  },
  h4: {
    fontFamily: 'Lustria',
    fontSize: tokens.fontSize.h4,
    lineHeight: tokens.fontSize.h4 * 1.6,
    textAlign: "left",
  },
  h5: {
    fontFamily: 'Lustria',
    fontSize: tokens.fontSize.h5,
    lineHeight: tokens.fontSize.h5 * 1.4,
    textAlign: "left",
  },
}

export default tokens;
