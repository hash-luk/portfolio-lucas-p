import Image from "next/image";
import { Github, Instagram, Linkedin } from "lucide-react";
import profilePhoto from "../../assets/images/profile-photo.jpg";
import {
  HStack,
  VStack,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Box,
} from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <HStack
      h={"100vh"}
      w={"100vw"}
      id="aboutme"
      paddingX={{ lg: "6", md: "6", sm: "6" }}
    >
      <Box
        h={"full"}
        gap={4}
        maxW={"1220px"}
        margin={"0 auto"}
        w={"full"}
        flexDirection={{ xl: "row", lg: "column", md: "column", sm: "column" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <HStack
          backgroundColor={useColorModeValue(
            "customBgColors.gray100",
            "customBgColors.gray100"
          )}
          px={4}
          py={4}
          borderRadius={8}
          gap={8}
          border={"1px"}
          borderColor={useColorModeValue("customGray.300", "customGray.300")}
        >
          <Image
            src={profilePhoto}
            alt="Foto que ilustra o desenvolvedor Lucas, de terno azul marinho, em um fundo florido, durante um evento"
            width={300}
            height={400}
            loading="lazy"
            style={{ objectFit: "contain" }}
          />
          <VStack
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            h={"full"}
            gap={8}
          >
            <Heading
              as={"h4"}
              fontSize={"lg"}
              color={useColorModeValue("customBlue.400", "customBlue.400")}
              noOfLines={1}
            >
              Sobre mim
            </Heading>
            <Heading as={"h3"} fontSize={"2xl"} noOfLines={1}>
              Lucas Patrick
            </Heading>
            <Text
              as={"p"}
              fontSize={"xl"}
              color={useColorModeValue("customGray.100", "customGray.100")}
              noOfLines={1}
            >
              Desenvolvedor front-end e amante da resolução de problemas
            </Text>
            <Text
              as={"span"}
              fontSize={"lg"}
              color={useColorModeValue("customGray.200", "customGray.200")}
            >
              Olá eu sou Lucas, desenvolvedor web desde 2016. Atualmente
              trabalhando como desenvolvedor front-end e freelancer. Apaixonado
              por tecnologia, inovação, programação e jogos. Meu intuito é
              desenvolver interfaces modernas, visualmente agradáveis e
              acessíveis a todos os usuários.
              <br />
              <br />
              Que tal construirmos algo incrível juntos?
            </Text>
          </VStack>
        </HStack>
        <Box
          w={{ xl: "fit-content", lg: "100%", md: "100%", sm: "100%" }}
          h={{ xl: "472px", lg: "fit-content" }}
          display={"flex"}
          gap={12}
          backgroundColor={useColorModeValue(
            "customBgColors.gray100",
            "customBgColors.gray100"
          )}
          px={8}
          py={4}
          borderRadius={8}
          border={"1px"}
          borderColor={useColorModeValue("customGray.300", "customGray.300")}
          justifyContent={"center"}
          flexDirection={{ xl: "column", lg: "row" }}
        >
          <Link
            href="https://www.github.com/hash-luk"
            isExternal
            color={useColorModeValue("customGray.100", "customGray.100")}
            _hover={{
              color: useColorModeValue("grayChateau.500", "grayChateau.500"),
            }}
            transition={"all ease .2s"}
          >
            <Github size={32} strokeWidth={1} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/lucas-patrick-p"
            isExternal
            color={useColorModeValue("customGray.100", "customGray.100")}
            _hover={{
              color: useColorModeValue("customBlue.500", "customBlue.500"),
            }}
            transition={"all ease .2s"}
          >
            <Linkedin size={32} strokeWidth={1} />
          </Link>
          <Link
            href="https://www.instagram.com/lkc_lucasp/"
            isExternal
            color={useColorModeValue("customGray.100", "customGray.100")}
            _hover={{
              color: useColorModeValue("customPink.500", "customPink.500"),
            }}
            transition={"all ease .2s"}
          >
            <Instagram size={32} strokeWidth={1} />
          </Link>
        </Box>
      </Box>
    </HStack>
  );
};

export default AboutMe;
