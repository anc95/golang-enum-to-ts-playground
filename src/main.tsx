import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import './index.css'
import App from './App'
import './userWorker';

Sentry.init({
  dsn: "https://27b41025320541a981da71905624b6cd@o1154773.ingest.sentry.io/6234686",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
