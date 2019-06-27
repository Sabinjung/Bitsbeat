var key;
document.getElementById('todo').addEventListener('keypress', function (e) {
  if (e.keyCode == 13) {
    key = "data" + localStorage.length;
    localStorage.setItem(key, document.getElementById("todo").value);
    window.location.reload();
  }
})
let lists = document.getElementById("lists");
for (let x in localStorage) {
  console.log(x);
  var regex = /data\d/;
  if (regex.test(x)) {
    let key = x;
    let data = localStorage.getItem(key);
    let liitem = document.createElement('li');
    liitem.classList.add('task');
    liitem.innerHTML = `${data}<button onclick='edititem("${key}")'>EDIT</button><button  class="align-left" onclick='deleteitem("${key}")'>DELETE</button>`;
    lists.appendChild(liitem);

  }
}

function deleteitem(key) {
  localStorage.removeItem(key);
  window.location.reload();

}

function edititem(key) {
  let input = prompt("Enter the new value?");

  localStorage.setItem(key, input);
  window.location.reload();
}