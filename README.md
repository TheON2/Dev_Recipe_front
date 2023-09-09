# 7조 주특기 프로젝트💾

## 주제  :  개발자를 위한 음식레시피 공유 플랫폼

개발자들은 일상적으로 바쁜 업무와 복잡한 코드 작성에 매우 집중해야 합니다. 

이에 따라서 음식을 준비하고 또 요리를 준비하는 데 소요되는 시간과 노력을 최소화하기 위해 간단한 레시피 자기만의 레시피를 많이 들 알고 계십니다. 

그러한 레시피를 공유하고 정보를 얻기 위한 플랫폼(어플리케이션)을 구현하였습니다.

뿐만 아니라 일반 사용자들도 재밌는 요리 레시피나 간단한 레시피를 등록해서 공유 할 수 있는 플랫폼 입니다.


### 🧙 💻맴버구성

| 이름 | 포지션 |
| --- | --- |
| 김도원 | FE / React |
| 박준영 | BE / Spring |
| 정기현 | BE / Spring |

## 각자 생각하는 구현 목표

## 👨‍💻김도원

### 🥇1차 구현 목표

- 레시피에 대한 기본 CRUD
- 레시피분류
- 이미지 업로드
- 회원가입 로그인
- 마이페이지
- 나의 게시글
- 회원정보 수정
- 댓글 / 대댓글

### 🥈2차 구현 목표

1순위

- 3사 소셜로그인/회원가입
- 게시글 페이지네이션 / 인피니트 스크롤/스켈레톤 UI
- 이미지 업로드를 링크 / 실제업로드 양쪽 가능하게
- 검색

2순위

- 최신순/추천순 레이아웃
- BEST 게시글
- 내가 좋아요 한 게시글
- 레시피 배너
- 게시글 캐싱
- 카드 레이아웃 선택기능
- 레시피 추천기능
- 레시피 가져오기 기능
- 재료 크롤링 구매추천 기능



## 👨‍💻정기현

### 🥇1차 구현 목표

- 회원가입 , 로그인 / 소셜로그인 카카오
- 레시피 등록 , 수정, 삭제 / 이미지 파일 추가
- 레시피 전체페이지, 레시피 상세페이지
- 좋아요 기능
- 레시피 분류 (종류별 , 상황별)
- 페이징

### 🥈2차 구현 목표

- 검색
- 마이페이지
- 추가 소셜로그인


## 👨‍💻박준영

### 🥇1차 구현 목표

- 로그인 회원가입 - 시큐리티 적용
- CRUD
- 댓글, 좋아요
- CORS오류체크
- 페이징

### 🥈2차 구현 목표

- 대댓글
- 카카오로그인 등 (소셜 로그인)
- 랭킹 (일간, 주간, 월간) 별 메인페이지 데이터 추출
- 아이디 비밀번호찾기 기능 (메일?)

# 실제 구현한 기능

## 프론트엔드

로그인 페이지 및 기능

회원가입 페이지 및 기능

레시피 작성 기능

레시피 읽기 기능

레시피 상세보기 기능

레시피 수정 기능

레시피 삭제 기능

댓글 작성 기능

댓글 삭제 기능

게시물 필터링 기능

게시물 조건부 렌더링 

최근 본 게시물 기능 

## 백엔드

### 🍗 dependencies

- mysql
- spring security
- spring data JPA
- spring web
- JWT
- Validation
- aws S3

### 🍗 기능

- 시큐리티와 JWT를 이용해 쿠키 발급
    
        → 회원가입 로그인 구현
    
- 레시피 CRUD
- 레시피 ‘댓글’기능
- 레시피 ‘좋아요’기능 (미구현)
- 레시피 이미지 등록 → S3에 저장
