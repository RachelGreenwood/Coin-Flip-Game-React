import "./styles.css";
import Game from "./components/Game";
import { useState } from "react";

export default function App() {
  const [coins, setCoins] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Game
        coins={coins}
        setCoins={setCoins}
        count={count}
        setCount={setCount}
      />
    </div>
  );
}
