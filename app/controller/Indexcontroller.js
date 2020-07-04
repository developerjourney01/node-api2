var model = require('./model')

exports.insert = async function(req , res) {
    const data = await model.insert(req.body.number)
    res.status(201).json({
        "result": "success",
        "data": data
    })
}

exports.getAll = async function(req , res) {
    const data = await model.getAll()
    res.status(201).json({
        "result": "success",
        "data": data
    })
}
