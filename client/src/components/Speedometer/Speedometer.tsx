import GaugeChart from 'react-gauge-chart'
import { useColorModeValue } from '@chakra-ui/react';

const Speedometer = () => {
  return (
      <GaugeChart
          id='gauge-chart'
          nrOfLevels={30}
          colors={useColorModeValue(['#B19FF9', '#A16AE8'], ['#91daf2', '#053963'])}
          arcWidth={0.3}
          percent={0.88}
          animate={true}
          needleColor={useColorModeValue('#B19FF9', '#299fff')}
          needleBaseColor={useColorModeValue('#A16AE8', '#053963')}
          formatTextValue={value => value}
      />
  );
}

export default Speedometer