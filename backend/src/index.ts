import { apollo } from '@elysiajs/apollo'
import { Elysia } from 'elysia'
import { Resolvers, Schema } from './schema'

const app = new Elysia()
  .use(
    apollo({
      typeDefs: Schema,
      resolvers: Resolvers,
    }),
  )
  .listen(process.env.PORT || 3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
