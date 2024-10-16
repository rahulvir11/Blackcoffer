const express = require("express");
const cors = require("cors");
require("./db/connect");

const Data = require("./models/data");
const app = express();
const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: "GET, POST, PUT, DELETE ,PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.post("/api/data", async (req, res) => {
  try {
    const {
      end_year,
      intensity,
      sector,
      topic,
      insight,
      url,
      region,
      start_year,
      impact,
      added,
      published,
      country,
      relevance,
      pestle,
      source,
      title,
      likelihood,
    } = await req.body;
    const newdata = await Data.create({
      end_year,
      intensity,
      sector,
      topic,
      insight,
      url,
      region,
      start_year,
      impact,
      added,
      published,
      country,
      relevance,
      pestle,
      source,
      title,
      likelihood,
    });
  res.status(201).json({ message: "successfull", Success: true });

  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "faild", Success: false });
  }
 
});
// Route to get filtered data
app.get("/api/data", async (req, res) => {
  const { endYear, topics, sector, region, pest, source, swot, country, city } =
    req.query;
  const query = {};

  if (endYear) query.year = { $lte: endYear };
  if (topics) query.topics = { $regex: topics, $options: "i" };
  if (sector) query.sector = sector;
  if (region) query.region = region;
  if (pest) query.pest = pest;
  if (source) query.source = source;
  if (swot) query.swot = swot;
  if (country) query.country = country;
  if (city) query.city = city;

  try {
    const data = await Data.find(query);
    res.json(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
