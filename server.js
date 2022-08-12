import express from 'express';


const app = express()



app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/', (req,res)=>{
    res.send('Hola mundo')
    console.log("Prueba heroku")
})


const PORT = 8080

app.listen(PORT, () => {
    console.log(`Escuchando al puerto ${PORT}`)
})





