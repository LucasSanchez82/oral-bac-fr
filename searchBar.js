function searchBar() {
    // Declare variables
    var input, filter, ul, block, h1, i, txtValue;
    block = document.querySelectorAll('.item'); // ✔
    input = document.getElementById('myInput'); // ✔
    filter = input.value.toUpperCase(); // ✔
    ul = document.getElementById("myUL");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < block.length; i++) {
      h1 = block[i].getElementsByTagName("h1")[0];
      txtValue = h1.textContent || h1.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        block[i].style.display = "";
      } else {
        block[i].style.display = "none";
      }
    }
  }