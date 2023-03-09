import {
  Container,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react'

const SpeedParameters = () => {
  return (
    <Container
      display={'flex'}
      flexDirection={{ base: 'column', md: 'row' }}
      maxW={'container.md'}
    >
      <Box>
        <CircularProgress 
          value={40} 
          color={'blue.400'}
          size={'95px'}
        >
          <CircularProgressLabel>40%</CircularProgressLabel>
        </CircularProgress>
        <Stat>
          <StatLabel></StatLabel>
          <StatNumber></StatNumber>
          <StatHelpText>
            <StatArrow type='increase' />
          </StatHelpText>
        </Stat>
      </Box>
    </Container> 
  )
}

export default SpeedParameters