// const axios = require("axios")

// exports.handler = async function(event, context) {
//   // const { search } = event.queryStringParameters
//   // return axios.get(`https://api.giphy.com/v1/gifs/translate?api_key=${process.env.GIPHY_SECRET}&s=${search}}`).then(response => {
//   //   return {
//   //     statusCode: 200,
//   //     body: JSON.stringify({ data: response.data.data})
//   //   }
//   // }).catch(error => {
//   //   console.log(error)
//   //   return {
//   //     statusCode: 404,
//   //     body: error.toString()
//   //   }
//   // })

//   try {
//     const { search } = event.queryStringParameters
//     console.log(search)
//     const response = await axios.get(`https://api.giphy.com/v1/gifs/translate?api_key=${process.env.GIPHY_SECRET}&s=${search}`)
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ data: response.data.data }),
//     }
//   } catch (err) {
//     console.log(err)
//     return {
//       statusCode: 404,
//       body: err.toString()
//     }
//   }
// }