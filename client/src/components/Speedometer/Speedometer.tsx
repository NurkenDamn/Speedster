import GaugeChart from 'react-gauge-chart'
import { useColorModeValue } from '@chakra-ui/react';

export interface SpeedometerProps {
  percent: number
}

const Speedometer = ({ percent } : SpeedometerProps) => {
  return (
      <GaugeChart
          id='gauge-chart'
          nrOfLevels={30}
          colors={useColorModeValue(['#B19FF9', '#A16AE8'], ['#91daf2', '#053963'])}
          arcWidth={0.3}
          percent={percent}
          animate={true}
          needleColor={useColorModeValue('#B19FF9', '#299fff')}
          needleBaseColor={useColorModeValue('#A16AE8', '#053963')}
          formatTextValue={value => value}
      />
  );
}

export default Speedometer