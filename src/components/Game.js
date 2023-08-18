export default function Game(props) {
  const { coins, setCoins, count, setCount } = props;

  function coinFlip() {
    let flip = Math.random();
    if (flip < 0.5) {
      return "Heads";
    } else {
      return "Tails";
    }
  }

  function handleClick() {
    let coinNum = input.value;
    if (coinNum > 0) {
      let coinStack = [];
      for (let i = 0; i < coinNum; i++) {
        coinStack.push(coinFlip());
      }
      setCoins(coinStack.join(", "));
    } else {
      setCoins("Please enter a valid number");
    }
    increment();
  }

  function increment() {
    setCount(count + coins);

    return (
      <div>
        <p>How many coins do you want to flip?</p>
        <input id="input" type="number" />
        <button onClick={(e) => handleClick()}>Flip</button>
        <p>{coins}</p>
        <p> Coins Flipped: {count}</p>
      </div>
    );
  }
}
