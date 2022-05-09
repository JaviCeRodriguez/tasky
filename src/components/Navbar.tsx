import React from 'react';
import {
  Avatar,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
  CheckIcon,
  UnlockIcon,
  LockIcon,
  AtSignIcon,
} from '@chakra-ui/icons';
import useAuth from '../hooks/useAuth';

const Navbar: React.FC = () => {
  const { authUser, signInWithGithub, signOut } = useAuth();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      bg="purple.600"
      h="16"
      px="4"
    >
      <Flex>
        <Heading as="h1" size="lg" color="whiteAlpha.800">
          📝 Tasky
        </Heading>
      </Flex>

      <Flex align="center">
        {authUser ? (
          <Avatar
            name={authUser.user_metadata.name}
            src={authUser.user_metadata.avatar_url}
            mr="4"
          />
        ) : null}
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="white">
            {authUser
              ? `Hola, ${authUser.user_metadata.user_name}`
              : 'Hola! 👋'}
          </MenuButton>
          <MenuList bg="gray.900" color="white" boxShadow="dark-lg">
            {authUser ? (
              <>
                <MenuItem _hover={{ bg: 'white', color: 'gray.900' }}>
                  <AtSignIcon mr="3" />
                  Perfil
                </MenuItem>
                <MenuItem _hover={{ bg: 'white', color: 'gray.900' }}>
                  <CheckIcon mr="3" />
                  Tareas
                </MenuItem>
                <MenuItem
                  _hover={{ bg: 'white', color: 'gray.900' }}
                  onClick={signOut}
                >
                  <UnlockIcon mr="3" />
                  Cerrar sesión
                </MenuItem>
              </>
            ) : (
              <MenuItem
                _hover={{ bg: 'white', color: 'gray.900' }}
                onClick={signInWithGithub}
              >
                <LockIcon mr="3" />
                Iniciar sesión con GitHub
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
