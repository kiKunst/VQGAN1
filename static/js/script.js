function returnText(){
  element = document.getElementById('textInput').value;
  if (element != null) {
    input = element;
    console.log(input);
    window.location.href = "/convert?text=" + input;
  } 
}
