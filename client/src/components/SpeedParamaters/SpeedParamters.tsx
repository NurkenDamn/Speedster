import {
  Container,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  CircularProgress,
  CircularProgressLabel,
  useColorModeValue
} from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'

import { hoverAnimationCss } from '../../utils/animations'

export interface SpeedParametersProps {
  speed: number
}

const SpeedParameters = ({ speed } : SpeedParametersProps) => {
  
  return (
    <Container
      display={'flex'}
      flexDirection={{ base: 'column', md: 'row' }}
      maxW={'container.lg'}
      css={hoverAnimationCss}
    >
      <Box>
        <CircularProgress 
          value={100} 
          color={useColorModeValue('blue.800', 'blue.400')}
          size={'205px'}
        >
          <CircularProgressLabel>100%</CircularProgressLabel>
        </CircularProgress>
        <Stat 
          display={'flex'} 
          flexDirection={'column'} 
          alignItems={'center'} 
          justifyItems={'center'}
        >
          <StatLabel>Internet speed</StatLabel>
          <StatNumber>{speed} Mbps</StatNumber>
          <StatHelpText>
            <InfoIcon />
            Download speed
          </StatHelpText>
        </Stat>
      </Box>
    </Container> 
  )
}

export default SpeedParameters