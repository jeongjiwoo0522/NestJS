import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { MoviesModule } from "./movies/movies.module";
import { AppController } from "./app.controller";
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

// app 모듈 내 메서드로 미들웨어 구현
@Module({
  imports: [MoviesModule, CatsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  // 미들웨어를 사용하는 모듈은 NestModule 인터페이스를 구현 
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes("cats");
  }
}
