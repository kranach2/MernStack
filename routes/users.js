const router = require("express").Router();
const User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error:" + err));

  //   console.log(req.protocol);
  //   console.log(req.hostname);
  //   console.log(req.path);
  //   console.log(req.originalUrl);
  //   console.log(req.subomains);
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted"))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const contact = Number(req.body.contact);

  const newUser = new User({
    firstname,
    lastname,
    email,
    contact
  });
  newUser
    .save()
    .then(() => res.json("User Added!"))
    .catch(err => res.json("error: " + err));
});

router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
  .then(users => {
    users.firstname = req.body.firstname;
    users.lastname = req.body.lastname;
    users.email = req.body.email;
    users.contact = Number(req.body.contact);

    users
      .save()
      .then(() => res.json("User updated!"))
      .catch(err => res.status(400).json("error: " + err));
  })
  .catch(err=>res.status(400).json("Error " + err));
});

module.exports = router;
