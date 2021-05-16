const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const { errorHandler } = require('./server/middlewares/error-handler.middleware');
const { routeNotFound } = require('./server/middlewares/route-not-found.middleware');
const { addVideosToDB } = require('./server/models/video.model');
const { addCreatorsToDB } = require('./server/models/creator.model');
const { addCategoriesToDB } = require('./server/models/category.model');
const video = require('./server/routes/videos.route');
const categories = require('./server/routes/categories.route');
const creators = require('./server/routes/creators.route');

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { initializeDatabase } = require("./server/db/db.connect");
initializeDatabase();
// addCategoriesToDB();
//addVideosToDB();
//addCreatorsToDB();

app.use('/watch', video);
app.use('/categories', categories);
app.use('/creators', creators);



app.listen(PORT, console.log(`server started on port: ${PORT}`));