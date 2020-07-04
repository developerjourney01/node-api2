var model = require('./model')

exports.insert = async function(req , res) {
    const data = await model.insert(number)
    // res.status(201).json({
    //     "result": "success",
    //     "data": data
    // })
}
