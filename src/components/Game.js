export default function Game(props) {
  function coinFlip() {
    let flip = Math.random();
    if (flip < 0.5) {
      return "Heads";
    } else {
      return "Tails";
    }
  }

  return (
    <div>
      <p>How many coins do you want to flip?</p>
      <input type="number" />
      <button onClick={(e) => coinFlip()}>Flip</button>
      <p>{props.coins}</p>
    </div>
  );
}

// if (coinNum > 0) {
//   let coinStack = [];
//   for (let i = 0; i < coinNum; i++) {
//       coinStack.push(coinFlip())
//   }
//   text.innerText = coinStack.join(", ");
//   console.log(coinFlip());
// } else {
//   text.innerText = "Please enter a valid number";
// }
