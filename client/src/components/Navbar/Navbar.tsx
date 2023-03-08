import {
  Container,
  Box,
  Heading,
  Flex,
  Stack,
  Link,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'

import { 
  Logotype, 
  ThemeToggleButton,
  LinkItem,
  CustomMenu  
} from '../index'

import { menuItems } from '../../constants/index'

const Navbar = () => {

  return (
    <Box 
      as={'nav'}
      w={'100%'}
      css={{ backdropFilter: 'blur(10px)' }}
      bg={useColorModeValue('#B1D4E0', '#0C2D48')}
      zIndex={2}
    >
      <Container 
        display={'flex'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'space-between'}
        maxW={'container.lg'}
        p={'2'}
      >
        <Box p={'2'}>
          <Logotype />
        </Box>
        <Box p={'2'} flex={'1'} textAlign={'right'}>
          <ThemeToggleButton />
          <Box ml={2} display={'inline-block'}>
            <CustomMenu items={menuItems} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar