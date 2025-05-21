import { ConfigModule } from '@nestjs/config'

import mysqlDatabaseConfig from './database.config'

export const envConfig = () =>
  ConfigModule.forRoot({
    isGlobal: true,
    expandVariables: true,
    load: [mysqlDatabaseConfig],
  })
