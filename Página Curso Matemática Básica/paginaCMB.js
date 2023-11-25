function filterList() {
  var search = document.getElementById("inputSearch").value.toLowerCase();
  var items = document.getElementsByClassName("item")
  for (var i = 0; i < items.length; i++) {
    var itemText = items[i].textContent.toLowerCase();
    if (itemText.includes(items)) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
}