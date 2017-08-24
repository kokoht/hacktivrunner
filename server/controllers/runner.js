const runnerModel = require('../models/runner')
const ObjectId = require('mongodb').ObjectId

var getAll = (req, res) => {
  runnerModel.find()
  .then(dataRunners => {
    res.send(dataRunners)
  })
  .catch(err => {
    res.send(err)
  })
}

var insertData = (req, res) => {
  runnerModel.create({
    runner_number: req.body.runner_number,
    name: req.body.name,
    jenis_kelamin: req.body.jenis_kelamin
  })
  .then(() => {
    res.send('data added')
  })
  .catch(err => {
    res.send(err)
  })
}

var deleteData = (req, res) => {
  runnerModel.remove({
    _id: ObjectId(req.params.id)
  })
  .then(() => {
    res.send('data removed')
  })
  .catch(err => {
    res.send(err)
  })
}

var editData = (req, res) => {
  runnerModel.update({
    _id: ObjectId(req.params.id)
  },
  {
    runner_number: req.body.runner_number,
    name: req.body.name,
    jenis_kelamin: req.body.jenis_kelamin
  })
  .then(() => {
    res.send('data updated')
  })
  .catch(err => {
    res.send(err)
  })
}


module.exports = {
  getAll,
  insertData,
  deleteData,
  editData
}
