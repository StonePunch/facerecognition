const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')

const app = express()
app.use(bodyParser.json())

const database = {
  users: [
    {
      id: '123',
      name: 'Steve',
      email: 'steve@gmail.com',
      password: 'crook',
      entries: 0,
      joined: new Date()
    },
    {
      id: '124',
      name: 'John',
      email: 'john@gmail.com',
      password: '1234',
      entries: 0,
      joined: new Date()
    }
  ],
  login: [
    {
      id: '987',
      hash: '',
      email: 'john@gmail.com'
    }
  ]
}

app.get('/', (req, resp) => {
  resp.json(database.users)
})

app.post('/signin', (req, resp) => {
  // bcrypt.compare('bacon', hash, function (error, res) {
  //   // res == true
  // })

  if
  (
    req.body.email === database.users[1].email &&
    req.body.password === database.users[1].password
  ) {
    resp.json('logged in')
  } else {
    resp.status(400).json('error')
  }
  resp.json('signin')
})

app.post('/register', (req, resp) => {
  const { email, name, password } = req.body

  bcrypt.hash(password, null, null, function (error, hash) {
    if (error == null) {
      console.log(hash)
      database.users.push({
        id: '125',
        name: name,
        email: email,
        password: hash,
        entries: 0,
        joined: new Date()
      })
      resp.json(database.users[database.users.length - 1])
    } else {
      resp.status(500).json(`Failed to hash password with the message: ${error.message}`)
    }
  })
})

app.get('/profile/:id', (req, resp) => {
  const { id } = req.params
  database.users.forEach(user => {
    if (user.id === id) {
      return resp.json(user)
    }
  })
  resp.status(404).json('no such user')
})

app.put('/image', (req, resp) => {
  const { id } = req.body
  database.users.forEach(user => {
    if (user.id === id) {
      user.entries++
      return resp.json(user.entries)
    }
  })
  resp.status(404).json('no such user')
})

app.listen(3000, () => {
  console.log('App running at port 3000')
})
