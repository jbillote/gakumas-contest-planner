import { GraphQLClient } from 'graphql-request'

const graphqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:3001/graphql')

export { graphqlClient }
