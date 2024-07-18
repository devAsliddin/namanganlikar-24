document.getElementById('notification-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
  
    // Check if the browser supports notifications
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
      return;
    }
  
    // Check the current Notification permission
    if (Notification.permission === 'granted') {
      // If it's already granted, create a notification
      new Notification('Notifications are already enabled!');
    } else if (Notification.permission !== 'denied') {
      // If permission is not denied, request permission
      Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {
          new Notification('Notifications have been enabled!');
        }
      });
    }
  });
  