import * as Sentry from "@sentry/react";

function App() {
  return <button onClick={methodDoesNotExist}>Break the world</button>;
}


export default Sentry.withProfiler(App);