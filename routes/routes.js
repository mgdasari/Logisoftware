module.exports = (app) => {
  const book = require("../controller/controller");

  app.post("/add", book.add); //Find the existence of detail if not save to database
  app.post("/find", book.find); //Find all the data related to title
  app.post("/update", book.update); //Update the data
  app.post("/delete", book.delete); //delete the data.
};
