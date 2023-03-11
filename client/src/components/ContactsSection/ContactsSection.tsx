import {
  Container,
  Box,
  Heading,
  List,
  ListItem,
  Link,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'

const ContactsSection = () => {
  return (
    <Container id={'contacts'} maxW={'container.md'}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyItems={'center'}
        alignItems={'left'}
        ml={{base: '15px', md: '55px'}}
      >
        <Box>
          <Heading
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            as={'h3'}
            variant={'section-title'}
          >
            Contacts
          </Heading>
        </Box>
        <Box>
          <List>
            <ListItem>
              <Link href='https://github.com/NurkenDamn' target={'_blank'}>
                <Button
                  variant={'ghost'}
                  leftIcon={<IoLogoGithub />}
                  colorScheme={'purple'}
                >
                  @NurkenDamn
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  )
}

export default ContactsSection