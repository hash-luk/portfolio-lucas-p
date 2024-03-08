import { HStack, useColorModeValue, Text, Flex, Link } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Flex
      w={"100vw"}
      height={{
        lg: "80px",
        md: "80px",
        sm: "fit-content",
        base: "fit-content",
      }}
      backgroundColor={useColorModeValue(
        "customBgColors.gray100",
        "customBgColors.gray100"
      )}
      paddingX={{ lg: "6", md: "6", sm: "6", base: "6" }}
      paddingY={{ sm: "6", base: "6" }}
    >
      <HStack
        maxW={"1220px"}
        margin={"0 auto"}
        justifyContent={"center"}
        flex={1}
        flexDirection={"row"}
      >
        <Text
          as={"p"}
          color={useColorModeValue("grayChateau.200", "grayChateau.200")}
          fontSize={{ lg: "lg", md: "lg", sm: "md", base: "md" }}
        >
          2023&copy; lucascode.dev - Todos os direitos reservados.
        </Text>
      </HStack>
    </Flex>
  );
};

export default Footer;
