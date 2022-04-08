function loadData() {
  const list = document.getElementById("list");
  let count = 1;
  return function () {
    for (let i = 0; i < 25; i++) {
      let toShow = "Data" + " " + count++;
      const li = document.createElement("li");
      li.style.height = "5rem";
      li.innerText = toShow;
      list.append(li);
    }
  };
}

let x = loadData();
x();
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  // Indicates how far the document has been scrolled from the top
  let innerlHeight = window.innerHeight;
  //height of the visible part of the window
  let scrollHeight = document.documentElement.scrollHeight;
  //Indicates the height of the entire document
  //   console.log(scrollHeight);
  if (scrollTop + innerlHeight === scrollHeight) {
    x();
  }
});
