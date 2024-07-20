import NumberComparison from './CompareNumber.tsx';
import speed from '../statArrays/speed';

const SpeedSetter = () => {
  console.log(speed);

  return (
    <>
      <NumberComparison title={'Speed'} data={speed} showGCD />
    </>
  );
};

export default SpeedSetter;
