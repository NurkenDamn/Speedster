import { Box, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box py={{ base: '15px', md: '35px' }} textAlign={'center'} opacity={0.4} fontSize={'sm'}>
      &copy; {new Date().getFullYear()} Kenes Nurken. All Rights Reserved.
    </Box>
  )
}

export default Footer