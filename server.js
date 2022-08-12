import express from 'express';


const app = express()



app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/', (req,res)=>{
    console.log("Prueba heroku")
})


const PORT = 8080

app.listen(PORT, () => {
    console.log(`Escuchando al puerto ${PORT}`)
})





