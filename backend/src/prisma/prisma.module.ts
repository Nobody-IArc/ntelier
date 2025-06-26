import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// prisma.service 를 nest.js 가 모듈로 인식하게 만들기 위함
// @Global 데커레이터로 전역 설정 -> app.module.ts 에서 설정할 필요 X
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})

export class PrismaModule {}
