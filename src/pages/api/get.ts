import initDB from '@/util/db'
import { NextApiRequest, NextApiResponse } from 'next'
import { Table } from 'typeorm'

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== `GET`) {
    throw Error(`only get`)
  }

  const db = await initDB()

  console.log(db.manager.connection.isInitialized)
  console.log(await db.createQueryRunner().createTable(new Table({ name: 'testing' })))

  res.json(`done`)
}

export default get
