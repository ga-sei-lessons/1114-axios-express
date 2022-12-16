// required packages
const express = require('express')
const axios = require('axios')

// express config
const app = express()
const PORT = 3001



// routes
app.get('/', (req, res) => {
    const baseUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&s=star+wars`
    console.log(baseUrl)
    axios.get(baseUrl)
        .then(response => {
            // you need to go into the response.data, that is where axios puts the API's response to us
            // console.log(response.data)
            res.json(response.data)
        })
        .catch(error => {
            // console log the specifics of the error, but keep them private
            console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥', error)
            // generic interal server error code, message to the client that something bad happened
            res.status(500).send('internal server error')
        })
})

// listening on a port
app.listen(PORT, () => console.log(`listening on PORT ${PORT} 👂`))