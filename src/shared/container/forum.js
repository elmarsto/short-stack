// @flow

import { graphql } from 'react-apollo'
import { GRAPHQL_TESTQUERY } from '../config'

import PostList from '../component/post-list'


export default graphql(GRAPHQL_TESTQUERY)(PostList)
