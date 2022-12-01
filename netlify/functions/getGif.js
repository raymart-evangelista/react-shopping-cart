const axios = require("axios")

exports.handler = async function(event, context) {
  // console.log(event)
  // console.log(context)

  try {
    const { search } = event.queryStringParameters
    console.log(search)
    const response = await axios.get(`https://api.giphy.com/v1/gifs/translate?api_key=${process.env.GIPHY_SECRET}&s=${search}}`)
    // console.log("*****")
    // console.log(response)
    // console.log("*****")
    // console.log(JSON.stringify({ data: response}))
    // console.log("*****")
    return {
      statusCode: 200,
      body: JSON.stringify({ data: response.data.data }),
    }
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString()
    }
  }
}