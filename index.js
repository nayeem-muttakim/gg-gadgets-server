const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8955;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bix9lir.mongodb.net/?retryWrites=true&w=majority`;

//create a mongodb client

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // connect client
    // await client.connect();

    // send success pin to confirm
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged Successfully");
  } finally {
    // client close
    // await client.close()
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hi Mentor");
});
app.listen(port, () => {
  console.log(`Port running on ${port}`);
});
