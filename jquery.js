window.jQuery = function (selectorOrArray) {
  let elements;
  if (typeof selectorOrArray === "string") {
    elements = document.querySelectorAll(selectorOrArray);
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray;
  }
  //api可以操作elements
  return {
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        elements[i].classList.add(className);
      }
      return this;
    },
    find(selectorOrArray) {
      let array = [];
      for (let i = 0; i < elements.length; i++) {
        const elements2 = Array.from(
          elements[i].querySelectorAll(selectorOrArray)
        );
        array = array.concat(elements2);
      }
      const newApi = jQuery(array);
      return newApi;
    },
  };
};
