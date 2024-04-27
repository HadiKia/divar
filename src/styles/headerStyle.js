const navbarStyle =
  "container mx-auto max-w-[1440px] flex items-center justify-between h-[64px] text-sm font-medium px-4";
const logoDivStyle = "flex-1 flex items-center gap-x-2";
const logoStyle =
  "hidden md:block text-primary scale-[1.75] mr-4 text-primary scale-[1.75] ml-7 mr-3 mb-0.5";
const borderStyle = "hidden md:block w-[1px] h-6 opacity-25 bg-secondary";
const locationStyle = "hidden md:flex items-center gap-x-1.5 text-secondary ";
const buttonsDivStyle = "hidden md:flex items-center gap-x-6 relative";
const loginButtonStyle =
  "flex items-center gap-x-1 text-secondary px-4 py-2 rounded duration-500";
const loginButtonActiveStyle = `${loginButtonStyle} text-dark bg-[#f5f5f5]`;
const dashboardButtonStyle = "text-white bg-primary px-[19px] py-2.5 rounded";

export {
  navbarStyle,
  logoDivStyle,
  logoStyle,
  borderStyle,
  locationStyle,
  buttonsDivStyle,
  loginButtonStyle,
  loginButtonActiveStyle,
  dashboardButtonStyle,
};
