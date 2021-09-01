 function change()
 {
    var x = document.getElementById("imei").value;
    var y = document.getElementById("imsi").value;
    var st = document.getElementById("sdatetime").value;
    var et = document.getElementById("edatetime").value;
  
    localStorage.setItem("imeival", x);
    localStorage.setItem("imsival", y);
    localStorage.setItem("sdatetime", st);
    localStorage.setItem("edatetime", et);
 }
