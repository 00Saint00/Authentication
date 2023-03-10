const mongoose = require("mongoose");

// const { MONGO_URI } = process.env;

const password = "soloist1960";

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(
      `mongodb+srv://paulotomewo3:${password}@cluster0.1fzedfp.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
      }
    )
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed");
      console.error(error);
      process.exit(1);
    });
};
