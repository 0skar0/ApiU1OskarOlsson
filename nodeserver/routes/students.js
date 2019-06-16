get = (req, res, next) => {
  let query;
  if (req.query.name) {
    query = req.models.Student.findOne({name: req.query.name})
  }
  else {
    query = req.models.Student.find()
  }
  query.exec().then((user) => {
    return res.send(user);
  }).catch((error) => {
    next(error)
  })
};

getById = (req, res, next) => {
  req.models.Student.findById(req.params.id).then((user) => {
    return res.send(user);
  })
}

post = (req, res, next) => {
  req.models.Student.create({
    username: req.body.username,
    password: req.body.password,
    likedPlayers: [{
      playerId: req.body.likedPlayers.playerId,
      name: req.body.likedPlayers.name
    }]
  }).then((user) => {
    return res.status(201).send(user)
  }).catch((error) => {
    next(error)
  })
}

put = (req, res, next) => {
  req.models.Student.updateOne({_id: req.params.id},
    {
    name: req.body.name,
    email: req.body.email,
      address: {
        gata: req.body.address.gata,
        ort: req.body.address.ort,
        postnummer: req.body.address.postnummer
      }
    }, {
        new: true,
        upsert: true,
        runvalidators: true
      }).then((status) => {
        console.log('status: ', res.nModified);
        if (status.upserted) {
          //Om en ny student är skapad
          res.status(201)
        } else if (status.nModified) {
          //om student är uppdaterad
          res.status(200)
        } else {
          //ingen ändring
          res.status(204)
        }
        res.send()
      }).catch((error) => {
        next(error)
      })
}

deleteOneUser = (req, res, next) => {
  req.models.Student.findByIdAndDelete(req.params.id).then((deleted) => {
    if (deleted) {
      return res.send(deleted).status(200)
    }
    res.sendStatus(204)
  }).catch((error) => {
    next(error)
  })
}

module.exports = {
  get,
  post,
  put,
  getById,
  deleteOneUser
}
