function getUserInformation() {
    const userInformation = JSON.parse(localStorage.getItem("userInformation"));
    if (!userInformation) {
      localStorage.setItem(
        "userInformation",
        JSON.stringify({
          name: "Jhon",
          lastname: "Doe",
          adress: "No Doe Address",
        })
      );
    }
  
    const h1Element = document.querySelector(".user-name");
  
    h1Element.textContent = `Hola ${userInformation.name}`;
  }
  
  window.addEventListener("load", getUserInformation);