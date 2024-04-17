const shortenText = (text) => {
  const upperCasedText = text.toUpperCase();
  const shortenedText = upperCasedText.split(" ").slice(0, 5).join(" ");

  return shortenedText;
};

export { shortenText };
