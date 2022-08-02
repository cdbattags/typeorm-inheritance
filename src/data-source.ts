import "reflect-metadata"
import { join, dirname, resolve } from "path"
import { DataSource } from "typeorm"
import fg from "fast-glob"
import { readdirSync } from "fs"
import { fileURLToPath } from "url"

import * as entities from "@/entities"

// let entitiesPath = join(__dirname, `entities`, `*.ts`)
// let entities = []

// const isNext = () => process.env.NEXT_RUNTIME

// function* importSth(toImport: string[]) {
//   for (const f of toImport) {
//     yield import('./entities/' + f).then((res) => Object.values(res))
//   }
// }

// if (isNext() !== undefined) {
//   entitiesPath = join(process.cwd(), `src/entities`, `*.ts`)

//   const dir = dirname(fileURLToPath(import.meta.url))
//   console.log(dir)

//   const toImport = readdirSync(resolve(dir, './entities')).filter((f) => {
//     return f.endsWith(`.ts`)
//   })

//   console.log(toImport)

//   // @ts-ignore
//   // entities = (await Promise.all([...importSth(toImport)])).flat()
// }

// console.log(`isNext`, isNext())
// // console.log(`entities`, entities)
// console.log(`entitiesPath`, entitiesPath)

const AppDataSource = new DataSource({
  type: `postgres`,
  host: `localhost`,
  port: 5432,
  username: `test`,
  password: `test`,
  database: `test`,
  synchronize: false,
  dropSchema: false,
  logging: `all`,
  entities,
  migrations: [join(__dirname, `migrations`, `*.ts`)],
  subscribers: [],
})

export default AppDataSource
