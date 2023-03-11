import {
  Container,
  Box,
  Text,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'

import { hoverAnimationCss } from '../../utils/animations'

const AboutSection = () => {
  return (
    <Container
      id={'about'}
      maxW={'container.md'}  
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyItems={'center'}
      >
        <Box 
          lineHeight={{base: '25px', md: '55px'}} 
          px={'25px'} 
          rounded={'5px'} 
          bg={useColorModeValue('#c8e0e8', '#3f5d75')}
          textAlign={'center'}
          css={hoverAnimationCss}
        >
          Speedster - internet connection speed testing application
        </Box>
      </Box>
      <Box pt={{base: '10px', md: '25px'}}>
        <Heading
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          as={'h3'}
          variant={'section-title'}
          ml={{base: '15px', md: '55px'}}
        >
          About
        </Heading>
      </Box>
      <Box 
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyItems={'center'}
      >
        <Text
          ml={{base: '15px', md: '55px'}}
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        >
          Welcome to Speedster, the app that helps you test your internet connection speed quickly and easily.
          With Speedster, you can find out how fast your internet connection is and get accurate results in just a few seconds.
          Our app uses technology to measure your internet speed, and we take into account factors such as
          download speed to give you a comprehensive picture of your internet connection. Whether you're using Wi-Fi or a cellular data connection.
          With Speedster, you can perform speed tests as often as you like and track your internet speeds over time.
          This can be especially helpful if you're experiencing slow internet speeds or want to see how your connection speed changes throughout the day.
          We believe that everyone deserves a fast and reliable internet connection, and that's why we created Speedster.
          Our app is user-friendly, intuitive, and designed to give you the information you need to make informed decisions about your internet connection.
          So why wait? Try Speedster today and see how fast your internet connection really is!
        </Text>
      </Box>
    </Container>
  )
}

export default AboutSection