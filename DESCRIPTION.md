# 일단 막 작성 후 정리

### angular cli 설치
1. sudo npm install -g @angular/cli


### angular 프로젝트 생성
1. ng new todo-app


### 앱 디렉토리 구조
```
src
 ├── app
 │   ├── app.component.css
 │   ├── app.component.html
 │   ├── app.component.spec.ts
 │   ├── app.component.ts
 │   └── app.module.ts
 ├── assets
 ├── environments
 │   ├── environment.prod.ts
 │   └── environment.ts
 ├── favicon.ico
 ├── index.html
 ├── main.ts
 ├── polyfills.ts
 ├── styles.css
 └── test.ts
```
app 디렉토리 : 어플리케이션과 관련 된 파일 저장

assets 디렉토리 : 이미지 등의 정적 파일

environments 디렉토리 : 배포 관련 정보

main.ts : 프로젝트의 메인 파일


### 소스 빌드

ng serve
