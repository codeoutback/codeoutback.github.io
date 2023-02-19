function myAssoc() {
    document.getElementById("assocDrpDwn").classList.toggle("show");
  }
  
  function myBach() {
    document.getElementById("bachDrpDwn").classList.toggle("show");
  }
  
  function certs() {
    document.getElementById("certDrpDwn").classList.toggle("show");
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
  