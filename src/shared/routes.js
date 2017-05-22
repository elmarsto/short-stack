// @flow
import { GRAPHQL_PATH, GRAPHIQL_PATH } from '../shared/config'

export const HOME_PAGE_ROUTE = '/'
export const HELLO_PAGE_ROUTE = '/hello'
export const HELLO_ASYNC_PAGE_ROUTE = '/hello-async'
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/404'
export const GRAPHQL_ROUTE = GRAPHQL_PATH
export const GRAPHIQL_ROUTE = GRAPHIQL_PATH

export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`
