# 일단 막 작성 후 정리

## angular cli 설치
1. sudo npm install -g @angular/cli


-----

## angular 프로젝트 생성

1. ng new todo-app

-----

## 앱 디렉토리 구조

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
- app 디렉토리 : 어플리케이션과 관련 된 파일 저장

- assets 디렉토리 : 이미지 등의 정적 파일

- environments 디렉토리 : 배포 관련 정보

- main.ts : 프로젝트의 메인 파일


-----

## version 확인

```
➜  todo-app git:(master) ng --version 

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 8.0.2
Node: 10.16.0
OS: darwin x64
Angular: 8.0.0
... animations, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router
```

-----

## ng 소스 빌드

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

-----

## ng cli 도움말

> ng help

  `add` :  Adds support for an external library to your project.

  `analytics` : Configures the gathering of Angular CLI usage metrics. See https://v8.angular.io/cli/usage-analytics-gathering.
  
  `build` : (b) Compiles an Angular app into an output directory named dist/ at the given output path. Must be executed from within a workspace directory.
  
  `config` : Retrieves or sets Angular configuration values in the angular.json file for the workspace.
  
  `doc` : (d) Opens the official Angular documentation (angular.io) in a browser, and searches for a given keyword.
  
  `e2e` : (e) Builds and serves an Angular app, then runs end-to-end tests using Protractor.
  
  `generate` : (g) Generates and/or modifies files based on a schematic.
  
  `help` : Lists available commands and their short descriptions.
  
  `lint` : (l) Runs linting tools on Angular app code in a given project folder.
  
  `new` : (n) Creates a new workspace and an initial Angular app.
  
  `run` : Runs an Architect target with an optional custom builder configuration defined in your project.
  
  `serve` : (s) Builds and serves your app, rebuilding on file changes.
  
  `test` : (t) Runs unit tests in a project.
  
  `update` : Updates your application and its dependencies. See https://update.angular.io/
  
  `version` : (v) Outputs Angular CLI version.
  
  `xi18n` : Extracts i18n messages from source code.

> For more detailed help run "ng [command name] --help"

-----

## angular cli 로 module 생성

> ➜  todo-app git:(master) ng generate module todo  
> CREATE src/app/todo/todo.module.ts (188 bytes)

```
src/app
├── app.component.css
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
├── app.module.ts
└── todo
    └── todo.module.ts
```

-----

## aungular cli 로 모듈 component 생성

> ➜  todo-app git:(master) ng g c todo/todos --module todo/todo.module.ts --export  
> g : generate  
> c : component  
> --module 모듈 --export : 현재 생성하는 모듈을 특정 모듈에서 사용 할 수 있도록 export 까지 연결

```
src/app/todo
├── todo.module.ts
└── todos
    ├── todos.component.css
    ├── todos.component.html
    ├── todos.component.spec.ts
    └── todos.component.ts
```

> todos.component.ts

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

> todo.module.ts

```typescript

...

import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [TodosComponent],
  
  ...

  exports: [TodosComponent]
})
export class TodoModule { }

```

> 하위 모듈 생성과 동시에 특정 모듈에 자동으로 연결 해준다.

-----

## aungular cli 로 모듈 inline component 생성

> todo-app git:(master) ng g c todo/todos/todo --inline-template --inline-style 
> g : generate  
> c : component  
> --inline-template : 로직(ts) 내에 템플릿 요소를 셋팅 하겠다.  
> --inline-style : 로직(ts) 내에 css 요소를 셋팅 하겠다.  

```
src/app/todo
├── todo.module.ts
└── todos
    ├── todo
    │   ├── todo.component.spec.ts
    │   └── todo.component.ts
    ├── todos.component.css
    ├── todos.component.html
    ├── todos.component.spec.ts
    └── todos.component.ts
```

`--inline-template, --inline-style 옵션들로 인해 컴포넌트 디렉토리 내에 html, css 파일이 생성 되지 않고 로직(ts) 내의 Componet 제너레이터에 옵션으로 생성 됨`

> todo.component.ts
```typescript
@Component({
  selector: 'app-todo',
  template: `
    <p>
      todo works!
    </p>
  `,
  styles: []
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

-----

## Component

- HTML 요소들의 그룹
- 뷰와 로직으로 구성
