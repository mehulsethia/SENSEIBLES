export const splitTextElements = (element, type = "chars") => {
  if (!element) {
    return;
  }

  if (!type.includes("chars")) {
    return;
  }

  const textContent = element.textContent ?? "";
  const characters = Array.from(textContent);

  element.innerHTML = "";

  characters.forEach((character) => {
    const wrapper = document.createElement("span");
    wrapper.classList.add("char");

    const innerSpan = document.createElement("span");
    innerSpan.textContent = character === " " ? "\u00A0" : character;

    wrapper.appendChild(innerSpan);
    element.appendChild(wrapper);
  });
};
