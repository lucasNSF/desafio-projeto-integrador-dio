const html = document.querySelector("html");
const checkbox = document.querySelector('input[name="theme"]');

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
  bg: getStyle(html, "--bg"),
  contentBg: getStyle(html, "--contentBg"),
  descriptionColor: getStyle(html, "--descriptionColor"),
  titleBg: getStyle(html, "--titleBg"),
  hoverBtn1: getStyle(html, "--hoverBtn1"),
};

const darkMode = {
  bg: "#141414",
  contentBg: "#2c2c2c",
  descriptionColor: "white",
  titleBg: "white",
  hoverBtn1: "#060606",
};

const changeColors = (colors) => {
  Object.keys(colors).map((key) => {
    html.style.setProperty(transformKey(key), colors[key]);
  });
};

const transformKey = (key) => "--" + key;

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors);
});
