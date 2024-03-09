"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import { handleRedirect, handleDownload } from "../../../utils/functions";
import Logo from "../../assets/icons/logo.svg";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

interface Props {
  children: React.ReactNode;
  href: string;
}

type MenuItem = {
  nome: string;
  href: string;
};

const links: MenuItem[] = [
  { nome: "Sobre", href: "aboutme" },
  { nome: "Conhecimentos", href: "techstack" },
  { nome: "Projetos", href: "projects" },
  { nome: "Currículo", href: "./assets/docs/Curriculo_Lucas_Patrick.pdf" },
];

const NavLink = ({ children, href }: Props) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      href="#"
      _hover={{
        textDecoration: "none",
        color: useColorModeValue("customBlue.600", "customBlue.500"),
      }}
      color={useColorModeValue("customGray.100", "customGray.100")}
      cursor={"pointer"}
      onClick={(e: React.MouseEvent<HTMLElement>) =>
        children !== "Currículo"
          ? handleRedirect({
              url: href,
              target: "self",
              eventHandler: e,
            })
          : handleDownload(href)
      }
    >
      {children}
    </Box>
  );
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("customGray.500", "customGray.500")}
        px={4}
        width={"100vw"}
        paddingX={{ lg: "6", md: "6", sm: "6", base: "6" }}
      >
        <Flex
          h={32}
          alignItems={"center"}
          justifyContent={"space-between"}
          maxW={"1220px"}
          margin={"0 auto"}
          w={"full"}
        >
          <HStack
            spacing={8}
            alignItems={"center"}
            justifyContent={"space-between"}
            w={"100%"}
          >
            <Box
              as="a"
              href="#"
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault();
                window.location.reload();
              }}
              cursor={"pointer"}
            >
              <Image
                src={Logo}
                alt="Logo com formato de tag HTMl em azul formando um L no meio"
                style={{ borderRadius: "8px" }}
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={12}
              display={{ base: "none", md: "flex" }}
            >
              {links.map((item, index) => (
                <NavLink key={index} href={item.href}>
                  {item.nome}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Abrir menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
        {isOpen ? (
          <Flex
            pb={4}
            display={{ md: "none" }}
            justifyContent={"flex-end"}
            textAlign={"right"}
          >
            <Stack as={"nav"} spacing={4}>
              {links.map((item, index) => (
                <NavLink key={index} href={item.href}>
                  {item.nome}
                </NavLink>
              ))}
            </Stack>
          </Flex>
        ) : null}
      </Box>
    </>
  );
}
