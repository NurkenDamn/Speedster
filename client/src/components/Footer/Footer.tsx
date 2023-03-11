import { Box } from '@chakra-ui/react'

const Footer = () => {
  
  const getCurrentYear = () => {
    return <>{Date.now}</>
  }
  
  return (
    <Box py={{ base: '15px', md: '35px' }} textAlign={'center'} opacity={0.4} fontSize={'sm'}>
      &copy; {getCurrentYear()} Kenes Nurken. All Rights Reserved.
    </Box>
  )
}

export default Footer