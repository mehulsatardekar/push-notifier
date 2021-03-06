
console.log('service worker loaded');

self.addEventListener('push', e=>{

    const options = {
        body: 'This is Mehul and this is working demo of push notification 👍',
        image:'../splash.png',
        action: 'coffee-action',
      };
    const data = e.data.json();
    console.log('Push received...');
    self.registration.showNotification(data.title,options);

})