# N-telier [ N's Atelier ]

---

## 프로젝트 개요
- 개인용 블로그 플랫폼 개발
---

## 프로젝트 명세
- MVP 중심으로 CRUD 기능 제작 후 인증, 커스터마이징 등 기능 제공 예정

---

## 프로젝트 사용 기술 스택
### 공통 및 개발 환경
- Runtime: Node.js - 22.17.0
- Language : TypeScript - ECMA 2023
- Package Manager : Yarn - 4.9.2
- IDE : WebStorm - 2024.03

### Backend
- Framework : Nest.js - 11.0.1
- Database : PostgreSQL - 17.5
- ORM : Prisma - 6.10.1

### Frontend
- Framework : Next.js
- Library : React
- CSS : TailwindCss

### 테스트 및 배포

---

## 프로젝트 진행 내역
|    날짜     |          내역           |                      설명                      |                                   비고                                    |
|:---------:|:---------------------:|:--------------------------------------------:|:-----------------------------------------------------------------------:|
|   06.25   |        프로젝트 시작        |                명세 작성 및 기술 선정                 |                          Nest.js & Next.js 사용                           |
| 06.25 - 2 |         모델 생성         | User, Blog, Post, Series, Comment 모델 생성 및 매핑 |                         PostgreSql 및 Prisma 사용                          |
|   06.26   |     모델 수정 및 기능 추가     |             비밀 댓글 기능, 대댓글 기능 생성              |                대댓글 기능에 n 단계 댓글은 어플리케이션 계층에서 설정 및 제한 필요                  |
| 06.26 - 2 | Prisma 마이그레이션 및 오류 해결 |             TS2305, TS8007 오류 해결             | 원인 : schema.prisma 에서 output 경로가 지정되어 있었음 -> @prisma/client 경로가 아닐 수 있음 |
