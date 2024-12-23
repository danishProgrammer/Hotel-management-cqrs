import { NestFactory } from '@nestjs/core';
import { RoomModule } from './room.module';

async function bootstrap() {
  const app = await NestFactory.create(RoomModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
