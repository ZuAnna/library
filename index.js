const express = require('express')
const path = require('path')
const app = express()

const CONTACTS = [
   {id:1, name: 'Мцыри', value: 'Лермонтов', marked: false }
]











app.use(express.static(path.resolve(__dirname,'client')))
app.get('*', (req, res)=> {
   res.sendFile(path.resolve(__dirname, 'client','addbooks.html'))
})

app.listen(3000, () => console.log('Server has been started on port 3000...'))
