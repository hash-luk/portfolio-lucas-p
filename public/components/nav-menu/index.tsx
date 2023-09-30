'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import Logo from "../../assets/icons/logo.svg"

interface Props {
  children: React.ReactNode,
  href: string
}

type MenuItem = {
  nome: string,
  href: string
}

const links: MenuItem[] = [
  { nome: 'Sobre', href: '#aboutme' },
  { nome: 'Conhecimentos', href: '#techstack' },
  { nome: 'Projetos', href: '#projects' },
];

const NavLink = (props : Props) => {
  const {children, href} = props;

  return(
    <Box 
      as='a' 
      px={2} 
      py={1} 
      rounded={"md"} 
      _hover={{
        textDecoration: 'none',
        color: useColorModeValue('customBlue.600', 'customBlue.500')
      }}
      href={href}
      color={useColorModeValue('customGray.100', 'customGray.100')}
    >
      {children}
    </Box>
  )
}

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return(
    <>
      <Box bg={useColorModeValue('customGray.500', 'customGray.500')} px={4} width={'100vw'}>
        <Flex h={32} alignItems={'center'} justifyContent={'space-between'} maxW={'1220px'} margin={'0 auto'} w={'full'}>
          <HStack spacing={8} alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
            <Box as='a' href={'#'}>
              <Image src={Logo} alt='Logo com formato de tag HTMl em azul formando um L no meio'/>
            </Box>
            <HStack as={'nav'} spacing={12} display={{base: 'none', md:'flex'}}>
              {links.map((item,index) => (
                <NavLink key={index} href={item.href}>{item.nome}</NavLink>
              ))}
            </HStack>
          </HStack>
          <IconButton 
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Abrir menu'}
            display={{md: "none"}}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
        {
          isOpen ? (
            <Flex pb={4} display={{md: 'none'}} justifyContent={'flex-end'} textAlign={'right'}>
              <Stack as={'nav'} spacing={4}>
                {
                  links.map((item,index) => (
                    <NavLink key={index} href={item.href}>{item.nome}</NavLink>
                  ))
                }
              </Stack>
            </Flex>
          ) : null
        }
      </Box>
    </>
  )
}
