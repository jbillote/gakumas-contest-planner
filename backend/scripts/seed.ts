/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { readdir } from 'node:fs/promises'
import mongoose from 'mongoose'
import { connectToDB } from '../src/db/connection'
import { PCard } from '../src/models/PCard'

const typeConversion = {
  ACTIVE: 'active',
  MENTAL: 'mental',
  TROUBLE: 'trouble',
}

const planConversion = {
  FREE: 'free',
  SENSE: 'sense',
  LOGIC: 'logic',
  ANOMALY: 'anomaly',
}

const rarityConversion = {
  T: 't',
  R: 'r',
  SR: 'sr',
  SSR: 'ssr',
}

const costConversion = {
  LOW: 'low',
  HIGH: 'high',
}

async function seed() {
  console.log('Loading initial data from fs')
  const files = await readdir(`${import.meta.dir}/initialData`)

  await connectToDB()

  // Clear DB
  console.log('Clearing existing data')
  await PCard.deleteMany({})

  // Seed with initial data
  console.log('Seeding with initial data')
  const pcards = []
  for (const file of files) {
    const data = await Bun.file(`${import.meta.dir}/initialData/${file}`).json()
    pcards.push({
      id: data.id,
      filename: data.filename,
      name: data.name,
      type: typeConversion[data.type] || 'trouble',
      plan: planConversion[data.plan] || 'free',
      rarity: rarityConversion[data.rarity] || 't',
      cost: costConversion[data.cost] || 'low',
      customCharacter: data.customCharacter,
    })
  }
  await PCard.insertMany(pcards)
  console.log('Finished seeding')
}

seed().then(
  async () => {
    await mongoose.connection.close()
  },
  async () => {
    console.error('Failed to seed database')
    await mongoose.connection.close()
  },
)
