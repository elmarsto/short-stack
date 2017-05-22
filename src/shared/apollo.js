import { ApolloClient, createNetworkInterface } from 'react-apollo'
import { GRAPHQL_PATH } from '../shared/config'


// adapted from http://dev.apollodata.com/react/auth.html

export const networkInterface = createNetworkInterface({
  uri: GRAPHQL_PATH,
})

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}  // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token')
    if (token) req.options.headers.authorization = `Bearer ${token}`
    next()
  },
}])

export const apolloClient = new ApolloClient({
  networkInterface,
})
