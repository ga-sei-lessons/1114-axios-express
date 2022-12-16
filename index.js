// required packages
const express = require('express')
const axios = require('axios')
// gives us access to our .env variables
require('dotenv').config() 

// express config
const app = express()
const PORT = 3001
const API_KEY = process.env.API_KEY


// routes
app.get('/', async (req, res) => { // async the route to use the await keyword in it
    // using axios with fetch
    // const baseUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&s=star+wars`
    // console.log(baseUrl)
    // axios.get(baseUrl)
    //     .then(response => {
    //         // you need to go into the response.data, that is where axios puts the API's response to us
    //         // console.log(response.data)
    //         res.json(response.data)
    //     })
    //     .catch(error => {
    //         // console log the specifics of the error, but keep them private
    //         console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥', error)
    //         // generic interal server error code, message to the client that something bad happened
    //         res.status(500).send('internal server error')
    //     })
    try {
        const baseUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&s=star+wars`
        console.log(baseUrl)
        const response = await axios.get(baseUrl)
        res.json(response.data)
    } catch (error) {
        // console log the specifics of the error, but keep them private
        console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥', error)
        // generic interal server error code, message to the client that something bad happened
        res.status(500).send('internal server error')
        
    }
})

// listening on a port
app.listen(PORT, () => console.log(`listening on PORT ${PORT} 👂`))