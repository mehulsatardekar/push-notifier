const express = require('express');
const webpush = require('web-push');
const bodyparser = require('body-parser');
const path = require('path'); 
const { send } = require('process');
const app = express();
const PORT =  process.env.PORT ||7000 

app.use(express.static(path.join(__dirname,"client")));
app.use(bodyparser.json());
const publicVapidKey =
  "BN2PZyxpr2kF8xn0WBQ3N2CBMfiJcZF3X-6ZVMwyAR3fTffgXoy90fGXy27CIqDBLsIyklYAs7sL1g4Y6u0tHhY";

const privateVapidKey = "th947aez3EfOlNYZdjulZs46HvEkUsIk0YagioUTSxw";

webpush.setVapidDetails(
    "mailto:test@test.com",
    publicVapidKey,
    privateVapidKey
  );
  
  // Subscribe Route
  app.post(" https://mehulsatardekar.github.io/subscribe", (req, res) => {
    // Get pushSubscription object
    const subscription = req.body;
  
    // Send 201 - resource created
    res.status(201).json({});
  
    // Create payload
    const payload = JSON.stringify({ title: "Mehul-ai" });
  
    // Pass object into sendNotification
    webpush
      .sendNotification(subscription, payload)
      .catch(err => console.error(err));
  });

app.listen(PORT,()=>{
    console.log(`app is listening on ${PORT}`);
});