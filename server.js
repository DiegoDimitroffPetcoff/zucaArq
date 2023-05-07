const app = require("./src/app/app");
const config = require("./src/config/config");



const connectBD = require("./src/dbs/mongodb/connectMongo");
    // Configuration

async function activeServer() {
  try {
    await connectBD();
    app.listen(config.PORT || 8080);


    console.log("Server Active and listening");
  } catch (error) {
    console.log(error);
  }
}

activeServer();
