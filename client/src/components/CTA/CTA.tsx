import { Button, Box, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const CTA = () => {
  return (
    <Box textAlign={'center'} py={{ base: '10px', md: '25px' }}>
      <Button
        rightIcon={<ChevronRightIcon />}
        colorScheme={'purple'}
        as={Link}
        href={'#speed'}
      >
        Get Started
      </Button>
    </Box>
  )
}

export default CTA