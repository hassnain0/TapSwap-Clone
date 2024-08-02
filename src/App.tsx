import { BrowserRouter } from "react-router-dom";

import { RoutesProvider } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <RoutesProvider />
    </BrowserRouter>
  )
}
