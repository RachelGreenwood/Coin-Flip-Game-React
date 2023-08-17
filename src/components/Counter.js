export default function Counter(props) {
  const { count, setCount, coins } = props;
  function increment() {
    setCount(count + coins);

    return (
      <div>
        <p> Coins Flipped: {count}</p>
        <button onClick={increment()}>Increment</button>
      </div>
    );
  }
}
