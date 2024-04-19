const shortenText = (text) => {
  return text.split(" ").slice(0, 5).join(" ");
};

export { shortenText };
