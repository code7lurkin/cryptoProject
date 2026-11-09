import "./index.css";
import { BrowserRouter , Routes , Route } from "react-router";
import { Coins } from "./screens/coins";
import { CoinsById } from "./screens/coinsById";

export function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/coins" element={< Coins />} />
      <Route path="/coins/:id" element={< CoinsById />} />
    </Routes>
  </BrowserRouter>
  
  )
  
}

export default App;
