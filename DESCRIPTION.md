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

## *ngFor="let todo of todos"

> *ngFor

```
*ngFor는 Angular 지시자로서 특정 배열 인스턴스의 내용을 변수에 담고, 배열의 길이 만큼 지시자가 사용된 템플릿 요소를 반복 생성 하겠다는 것을 의미

*ngFor="let todo of todos"

=> todos 리스트의 값을 순회 하며 todo 변수에 담아 반복 하겠다.
```

> 그 외의 지시자는 도큐먼트 참고 하기.

> 굳이 파이썬과 비교 하자면 for todo in todos: 와 같은 용도라 생각 하면 됨

-----

## 이벤트 바인딩

### *특정 돔 요소에 이벤트를 주는 행위. 클릭, 마우스오버 뭐 기타 등등.*

```
<div *ngFor="let todo of todos" (click)="이벤트 문장">

=> div 요소를 클릭( (click) ) 할 경우 "이벤트 문장"에 해당 하는 행위를 진행 하겠다.
```

### *토글링 실습*

```
(click)="todo.done = !todo.done"

=> 클릭 할 때마다 현재 done의 값의 반대 값을 바인딩 하겠다.

true => false , false => true
```

### *이벤트 바인딩 메소드 처리*

> 현재 html 템플릿을 렌더링 하는 컴포넌트에 메소드 생성

```
export class TodosComponent implements OnInit {

  ...

  toggleDone(todo) {
    todo.done = !todo.done
  }

}
```

> 컴포넌트에 생성한 메소드를 이벤트 바인딩

```
<div *ngFor="let todo of todos" (click)="toggleDone(todo)">
```

### *할 일(ToDo) 추가 기능*

> 입력 된 할일 Text 를 받아 할일 리스트에 추가하고, 데이터 바인딩을 위한 모델(newText)의 초기화 진행

```
export class TodosComponent implements OnInit {

  ...

  addTodo(newText: string) {
    this.todos.push({
      done: false,
      text: newText
    });

    this.newText = '';
  }

}
```

> 버튼 요소에 할일추가 클릭 이벤트 바인딩

```
<button (click)="addTodo(newText)">ADD</button>
```

------

## 데이터 바인딩

### *ngModel* 지시자

> ngModel 지시자는 입력박스와 같은 폼 컨틀롤과 양방향 데이터 바인딩을 지원 한다.

```
<input type="text" name="" id="" placeholder="할 일 추가" [(ngModel)]="newText">

[(ngModel)]와 같이 지시자를 [()]로 호출하여 데이터 바인딩을 위한 Component 내에 선언 된 모델 명을 기입 하면 해당 모델과 양방향 데이터 바인딩을 진행 하게 된다.
```

[참고 : https://dschci.tistory.com/84](https://dschci.tistory.com/84)
