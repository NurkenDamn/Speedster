import {
  Container,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText
} from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'

export interface SpeedParametersProps {
  speed: number
}

const SpeedParameters = ({ speed } : SpeedParametersProps) => {
  
  return (
    <Container
      display={'flex'}
      flexDirection={{ base: 'column', md: 'row' }}
      maxW={'container.lg'}
    >
      <Box>
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