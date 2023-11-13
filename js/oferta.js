document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("subscription-form");
    const emailInput = document.getElementById("email");
    const confirmationMessage = document.getElementById("confirmation-message");
    const errorContainer = document.getElementById("error-message"); // Elemento para mensajes de error
  
    form.addEventListener("submit", function (e) {
      // Evita que el formulario se envíe por defecto
      e.preventDefault();
  
      // Obtén el valor del correo electrónico ingresado por el usuario
      const userEmail = emailInput.value;
  
      // Define una expresión regular para validar el formato del correo electrónico
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
      if (!emailRegex.test(userEmail)) {
        // El correo electrónico no coincide con el formato válido
        errorContainer.style.display = "block";
        errorContainer.textContent = "Por favor, ingrese una dirección de correo electrónico válida.";
      } else {
        // El correo electrónico es válido, puedes realizar acciones adicionales aquí
        confirmationMessage.style.display = "block";
        emailInput.value = "";
        errorContainer.style.display = "none"; // Oculta el mensaje de error si estaba visible
      }
    });
  });
  
  