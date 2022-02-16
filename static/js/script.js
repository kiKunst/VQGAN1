function returnText(){
  element = document.getElementById('textInput').value;
  if (element != null) {
    if (element.trim() === '') {
      input = 'postcard';
      console.log(input);
      window.location.href = "/convert?text=" + input;
    } else {
    input = element;
    console.log(input);
    window.location.href = "/convert?text=" + input;
    } 
  }
}
