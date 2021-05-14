const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`server started on port: ${PORT}`));