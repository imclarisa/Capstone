const { Router } = require("express");
const Fact = require("../models/Fact");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newFact = new Fact(request.body);
  newFact.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Fact.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
// This will generate a single, random fact to display on the page
router.get("/", (request, response) => {
  if (request.query.random) {
    Fact.aggregate([
      {
        $sample: { size: 1 }
      }
    ])
      .then(record => {
        response.json(record[0]);
      })
      .catch(error => {
        response.status(500).json(error);
      });
  } else {
    Fact.find({}, (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
    });
  }
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Fact.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        fact: body.facts
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
    }
  );
});

module.exports = router;
