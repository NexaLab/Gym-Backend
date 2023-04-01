const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const error = require("./middlewares/ErrorHandler");

require('dotenv').config()








// ***************************          Parser       ***********************************




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));










//    **********      Database Connected         **********




require("./db-connection/DbConnection");










// allow requests from this domain



app.use(cors({
    origin: '*'
}));









//  **************           All Routes         ***************




const testRouter = require("./routes/TestRoute");
const clientInfoRouter = require("./routes/ClientInfoRoute")
const schedularRouter = require("./routes/SchedularRoute");
const coachRouter = require("./routes/CoachRoute")





app.use("", testRouter)
app.use("", clientInfoRouter)
app.use("", schedularRouter)
app.use("", coachRouter)








app.get("/api/hello", (req, res) => {



    res.send("App Running");



})








const port = process.env.PORT || 3001;





app.listen(port, () => {

    console.log("App listening on port 3001");

});





app.use(error);
