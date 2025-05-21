export function showNotification(message, type = 'info', duration = 5000) {
    const notification = document.getElementById('global-notification');
    const messageEl = document.getElementById('notification-message');
    const closeBtn = notification.querySelector('.notification-close');
    
    messageEl.textContent = message;
    notification.className = `notification ${type}`;
 
    notification.classList.remove('hidden');
 
    const timer = setTimeout(() => {
        notification.classList.add('hidden');
    }, duration);
    
  
    closeBtn.onclick = () => {
        clearTimeout(timer);
        notification.classList.add('hidden');
    };
}

