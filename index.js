setTimeout(() => {
  var paragraph = document.getElementById("paragraph");
  paragraph.textContent = "Hello, World";

  var element = document.createElement("h1");
  element.textContent = "Element added from JS";
  document.body.prepend(element);

  var secondElement = document.createElement("h2");
  secondElement.textContent = "Added at the end";
  document.body.appendChild(secondElement);
}, 0);
