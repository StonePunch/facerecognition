const express = require('express')

const app = express()

/* Endpoint breakdown
/ --> res = not working
/signIn --> POST = Success/Fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT(Update) --> user
*/

// Root
app.get('/', (rep, resp) => {
  resp.send('This is working')
})

app.listen(3000, () => {
  console.log('App running at port 3000')
})
