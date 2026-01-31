import { SigninUser } from '../components/AuthModal.js';
import { showNotification } from '../services/notifications.js';

document.addEventListener("DOMContentLoaded", async (e) => {

  const submitBtn = document.getElementById('submit');
  const form = document.getElementById('sign_inform');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      
      if (!email || !password) {
        showNotification("Please enter both email and password");
        return;
      }
      new SigninUser(email, password, submitBtn);

    });

  }

});