import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import Loader from "./components/Loader"

const LazyApp = lazy(() => import("./App"))

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <Suspense fallback={<Loader />}>
    <LazyApp />
  </Suspense>
)
