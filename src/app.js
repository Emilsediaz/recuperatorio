const express = require('express');
//require('dotenv').config()
//const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const port = 3000

//app.use(morgan('dev'));

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));



const cancionesRouter = require("./routers/cancionesRouter");
const genresRouter = require("./routers/genresRouter");



// app.use('/api/v1/musicando/canciones', routerCanciones)
app.use(cancionesRouter);


// app.use('/api/v1/musicando/generos', generosRouter)

app.use(genresRouter);



app.listen(port, () => {
    console.log(`Server on port ${port}`);
})