const express = require("express");
const admin = require("firebase-admin");
const serviceAccount = require("../firebase-admin.json");

const router = express.Router();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

router.get("/", (req, res) => {
  const devicetoken =
    "eNErpj17TwWYdJ6a6J8n2C:APA91bFnCBnzoF970hyroq0HUIHv46WRH5ctCt_LidE04HcAUOI8n_vNHSAbe1Vi2P4SUeqY5xjF-hgRNjDeS2V9bEQktK3-Ezf0sUe1ebKAFDL8WHHYFhVhZPBvZq7qJnm1bhtftNfj";
  const message = {
    notification: {
      title: "hello",
      body: "world",
    },
    token: devicetoken,
  };
  admin
    .messaging()
    .send(message)
    .then(function (response) {
      console.log("Successfully send message", response);
      return res.status(200).json({ success: true });
    })
    .catch(function (err) {
      console.log("error sending mesage!!", error);
      return res.status(200).json({ success: false });
    });
});

module.exports = router;
