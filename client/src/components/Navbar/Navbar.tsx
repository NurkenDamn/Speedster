import {
  Container,
  Box,
  useColorModeValue
} from '@chakra-ui/react'

import { 
  Logotype, 
  ThemeToggleButton,
  CustomMenu  
} from '../index'

const Navbar = () => {

  return (
    <Box 
      as={'nav'}
      w={'100%'}
      css={{ backdropFilter: 'blur(10px)' }}
      bg={useColorModeValue('#ffffff40', '#20202380')}
      zIndex={2}
      position={'fixed'}
    >
      <Container 
        display={'flex'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'space-between'}
        maxW={'container.lg'}
      >
        <Box p={'2'}>
          <Logotype />
        </Box>
        <Box p={'2'} flex={'1'} textAlign={'right'}>
          <ThemeToggleButton />
          <Box ml={2} display={'inline-block'}>
            <CustomMenu />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar