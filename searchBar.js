function searchBar() {
    // Declare variables
    var input, filter, block, h1, h2,  i, txtValueH1, txtValueH2;
    block = document.querySelectorAll('.item'); // ✔
    input = document.getElementById('myInput'); // ✔
    filter = input.value.toUpperCase(); // ✔
    
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < block.length; i++) {
      h1 = block[i].getElementsByTagName("h1")[0];
      h2 = block[i].getElementsByTagName("h2")[0];
      txtValueH1 = h1.textContent || h1.innerText ;
      txtValueH2 = h2.textContent || h2.innerText ;
      if (txtValueH1.toUpperCase().indexOf(filter) > -1 || txtValueH2.toUpperCase().indexOf(filter) > -1) {
        block[i].style.display = "";
      } else {
        block[i].style.display = "none";
      }
    }
  }