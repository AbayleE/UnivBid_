import { AddnewUser } from '../components/AuthModal.js';
import { showNotification } from '../services/notifications.js';


document.addEventListener("DOMContentLoaded", async (e) => {
 
  const submitBtn = document.getElementById('submit');
  const form = document.getElementById('sign_upform');
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const First_name = document.getElementById("Fname").value.trim();
      const Last_name = document.getElementById("Lname").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirm_password = document.getElementById("confirm-password").value;

      if (confirm_password !== password) {
        showNotification("Passwords do not match! Try Again", "error");
        return;
      }
      new AddnewUser(First_name, Last_name, email, password, submitBtn);

    });

  }


});



