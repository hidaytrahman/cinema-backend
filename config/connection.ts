import mongoose from "mongoose";
import "dotenv/config";

function DBConnect() {
  mongoose
    // @ts-ignore
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
}

export = DBConnect;
