import "./styles.css";
import Game from "./components/Game";
import Counter from "./components/Counter";
import { useState } from "react";

export default function App() {
  const [coins, setCoins] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Game coins={coins} setCoins={setCoins} />
      <Counter count={count} setCount={setCount} input={coins} />
    </div>
  );
}
