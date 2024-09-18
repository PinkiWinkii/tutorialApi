
//index.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const mongodbRoute = 'mongodb+srv://PinkiWinki:1fe46a07b13A1c1_*@polymorphs.fuwvu.mongodb.net/E4P1?retryWrites=true&w=majority&appName=Polymorphs';


// *** ADD ***
const workoutRouter = require("./routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;



// Use bodyparser 

app.use(bodyParser.json());

// *** ADD ***
app.use("/workouts", workoutRouter);

async function start() {
    try
    {
        await mongoose.connect(mongodbRoute);
        app.listen(PORT, () => {
            console.log(`API is listening on port ${PORT}`);
        });
        console.log("Conexión con Mongo correcta");

    }
    catch(error)
    {
        console.log(`Error al conectar a la base de datos: ${error.message}`);
    }
}

start();