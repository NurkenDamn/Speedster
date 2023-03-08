import {
  Link,
  Text,
  Container,
  Image,
  useColorModeValue
} from '@chakra-ui/react'

import logotype from '../../assets/icon.png';

const Logotype = () => {

  return (
    <Container 
      as={'span'}
      alignItems={'center'}
      fontSize={'18px'}
      lineHeight={'20px'}
      padding={'10px'}
      display={'inline-flex'}
      fontWeight={'bold'}
    >
      <Image src={logotype} filter={useColorModeValue('', 'invert(100%)')} />
      <Text
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        fontFamily={'M PLUS Rounded 1c'}
        fontWeight={'bold'}
        ml={'3'}
      >
        Speedster
      </Text>
    </Container>
  )
}

export default Logotype