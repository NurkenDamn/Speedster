import { Progress, Space } from 'antd'
import { useColorModeValue } from '@chakra-ui/react';

export interface SpeedometerProps {
  percent: number
}

const Speedometer = ({ percent } : SpeedometerProps) => {
  return (
   <Space wrap>
    <Progress
      type={'dashboard'}
      percent={percent}
      strokeColor={useColorModeValue({ '0%': '#2C5282', '100%': '#1A365D' }, { '0%': '#63B3ED', '100%': '#2B6CB0' })}
      trailColor={useColorModeValue('#4FD1C5', '#63B3ED')}
      size={200}
      strokeWidth={7}
    />
   </Space>
  )
}

export default Speedometer