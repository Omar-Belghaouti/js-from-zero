function elementAt(event) {
  // Gets the element from Even coordinates
  return document.elementFromPoint(event.clientX, event.clientY);
}
// TODO: write more cool stuff!

/*
    Gets the element from Event coordinates.
    Use like:
    var clickedEl = someEl.addEventListener("click", elementAt2, false);
*/
function elementAt2(event) {
  return document.elementFromPoint(event.clientX, event.clientY);
}

/* TODO: write more useful comments */
