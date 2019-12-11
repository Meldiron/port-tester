const express = require("express");

const ports = [];

for (let i = 0; i < 1024; i++) {
  ports.push(i);
}

ports.forEach(p => {
  const app = express();

  app.get("/", (req, res) => {
    return res.json({
      success: 1
    });
  });

  try {
    app
      .listen(p, () => {
        console.log("LISTEN " + p);
      })
      .on("error", () => {
        console.log("NOT" + p);
      });
  } catch (exp) {
    console.log("NOT" + p);
  }
});
