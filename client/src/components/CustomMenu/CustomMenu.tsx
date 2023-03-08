import {
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

export interface CustomMenuProps {
  items: string[]
}

const CustomMenu = ({ items } : CustomMenuProps) => {
  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon />}
        aria-label={'Options'}
        mt={4}
      />
        <MenuList>
          {
            items.map((item) => (
              <MenuItem>
                {item}
              </MenuItem>
            ))
          }
        </MenuList>
    </Menu>
  )
}

export default CustomMenu;