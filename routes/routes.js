module.exports = (app) => {
  const book = require("../controller/controller");

  app.post("/add", book.add);
  app.post("/find", book.find);
  app.post("/update", book.update);
  app.post("/delete", book.delete);
};
