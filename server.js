const express = require('express');
const path = require('path');

//.resolve(__dirname, '../app.js'));
const app = express();
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});