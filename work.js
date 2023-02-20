//Function to show the retail experience
function retail() {
    document.getElementById("retailDrpDwn").classList.toggle("show");
  }
  

//Function to show the tech experience
function intern() {
  document.getElementById("internDrpDwn").classList.toggle("show");
}


//Function to show the tech experience
  function tech() {
    document.getElementById("techDrpDwn").classList.toggle("show");
  }


  window.onclick = function(event) {
    if (!event.target.matches('.expand')) {
      var dropdowns = document.getElementsByClassName("drpDwn-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDrpdwn = dropdowns[i];
        if (openDrpdwn.classList.contains('show')) {
          openDrpdwn.classList.remove('show');
        }
      }
    }
  }
  