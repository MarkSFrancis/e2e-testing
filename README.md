# Angular E2E Testing
This is a learning exercise for me, finding out how to creating E2E and unit tests in Angular
  
In here, you can find unit testing and E2E testing samples, with smoke tests, auto-running unit tests via code watching, and best practice samples

It uses tools like Jasmine, Protractor, Headless Chrome and Karma to power its testing suite. You'll find samples of tests for components, entire pages, object creation, forms and more across this application.

#### Unit Tests
These are quick, light and focused tests that only cover a single component. 

Unit tests for a component are placed in a \*.spec.ts file with a name matching that of the component.

#### E2E Tests
E2E tests are not component specific, but can cover an entire page, or even span multiple pages. You can find these tests in the e2e/src folder

E2E tests are split into two types: e2e-smoke and e2e-spec. The former are quick, lighter tests that only test the most basic functionality of the app. The latter analyses the application in detail, testing all the more advanced functionality and pages of the application. 

## Getting Started

1. Run `npm start`

1. Open your browser at `http://localhost:4200`

**Optional**:
<br/>
On subsequent runs, you can use `npm run startfast` which skips the package installation step

## Running Tests
Before running any tests, you must have installed all packages, either through `npm install` or `npm start`.

#### Unit tests
Run `npm test`. This runs as a watcher in the background, and so you can continue developing whilst this runs, and it will re-run all tests as you change your code

#### End to end tests
These run as a 1 time process, and must be re-run each time.

For only the smoke tests, run `npm run smoke`. 

For all E2E tests, run `npm run e2e`.
