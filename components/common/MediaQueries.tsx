const sizes = {
  mobileS: `375px`,
  mobile: `525px`,
  tablet: `768px`,
  laptopS: `1024px`,
  laptop: `1440px`,
  desktop: `1800px`,
};

export const device = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptopS: `(max-width: ${sizes.laptopS})`,
  laptop: `(max-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export default device;
