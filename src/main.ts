import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // decorator가 없는 property를 거르지만 request는 허용
      forbidNonWhitelisted: true, // requset 자체를 막음
      transform: true, // 유저가 원하는 type으로 parameter, querystring을 바꿈
    }),
  );
  await app.listen(3000);
}
bootstrap();
