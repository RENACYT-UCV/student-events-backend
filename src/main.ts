import { NestFactory } from '@nestjs/core'
import { AppModule } from './modules/core/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const PORT = process.env.PORT ?? 8000

  await app.listen(PORT)
  console.log(`\n\n Server running on http://localhost:${PORT}\n\n`)
}
/* eslint-disable @typescript-eslint/no-floating-promises */
bootstrap()
