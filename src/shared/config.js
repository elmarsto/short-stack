// @flow
import { gql } from 'react-apollo'
import { isProd } from './util'

export const WEB_PORT = process.env.PORT || 8000
export const WDS_PORT = 7000
export const STATIC_PATH = '/static'
export const GRAPHQL_PATH = '/graphql'
export const GRAPHIQL_PATH = '/graphiql'
export const GRAPHQL_TESTQUERY = gql`{
  allPosts {
    edges {
      node {
        id
        headline
      }
    }
  }
}`


export const PG_URI = 'postgres://postgres:postgres@postgres:5432/postgres'
// from https://github.com/postgraphql/postgraphql/blob/master/examples/forum/TUTORIAL.md
export const PG_SCHEMA = 'forum_example'
export const PG_JWT_TYPE = `${PG_SCHEMA}.jwt_token`
export const PG_DEFAULT_ROLE = `${PG_SCHEMA}_anonymous`
export const SSTK_SECRET = (isProd) ? process.env.SSTK_SECRET : 'keyboard_kitten'
export const PGQL_OPT = {
  graphiql: !isProd,
  graphqlRoute: GRAPHQL_PATH,
  graphiqlRoute: GRAPHIQL_PATH,
  jwtAudiences: ['sstk'],
  jwtSecret: SSTK_SECRET,
  jwtPgTypeIdentifier: PG_JWT_TYPE,
  disableQueryLog: isProd,
  pgDefaultRole: PG_DEFAULT_ROLE,
  watchPg: !isProd,
  exportJsonSchemaPath: './public/graphql-schema.json',
  exportGqlSchemaPath: './public/graphql-schema.gql',
}

export const PGQL_CFG =
  [
    PG_URI,
    PG_SCHEMA,
    PGQL_OPT,
  ]

export const APP_NAME = 'Hello App'

export const APP_CONTAINER_CLASS = 'js-app'
export const APP_CONTAINER_SELECTOR = `.${APP_CONTAINER_CLASS}`
export const JSS_SSR_CLASS = 'jss-ssr'
export const JSS_SSR_SELECTOR = `.${JSS_SSR_CLASS}`

export const IO_CONNECT = 'connect'
export const IO_DISCONNECT = 'disconnect'
export const IO_CLIENT_HELLO = 'IO_CLIENT_HELLO'
export const IO_CLIENT_JOIN_ROOM = 'IO_CLIENT_JOIN_ROOM'
export const IO_SERVER_HELLO = 'IO_SERVER_HELLO'

