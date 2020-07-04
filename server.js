//ทำการ import express เข้ามาใช้งาน โดยสร้างตัวแปร express ขึ้นมาเพื่อรับค่า
const express = require('express')
const app = express()
const db = require('./db_connection')
const indexController = require('./app/controller/Indexcontroller')
var bodyParser = require('body-parser')
app.use(bodyParser.json)
//ทำการสร้าง Instance ของ express และสร้างตัวแปร app ขึ้นมาเพื่อรับค่า

// db.connection()
//สร้างตัวแปร PORT ขึ้นมารับค่า port ในกรณีที่เราได้กำหนดไว้ใน environment ของเครื่อง
//แต่ถ้าไม่ได้กำหนดไว้ เราจะใช้ค่า 8080 แทน
const PORT = 8083
//สร้าง route ขึ้นมา 1 ตัว โดยกำหนดให้ path คือ / หรือ index ของ host นั่นเอง
//จากนั้นให้กำหนด response แสดงคำว่า Hello World

app.get('/', (req, res) => { 
    res.send('Hello World')
})

// app.post('/create', (req,res) => { 
//     indexController.insert(req , res) 
// })
//run web server ที่เราสร้างไว้ โดยใช้ PORT ที่เรากำหนดไว้ในตัวแปร PORT
app.listen(PORT, () => {
    //หากทำการ run server สำเร็จ ให้แสดงข้อความนี้ใน cmd หรือ terminal
    console.log(`Server is running on port : ${PORT}`)
})
//ทำการ export app ที่เราสร้างขึ้น เพื่อให้สามารถนำไปใช้งานใน project อื่นๆ 
//เปรียบเสมือนเป็น module ตัวนึง
