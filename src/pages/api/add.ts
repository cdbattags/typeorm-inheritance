import 'reflect-metadata'
import { User } from '@/entities/User'
import initDB from '@/util/db'
import { NextApiRequest, NextApiResponse } from 'next'

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

const add = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== `POST`) {
    throw Error(`only post`)
  }

  try {

    const db = await initDB()

    console.log('initialized:', db.isInitialized)
    console.log(db.hasMetadata(User))
    
    db.entityMetadatas.forEach((metadata) => {
        console.log(metadata.name)
    })
    
    const user = new User()
    
    user.email = `christian.d.battaglia+${getRandomInt(100)}@gmail.com`
   
    const saved = await db.manager.getRepository(User).save(user)
    const count = await db.manager.getRepository(User).count()

    res.json({})

  } catch (e) {
    console.log(e)
    res.json({e})
  }
}

export default add
