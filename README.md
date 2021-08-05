
# Sentry in a React Project
A simple demonstration of how to setup Sentry in a React project.

## What is Sentry? 
Sentry is all about error and performance tracking in short. 

It gives insights into how your application is running and pick up errors and alerts you when a user throws an error.

> We’re so much more than error monitoring software. We’re also performance monitoring software. Our platform helps every developer diagnose, fix, and optimize the performance of their code. With Sentry, developers around the world save time, energy, and probably a few therapy sessions.


## Documentation

[Documentation](https://docs.sentry.io/platforms/javascript/guides/react/)

  
## Installation

Install sentry with npm

```bash
# Using npm
npm install --save @sentry/react @sentry/tracing

# Using yarn
yarn add @sentry/react @sentry/tracing
```

in index.(t/j)s 
```js
import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from "./App";

Sentry.init({
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById("root"));

// Can also use with React Concurrent Mode
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

## Usage/Examples

```javascript
import * as Sentry from "@sentry/react";

function App() {
  return <button onClick={methodDoesNotExist}>Break the world</button>;
}


export default Sentry.withProfiler(App); //<-- used for perfomance tracking *optional*
```

  
## Lessons Learned

Sentry is great for tracking errors and performance, especially in a production enviroment. 
It makes handling issues much better and easier with the insights that are provided by sentry.

In all I believe it adds to the quality of any application where it's been implemented. And almost everything about it, is configurable. 

That being said there is a price per the transactions that get sent to sentry 

[Pricing](https://sentry.io/pricing)  
## Run Locally

Clone the project

```bash
  git clone https://github.com/CodeNameNinja/ReactSentryDemo.git
```

Go to the project directory

```bash
  cd sentry-demo
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Screenshots

![Issues](https://i.ibb.co/x8FQjV5/issues.png)
![Performance](https://i.ibb.co/d49XVRf/Performance.png)

  