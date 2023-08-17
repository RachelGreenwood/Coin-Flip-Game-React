export default function Game(props) {
  const [number, setNumber] = useState('');

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
        coinStack.push(coinFlip())
      }
      text.innerText = coinStack.join(", ");
    } else {
      text.innerText = "Please enter a valid number";
    }
  }

  return (
    <div>
      <p>How many coins do you want to flip?</p>
      <input type="number" value={number} />
      <button onClick={(e) => handleClick()}>Flip</button>
      <p>{props.coins}</p>
    </div>
  );
}