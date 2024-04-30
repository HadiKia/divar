const navbarStyle =
  "container mx-auto max-w-[1440px] flex items-center justify-between h-[64px] text-sm font-medium px-4";
const logoDivStyle = "flex-1 flex items-center gap-x-2 text-sm";
const logoStyle =
  "hidden md:block text-primary scale-[1.75] mr-4 text-primary scale-[1.75] ml-7 mr-3 mb-0.5";
const borderStyle = "block w-[1px] h-6 opacity-25 bg-secondary";
const locationContainerStyle =
  "flex items-center gap-x-2 justify-end w-full relative md:flex-row-reverse bg-[#f5f5f5] md:bg-white rounded pl-3 font-normal";
const locationStyle =
  "flex md:flex-row-reverse items-center gap-x-1 text-secondary relative";
const buttonsDivStyle = "hidden md:flex items-center gap-x-6 relative";
const loginButtonStyle =
  "flex items-center gap-x-1 text-secondary px-4 py-2 rounded duration-500";
const loginButtonActiveStyle = `${loginButtonStyle} text-dark bg-[#f5f5f5]`;
const dashboardButtonStyle = "text-white bg-primary px-[19px] py-2.5 rounded";
const listBoxOptionsStyle =
  " border rounded bg-white md:border md:rounded duration-200 ease-linear fixed top-[64px] bottom-[55px] left-0 right-0 md:absolute md:top-12 md:w-52 md:h-60  overflow-scroll md:shadow-lg z-10 ";
const listBoxButtonStyle =
  "md:py-3 md:pl-3 overflow-hidden whitespace-nowrap overflow-ellipsis max-w-20 md:max-w-full";

export {
  navbarStyle,
  logoDivStyle,
  logoStyle,
  borderStyle,
  locationContainerStyle,
  locationStyle,
  buttonsDivStyle,
  loginButtonStyle,
  loginButtonActiveStyle,
  dashboardButtonStyle,
  listBoxOptionsStyle,
  listBoxButtonStyle,
};
