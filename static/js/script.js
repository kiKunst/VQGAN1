function returnText(){
  element = document.getElementById('textInput').value;
  if (element != null) {
    if (element.returnText.trim().lenght >= 1)
    input = element;
    console.log(input);
    window.location.href = "/convert?text=" + input;
  } else {
    input = "postcard";
    console.log(input);
    window.location.href = "convert?text" + input;
  }
}
