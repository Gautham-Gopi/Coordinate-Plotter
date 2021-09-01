function initMap(){
  document.getElementById("imeival").innerHTML=localStorage.getItem("imeival");
  document.getElementById("imsival").innerHTML=localStorage.getItem("imsival");
  document.getElementById("sdatetime").innerHTML=localStorage.getItem("sdatetime");
  document.getElementById("edatetime").innerHTML=localStorage.getItem("edatetime");

  var x =  document.getElementById("imeival").innerHTML;
  var y =  document.getElementById("imsival").innerHTML;
  var st =  document.getElementById("sdatetime").innerHTML;
  var et =  document.getElementById("edatetime").innerHTML;
  console.log(x);
  console.log(y);
  console.log(st);
  console.log(et);
  var url='insert url here';
  var slicedurl=url.slice(0,47) + x + url.slice(61,67) + y + url.slice(82,94) + st + url.slice(110,120) + et + url.slice(136,149);
  


fetch(url)
.then(data=>data.json())
.then(val=>{
   
    console.log(val.result);
   
    var arr =[];
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {lat: +val.result[1].latitude, lng: +val.result[1].longitude},
        
      });
      const image1 = "/start_marker.png";
      const image2 ="/mid_marker.png"
      for(i=0;i<val.result.length;i++){
        arr.push({lat: +val.result[i].latitude ,lng: +val.result[i].longitude});
        if(i==0){
          new google.maps.Marker({
            position: {lat: +val.result[i].latitude ,lng: +val.result[i].longitude},
            map, 
            icon: image1,
            title: "Hello World!",
          });
        }
        else if(i==val.result.length-1)
        {
          new google.maps.Marker({
            position: {lat: +val.result[i].latitude ,lng: +val.result[i].longitude},
            map, 
            
            title: "Hello World!",
          });
        }
        else{
          new google.maps.Marker({
            position: {lat: +val.result[i].latitude ,lng: +val.result[i].longitude},
            map, 
            icon: image2,
            title: "Hello World!",
          });
        }
        
          
      }
      
      const Path = new google.maps.Polyline({
        path: arr,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      Path.setMap(map);
        
    }
)
}













