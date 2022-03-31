// const { createConnection } = require("mongoose");
const mongoose = require("mongoose");
const env = require("dotenv");
env.config();

let conn;

const connection = mongoose.connect(
  process.env.MONGO_DB ||
    "mongodb+srv://admin:FqKLbBXJJ83Ltmvt@cluster0.lumsm.mongodb.net/ordersTesting",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

mongoose.connection.on("connected", () => {
  console.log("[Mongoose] - connected in:", process.env.MONGO_DB);
});

mongoose.connection.on("error", (err) => {
  console.log("[Mongoose] - error:", err);
});

module.exports = connection;

// const conectionDb = async (req, res) => {
//   // eslint-disable-next-line no-useless-catch
//   try {
//     if (conn == null) {
//       conn = await createConnection(
//         process.env.MONGO_DB ||
//           "mongodb+srv://admin:FqKLbBXJJ83Ltmvt@cluster0.lumsm.mongodb.net/ordersTesting",
//         {
//           bufferCommands: false,
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//           //   useCreateIndex: true,
//         },
//         (err, res) => {
//           if (err) {
//             console.log("Ocurrió un error ", err);
//           }
//           console.log("Base de datos conectada éxitosamente");
//         },
//       );
//     }
//     return conn;
//   } catch (error) {
//     throw error;
//   }
// };
// module.exports = { conectionDb };
