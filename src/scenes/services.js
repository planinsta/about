import theme from "../theme";

export const scrollToDiv = id => {
  const elem = document.getElementById(id);
  const rect = elem.getBoundingClientRect();
  window.scrollTo({
    top: rect.top + window.scrollY - theme.heights.navBar,
    behavior: "smooth"
  });
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
