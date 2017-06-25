const express = require('express')
const app = express()

const sample_data = [
  {
    id: 0,
    title: "My name jeff",
    description: "My nameeeeee a jeff"
  },
  {
    id: 1,
    title: "I am batman",
    description: "I am batman. I am batman. I am batman."
  },
  {
    id: 2,
    title: "Howdy",
    description: "Foo bar baz."
  }
]


app.get('/story/:id', (req, res) => {
  const id = req.params.id
  if(sample_data[id]) {
    res.send(sample_data[id])
  }
  else {
    res.send(`No data id: ${id}`)
  }
})

app.listen(8080, ()=> console.log("Listening to port 8080"))