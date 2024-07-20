import './App.css';
import CritSetter from './statSetters/CritSetter.tsx';
import TenacitySetter from './statSetters/TenacitySetter.tsx';
import DhrSetter from './statSetters/DhrSetter.tsx';
import DetSetter from './statSetters/DetSetter.tsx';
import SpeedSetter from './statSetters/SpeedSetter.tsx';
import PietySetter from './statSetters/PietySetter.tsx';

function App() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          height: '300px',
          width: '100%',
        }}
      >
        <CritSetter />
        <DhrSetter />
        <DetSetter />
      </div>
      <div
        style={{
          height: '300px',
        }}
      >
        <SpeedSetter />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          height: '300px',
        }}
      >
        <PietySetter />
        <TenacitySetter />
      </div>
    </>
  );
}

export default App;
