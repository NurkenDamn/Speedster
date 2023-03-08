import { Link, useColorModeValue } from '@chakra-ui/react'

export interface LinkItemProps {
  text: string,
  styles?: object
}

const LinkItem = ({ text, styles } : LinkItemProps) => {
  return (
    <Link
      p={4}
      fontWeight={'normal'}
      color={useColorModeValue('gray.700', 'whiteAlpha.900')}
      {...styles}
    >
      {text}
    </Link>
  )
}

export default LinkItem