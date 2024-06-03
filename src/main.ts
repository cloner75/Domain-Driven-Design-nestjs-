import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/application.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appConfig, PORT } from './share/config/app.config';
// load config

async function loadConfig(): Promise<ConfigService> {
  const appContext = await NestFactory.createApplicationContext(
    ConfigModule.forRoot({
      load: [appConfig],
    }),
  );
  return appContext.get<ConfigService>(ConfigService);
}

async function bootstrap() {
  const configService = await loadConfig();
  const app = await NestFactory.create(AppModule);
  await app.listen(configService.get(PORT));
}

bootstrap();
