const pageLoad = () => {
  
  const form = document.getElementById("uploadForm");
<<<<<<< HEAD
  const fileInputElement = document.getElementById("userfile"); 
  const userInputElement = document.getElementById("username"); 

  function handleSubmit(e) { //username, userfile
=======
  const fileInputElement = document.getElementById("userfile");
  const userInputElement = document.getElementById("username");
  
  function handleSubmit(e) {
>>>>>>> d2b507c0f5b5b5fd796f79a73415559342e9e5ee
    e.preventDefault(); // ne küldje el a servernek
    console.log("the file upload process is blocked");
    let formData = new FormData();
    formData.append("userfile", fileInputElement.files[0]);
<<<<<<< HEAD
    formData.append("username", userInputElement.value);
    for (let value of formData.values()) {
      console.log(value);
    }
    fetch('/upload', {
    method: 'POST',
    body: formData })
=======
    formData.append("userfile", fileInputElement.files[1]);
    formData.append("username", userInputElement.value);
    // formData.append("username", "Bela");
    // console.log(formData.entries());
    for (let value of formData.values()) {
      console.log(value);
    }
    // use http instead of https
    fetch('/upload', { // 'http://localhost:8000/upload' vagy elég a '/upload'
    method: 'POST',
    body: formData,
    })

>>>>>>> d2b507c0f5b5b5fd796f79a73415559342e9e5ee
  }


  form.addEventListener("submit", handleSubmit);
  
  // HTML file input, chosen by user
<<<<<<< HEAD
=======
  // formData.append("userfile", fileInputElement.files[0]);
>>>>>>> d2b507c0f5b5b5fd796f79a73415559342e9e5ee

}
window.addEventListener("load", pageLoad);