// Write your "actions" router here!
const express = require('express')
const Actions = require('./actions-model')
const router = express.Router()


router.get('/', (req, res) => {
    Actions.get()
        .then(action => {
            res.status(200).json(action)
        })
        .catch(() => {
            res.status(404).json({message: 'not found'})
        })
})

module.exports = router