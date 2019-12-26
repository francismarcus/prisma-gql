import { GraphQLServer } from 'graphql-yoga'


type ResolverFunction = (parent: any, args: any, ctx: any) => any
interface ResolverMap {
    [field: string]: ResolverFunction
}

const typeDefs = `
    type Query {
        greeting(title: String!): String!
    }
`
const greeting: ResolverFunction = (_, { title } ) => {
    return title
}

const resolvers = {
    Query: <ResolverMap> {
        greeting,
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('The server is up!')
})