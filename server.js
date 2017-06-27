const express = require('express')
const app = express()

const sample_data = [
  {
    id: 0,
    name: "Bruce Wayne",
    quote: "I am NOT batman."
  },
  {
    id: 1,
    name: "The Flash",
    quote: "Fuck your timeline bullshit."
  },
  {
    id: 2,
    name: "Zoom",
    quote: "Beep beep, coming for your girl."
  }
]

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/story/:id', (req, res) => {
  const id = req.params.id

  if(id == "all") {
    res.send(sample_data)
  }
  else if(sample_data[id]) {
    res.send(sample_data[id])
  }
  else {
    res.send(`No data id: ${id}`)
  }
})

app.listen(8080, ()=> console.log("Listening to port 8080"))
