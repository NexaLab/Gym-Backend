const express = require("express");
const app = express();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const cors = require("cors");
const bodyParser = require('body-parser');
const error = require("./middlewares/ErrorHandler");










const io = new Server(server, {
    cors: {
        origin: "*"
    }
})








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
const privateRouter = require("./routes/PrivateRoomRoute");
const messagesRouter = require("./routes/MessagesRoute")
const messageController = require("./controllers/MessageController");
const videosQrRouter = require("./routes/VideosQrRoute")
const clientMembershipRouter = require ("./routes/MembershipRoute")





app.use("", testRouter)
app.use("", clientInfoRouter)
app.use("", schedularRouter)
app.use("", coachRouter)
app.use("", privateRouter);
app.use("", messagesRouter)
app.use("", videosQrRouter)
app.use("", clientMembershipRouter)








app.get("/api/hello", (req, res) => {



    res.send("App Running");



})







io.on("connection", (socket) => {


    // console.log(`User connected: ${socket.id} `);



    socket.on("join-room", (data) => {
        socket.join(data);
    })



    socket.on("send-message", (data) => {
        socket.to(data.room).emit("receive-message", data);
        messageController.saveMessages(data);
    })


});












const port = process.env.PORT || 3001;





server.listen(port, () => {

    console.log("App listening on port 3001");

});





app.use(error);
