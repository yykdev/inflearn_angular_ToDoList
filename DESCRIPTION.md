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

```
➜  todo-app git:(master) ng serve                                                                                           
Date: 2019-06-11T07:53:08.452Z

Hash: e5b7fb2f73029787c794

Time: 7297ms

chunk {main} main.js, main.js.map (main) 9.81 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 248 kB [initial] [rendered]
chunk {polyfills-es5} polyfills-es5.js, polyfills-es5.js.map (polyfills-es5) 380 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 6.08 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 16.3 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 3.67 MB [initial] [rendered]

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

ℹ ｢wdm｣: Compiled successfully.
```