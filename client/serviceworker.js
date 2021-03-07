console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by Traversy Media!",
    image: "https://raw.githubusercontent.com/mehulsatardekar/push-notifier/main/splash.png"
  });
});