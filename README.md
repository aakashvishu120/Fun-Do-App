# FunDo

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.




To install Angular Material , run:

```bash
ng add @angular/material
```





Directives are classes that add additional behavior to elements in your Angular applications.
1 component
2 attribute directive : ngClass, ngStyle, ngModel

CLI command : ng generate directive highlight



decorators are special functions that use TypeScript to add metadata to classes, properties, methods, or parameters. They essentially tell Angular how to process and utilize these elements within your application. 

Decorators enhance functionality and provide configuration: They allow you to add features or configuration to your code elements without modifying their underlying implementation.

Four main types of decorators:
Class Decorators: Applied to classes to define their role (e.g., @Component, @NgModule).
Property Decorators: Applied to class properties (e.g., @Input, @Output).
Method Decorators: Applied to class methods (e.g., @HostListener).
Parameter Decorators: Applied to constructor parameters (e.g., @Inject). 





Observables in Angular are a core concept for handling asynchronous operations and managing data streams, 
1 Asynchronous Data Streams:
Observables represent a stream of data or events that can be emitted over time. Unlike Promises, which handle a single asynchronous value, Observables can emit multiple values.

2 Reactive Programming:
They are central to Angular's reactive programming paradigm, allowing applications to react to changes and events as they occur.

3 Lazy Execution:
An Observable only starts emitting values when an observer subscribes to it. This "cold" behavior means the producer function is executed only when needed.

4 Subscription Model:
To consume values from an Observable, an observer needs to subscribe to it using the subscribe() method. This method takes an observer object with next(), error(), and complete() callbacks to handle emitted values, errors, and completion signals, respectively.

5 Unsubscribing:
It is crucial to unsubscribe from Observables when they are no longer needed to prevent memory leaks, especially with long-lived or "hot" Observables. Angular's AsyncPipe can automatically handle subscriptions and unsubscriptions in templates.

6 Operators:
RxJS provides a rich set of operators that can be used to transform, filter, combine, and manipulate Observable streams. Examples include map(), filter(), debounceTime(), switchMap(), and shareReplay().

7 Common Use Cases in Angular:
HTTP Requests: The HttpClient module uses Observables to manage AJAX requests and responses. 
Event Handling: Listening for and reacting to user input events in forms and components.
Inter-component Communication: Sharing data between components using EventEmitter (which extends RxJS Subject).
Routing: The Angular Router uses Observables to handle navigation events.




In Angular, subscribe() is a method used to listen for and react to values emitted by an Observable.


{
    "firstName": "aakash",
    "lastName": "kumar", 
    "service": "advance",
    "username": "username@gmail.com",
    "password": "Aaskash120@"
}


component Hierarchy :

Dashboard Page
1 notes : title + description
    notes-icon
        color-picker
        note-menu
    app-notes-card-container
        notes-icon
            color-picker
            note-menu
2 remainder
3 edit labels
4 archive
5 trash