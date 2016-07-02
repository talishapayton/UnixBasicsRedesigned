function mouseOver( choose ) {
    choose.style.background = "#ffff00";
    choose.style.cursor = "pointer";
}

function mouseOut( choose ) {
    choose.style.background = "white";
    choose.style.cursor = "default";
	
}

function makeVisible( divID ) {
  document.getElementById( "chunk1" ).style.visibility = "hidden";
  document.getElementById( "chunk2" ).style.visibility = "hidden";
  document.getElementById( "chunk3" ).style.visibility = "hidden";
  document.getElementById( "chunk4" ).style.visibility = "hidden";
  document.getElementById( "chunk5" ).style.visibility = "hidden";
  document.getElementById( "chunk6" ).style.visibility = "hidden";
  document.getElementById( divID ).style.visibility = "visible";
}
