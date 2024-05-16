import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
  path: "env",
});

connectDB()
  .then(() => {
    app.listen(process.env.port || 8000, () => {
      console.log(`Server is running at port : ${process.env.port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!!", err);
  });

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
  } catch (error) {
    console.log("ERROR:", error);
    throw error;
  }
})();
*/
