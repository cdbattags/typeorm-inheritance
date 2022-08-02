import { DataSource } from 'typeorm'

import AppDataSource from '@/data-source'

let db: DataSource | null = null

export default async () => {
  if (db === null) {
    db = await AppDataSource.initialize()
  }

  return db
}
