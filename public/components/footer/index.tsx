import { HStack, useColorModeValue, Text, Flex, Link } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Flex
      w={"100vw"}
      height={"80px"}
      backgroundColor={useColorModeValue("customGray.600", "customGray.600")}
    >
      <HStack
        maxW={"1220px"}
        margin={"0 auto"}
        justifyContent={"space-between"}
        flex={1}
      >
        <Text
          as={"p"}
          color={useColorModeValue("grayChateau.200", "grayChateau.200")}
          fontSize={"lg"}
        >
          2023&copy; lucascode.dev - Todos os direitos reservados.
        </Text>
        <HStack gap={8}>
          <Link isExternal href="https://github.com/hash-luk">
            <Text
              color={useColorModeValue("customGray.100", "customGray.100")}
              _hover={{
                color: useColorModeValue("grayChateau.500", "grayChateau.500"),
              }}
            >
              <AiFillGithub size={36} />
            </Text>
          </Link>
          <Link isExternal href="https://linkedin.com/in/lucas-patrick-p">
            <Text
              color={useColorModeValue("customGray.100", "customGray.100")}
              _hover={{
                color: useColorModeValue("customBlue.500", "customBlue.500"),
              }}
            >
              <AiFillLinkedin size={36} />
            </Text>
          </Link>
          {/* <Link href={"#/"}>
                        <Text color={useColorModeValue("customGray.100", "customGray.100")}>
                            <MdEmail size={36}/>
                        </Text>
                    </Link> */}
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Footer;
