function addMenuDropdown(clickElement, menuItemContainer) {
  clickElement.addEventListener("click", () => {
    console.log("Menu clicked!");

    if (menuItemContainer.style.visibility === "hidden") {
      menuItemContainer.style.display = "flex";
      menuItemContainer.style.visibility = "visible";
    } else {
      menuItemContainer.style.display = "flex";
      menuItemContainer.style.visibility = "hidden";
    }
  });
}

export default addMenuDropdown;
