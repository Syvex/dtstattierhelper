import { ChangeEvent, FC, useEffect, useState } from 'react';

interface NumberComparisonProps {
  title: string;
  data: number[];
  showGCD?: boolean;
}

type resultType = {
  input: number | null;
  prevTier: number | null;
  prevDiff: number | null;
  nextTier: number | null;
  nextDiff: number | null;
};

const NumberComparison: FC<NumberComparisonProps> = ({
  title,
  data,
  showGCD,
}): JSX.Element => {
  const [inputValue, setInputValue] = useState<number>(data[0]);
  const [result, setResult] = useState<resultType>({} as resultType);

  // speed specific
  const baseGCD = 2.5;
  const [gcd, setGCD] = useState(baseGCD);

  const handleSpeedCalc = () => {
    if (result.prevTier) {
      const index = data.indexOf(result.prevTier);
      setGCD(baseGCD - 0.01 * index);
    }
  };

  useEffect(() => {
    if (showGCD) handleSpeedCalc();
  }, [result]);

  // Materia
  const [count54, setCount54] = useState(0);
  const [count18, setCount18] = useState(0);

  // debounce comparison
  useEffect(() => {
    const timer = setTimeout(() => {
      handleCompare();
    }, 1000);

    return () => clearTimeout(timer);
  }, [inputValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value));
  };

  const handleCompare = () => {
    const number = inputValue;
    if (isNaN(number)) return;

    let lower = null;
    let higher = null;

    for (let i = 0; i < data.length; i++) {
      if (data[i] <= number) {
        lower = data[i];
      }
      if (data[i] > number) {
        higher = data[i];
        break;
      }
    }

    const lowerDiff = lower !== null ? number - lower : null;
    const higherDiff = higher !== null ? higher - number : null;

    setResult({
      input: number,
      prevTier: lower,
      prevDiff: lowerDiff,
      nextTier: higher,
      nextDiff: higherDiff,
    });
  };

  const handleIncrement = (amount: number) => {
    setInputValue((prev) => Number(prev) + amount);
    if (amount === 54) {
      setCount54((prev) => prev + 1);
    } else if (amount === 18) {
      setCount18((prev) => prev + 1);
    }
  };

  const handleDecrement = (amount: number) => {
    setInputValue((prev) => Number(prev) - amount);
    if (amount === 54) {
      setCount54((prev) => prev - 1);
    } else if (amount === 18) {
      setCount18((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <button onClick={() => handleIncrement(54)}>+54</button>
        <button onClick={() => handleDecrement(54)} disabled={count54 === 0}>
          -54
        </button>
        <span> x54 count: {count54}</span>
      </div>
      <div>
        <button onClick={() => handleIncrement(18)}>+18</button>
        <button onClick={() => handleDecrement(18)} disabled={count18 === 0}>
          -18
        </button>
        <span> x18 count: {count18}</span>
      </div>
      <input type="number" value={inputValue} onChange={handleChange} />
      <div>{result.input}</div>

      {result.prevTier && (
        <div>
          Previous Tier: {result.prevTier} [-{result.prevDiff}]
        </div>
      )}

      {result.nextTier && (
        <div>
          Next Tier: {result.nextTier} [+{result.nextDiff}]
        </div>
      )}

      {showGCD && <div>GCD: {gcd}</div>}
    </div>
  );
};

export default NumberComparison;
