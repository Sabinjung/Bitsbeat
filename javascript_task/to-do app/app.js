let displayClose = function (i, lList) {
  for (i = 0; i < lList.length; i++) {
    let span = document.createElement("span");
    let button = document.createElement("button")
    let txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    span.appendChild(button);
    lList[i].appendChild(span);
  }
}
let closeList = function (close) {
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement.parentElement;
      div.style.display = "none";
    }
  }
}
let lList = document.getElementsByTagName("li");
let i;
displayClose(i, lList);
let close = document.getElementsByClassName("close");
closeList(close);
let addData = function () {
  let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  localStorage.setItem('items', JSON.stringify(itemsArray));
  let lists = document.getElementById("lists");
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let text = document.createTextNode(inputValue);  //created a html text
  li.appendChild(text);  //appended that text in li
  lists.appendChild(li);  //appended that li in ul
  document.getElementById("myInput").value = "";
  itemsArray.push(inputValue);
  localStorage.setItem('items', JSON.stringify(itemsArray));  
  let span = document.createElement("span");
  let button = document.createElement("button")
  let txt = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(txt);
  span.appendChild(button);
  li.appendChild(span);
  closeList(close);
}
