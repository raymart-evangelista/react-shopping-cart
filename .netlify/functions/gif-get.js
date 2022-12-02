const axios = require("axios")

exports.handler = async function(event, context) {
  const { search } = event.queryStringParameters
  const targetURL = `https://api.giphy.com/v1/gifs/translate?api_key=${process.env.REACT_APP_GIPHY_SECRET}&s=${search}`

  try {
    const response = await axios.get(targetURL)
    const buff = await response.arrayBuffer()
    const decode = await new TextDecoder("utf-16le").decode(buff)

    return {
      statusCode: 200,
      body: JSON.stringify(decode.data),
    }
  } catch(error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    }
  }
}