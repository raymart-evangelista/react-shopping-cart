### Applied skills
- React routes
- React hooks
- React props
- Handling inputs and rendering lists
- Calling third-party APIs

### Resources
- Storing API Keys with Create React App
  - [Community responses for storing API keys properly with CRA](https://www.reddit.com/r/reactjs/comments/p575tb/where_can_i_learn_to_properly_store_an_api_key_on/)
  - [freeCodeCamp Netlify tutorial](https://www.freecodecamp.org/news/how-to-access-secret-api-keys-using-netlify-functions-in-a-react-app/)
  - [Axios for communicating with backend server](https://www.geeksforgeeks.org/axios-in-react-a-guide-for-beginners/)

### Issues
- the first issue had to do with the build environment.. [updating the `Build command` from `npm run build` to `CI=false npm run build`](https://dev.to/kapi1/solved-treating-warnings-as-errors-because-of-process-env-ci-true-bk5?comments_sort=latest#toggle-comments-sort-dropdown) worked in solving the build issues on Netlify
- Attempting to use Netlify's serverless function
  - API call not working on server, but working on local
  - I spent many hours trying to figure out why my API calls were working on my local development environment and not on Netlify. I followed the freeCodeCamp Netlify tutorial linked in the resources, and my project worked locally using `netlify dev`. However, I ran to issues when deploying my project on netlify.
  - By following the freeCodeCamp tutorial, I created a `.js` file in `netlify/functions` so Netlify knows where to locate my functions. And, I used try-catch with axios.get for the API call. This worked locally, but caused issues on the server. I ended up commenting out the code in the `.js` file in `netlify/functions` and used `fetch` instead of `axios` directly in the component I was working in. I also set `api key` in `.env` the REACT way, and the API call ended up working both locally and on Netlify.
    - I learned more about serverless functions and was able to get the functions working properly locally by following [this](https://www.youtube.com/watch?v=n_KASTN0gUE) and [this](https://www.youtube.com/watch?v=9iZCLODSq6k) tutorial
      - adding `netlify.toml` and renaming the `netlify` folder to `.netlify`
      - by following the tutorials step by step, I was able to build up my knowledge and get my APIs working properly with the serverless functions
      - it seems that most of the local errors had to do with syntax such as using `/.netlify/functions` instead of `./netlify/functions` and running the local server on `localhost:8888` and not `localhost:3000`

- third party API calling using serverless functions is not working.. trying to fetch/axios into `/.netlify/functions/gif-get` isn't working properly
  - the data comes out in some unreadable form
  - axios into `/.netlify/functions/helloWorld` does work and the data is readable

### Todo
- style
- test app using React Testing Library