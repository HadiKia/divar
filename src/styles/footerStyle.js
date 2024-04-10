const footerStyle =
  "container mx-auto max-w-[1440px] flex items-center justify-between px-4";
const LinksDivStyle = "hidden md:flex items-center gap-x-2 text-xs text-secondary";
const logoStyle =
  "scale-125 ml-7 mr-3 opacity-60 hover:opacity-100 duration-500";
const LinkStyle = "opacity-70 hover:opacity-100 duration-500";
const borderStyle = "w-[1px] h-5 opacity-25 bg-secondary";
const pStyle = "text-xs text-secondary opacity-70 hidden md:block"
const aStyle = "text-dark px-1 font-medium";
const radioGroupStyle = "flex items-center justify-between text-xs border-t fixed bottom-0 left-0 right-0 h-[56px] px-5 pb-1 bg-white"
const InActiveStyle =
  "flex flex-col items-center gap-y-1 py-1.5 text-secondary duration-300";
const activeStyle = `${InActiveStyle} !text-primary`;

export {
  footerStyle,
  LinksDivStyle,
  logoStyle,
  LinkStyle,
  borderStyle,
  pStyle,
  aStyle,
  radioGroupStyle,
  InActiveStyle,
  activeStyle
};
