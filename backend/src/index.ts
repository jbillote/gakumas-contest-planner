import { apollo } from '@elysiajs/apollo'
import { Elysia } from 'elysia'
import { connectToDB } from './db/connection'
import { Resolvers, Schema } from './schema'

await connectToDB()

const app = new Elysia()
  .use(
    apollo({
      typeDefs: Schema,
      resolvers: Resolvers,
    }),
  )
  .listen(process.env.PORT || 3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
