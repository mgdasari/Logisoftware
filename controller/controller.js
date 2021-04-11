const Book = require("../model/model");
var mongoose = require("mongoose");
const db = require("../config/config").get(process.env.NODE_ENV);

//connecting database
mongoose.connect(
  db.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) console.log(err);
    console.log("database is connected");
  }
);

exports.add = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: "request body can not be empty",
    });
  }

  //create object of a model
  const book = new Book({
    title: req.body.title || "Untitled book",
    author: req.body.author,
    website: req.body.website,
  });

  //Find the data and insert
  Book.find(
    {
      title: req.body.title,
      author: req.body.author,
      website: req.body.website,
    },
    (err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Note.",
        });
      } else if (data && data != '') {
        res.status(200).send({
          message: "book already exist",
        });
      } else {
        book
          .save()
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Note.",
            });
          });
      }
    }
  );
};

exports.find = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: "request body can not be empty",
    });
  }

  //finding data in mongo db
  Book.find({ title: req.body.title }, (err, data) => {
    if (err) {
      res.send(500).send({
        message: err.message || "Some error occurred while creating the Note.",
      });
    } else {
      res.send(data);
    }
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "request body can not be empty",
    });
  }

  //update the data in mongodb
  Book.update(
    {
      title: req.body.title,
    },
    {
      $set: {
        author: req.body.author,
        website: req.body.website,
      },
    },
    (err, data) => {
      if (err) {
        res.send(500).send({
          message:
            err.message || "Some error occurred while creating the Note.",
        });
      } else {
        res.send(data);
      }
    }
  );
};

exports.delete = function (req, res) {
  if (!req.body) {
    return res.status(400).send({
      message: "request body can not be empty",
    });
  }
  //delete the data in mongo db
  Book.deleteOne(
    {
      title: req.body.title,
      author: req.body.author,
      website: req.body.website,
    },
    (err, data) => {
      if (err) {
        res.send(500).send({
          message:
            err.message || "Some error occurred while creating the Note.",
        });
      } else {
        res.send(data);
      }
    }
  );
};
