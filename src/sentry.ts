import * as Sentry from "@sentry/node"
import * as Tracing from "@sentry/tracing"


Sentry.init({
    dsn: "https://c61b574a11f84636bea6ebbdbddbf872@o1330674.ingest.sentry.io/6593650",
    tracesSampleRate: 1.0
})

export {
    Sentry,
    Tracing
}