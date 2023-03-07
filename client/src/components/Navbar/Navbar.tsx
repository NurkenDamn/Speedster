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
  Image,
  useColorModeValue
} from '@chakra-ui/react'

import Logotype from '../Logotype/Logotype'

import logotype from '../../assets/logo.png'

const Navbar = () => {

  return (
    <Box as={'nav'}>
      <Container display={'flex'}>
        <Box p={'2'}>
          <Logotype />
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar