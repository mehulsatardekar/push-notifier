console.log("Service Worker Loaded...");

// Note that while adding iamges and icons make sure they serve on http/https otherwise they wont work.
self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "This is Mehul and this is working demo of Push Notification services\n okkkkk",
    image: "https://raw.githubusercontent.com/mehulsatardekar/push-notifier/main/splash.png",
    icon:"https://raw.githubusercontent.com/mehulsatardekar/push-notifier/main/avatar.jpg",
    vibrate: [500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500]


  });
});