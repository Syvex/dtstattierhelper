import NumberComparison from './CompareNumber.tsx';
import crit from '../statArrays/crit.ts';

const CritSetter = () => {
  return <NumberComparison title={'Critical Hit'} data={crit} />;
};

export default CritSetter;
