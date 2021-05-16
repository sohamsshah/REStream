const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const { errorHandler } = require('./server/middlewares/error-handler.middleware');
const { routeNotFound } = require('./server/middlewares/route-not-found.middleware');
const { addVideosToDB } = require('./server/models/video.model');
const { addCreatorsToDB } = require('./server/models/creator.model');
const { addCategoriesToDB } = require('./server/models/category.model');


// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { initializeDatabase } = require("./server/db/db.connect");
initializeDatabase();
// addCategoriesToDB();
//addVideosToDB();
//addCreatorsToDB();


app.listen(PORT, console.log(`server started on port: ${PORT}`));