import {
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Link
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

const CustomMenu = () => {
  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon />}
        aria-label={'Options'}
        mt={4}
      />
        <MenuList>
          <Link href={'#about'}>
            <MenuItem>About</MenuItem>
          </Link>
          <Link href={'#contacts'}>
            <MenuItem>Contacts</MenuItem>
          </Link>
        </MenuList>
    </Menu>
  )
}

export default CustomMenu;