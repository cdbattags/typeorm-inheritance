import 'dotenv/config'
import { join } from 'path'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

const entitiesDir = join(__dirname, `entities`, `*.ts`)

const AppDataSource = new DataSource({
  type: `postgres`,
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  dropSchema: false,
  logging: `all`,
  entities: [entitiesDir],
  migrations: [join(process.cwd(), `src/migrations`, `*.{ts,js}`)],
  subscribers: [],
})

export default AppDataSource
