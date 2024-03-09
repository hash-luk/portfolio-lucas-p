import {
  HStack,
  VStack,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Box,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { handleRedirect } from "../../../../utils/functions";
import bannerImage from "../../../assets/images/banner-image.svg";

const BannerContent = () => {
  return (
    <HStack
      h={"100vh"}
      w={"100vw"}
      backgroundColor={useColorModeValue(
        "customBgColors.gray100",
        "customBgColors.gray100"
      )}
      paddingX={{ lg: "6", md: "6", sm: "6", base: "6" }}
    >
      <HStack h={"full"} maxW={"1220px"} margin={"0 auto"} w={"full"}>
        <VStack
          w={{ lg: "50%", md: "100%", sm: "100%", base: "100%" }}
          alignItems={"flex-start"}
          gap={8}
        >
          <Heading
            as={motion.h1}
            size="4xl"
            fontWeight={"normal"}
            w={"full"}
            fontSize={"3xl"}
          >
            Oi, eu sou o
            <Text
              color={useColorModeValue("customBlue.500", "customBlue.500")}
              as={"b"}
            >
              &nbsp;Lucas
            </Text>
          </Heading>
          <Text
            as={motion.p}
            color={useColorModeValue("customGray.100", "customGray.100")}
            fontSize={"2xl"}
          >
            Desenvolvedor front-end
          </Text>
          <Box
            as={motion.div}
            h={"fit-content"}
            w={"full"}
            py={"2"}
            fontSize={"1xl"}
            color={useColorModeValue("customGray.300", "customGray.300")}
          >
            <Typewriter
              options={{
                delay: 90,
              }}
              onInit={(typewriter) =>
                typewriter
                  .typeString(
                    "Ajudando você a construir soluções modernas e performáticas, para destacar seu produto no mercado!"
                  )
                  .pauseFor(4000)
                  .start()
              }
            />
          </Box>
          <Button
            as={"a"}
            href="#"
            onClick={(e: React.MouseEvent<HTMLElement>) =>
              handleRedirect({
                url: "aboutme",
                target: "self",
                eventHandler: e,
              })
            }
            py={8}
            px={4}
            w={{ lg: "170px", md: "100%", sm: "100%", base: "100%" }}
            _hover={{
              backgroundColor: useColorModeValue(
                "customBlue.700",
                "customBlue.700"
              ),
              width: { lg: "200px", md: "100%", sm: "100%", base: "100%" },
            }}
            transition={"all ease .2s"}
            cursor={"pointer"}
          >
            Saiba mais
          </Button>
        </VStack>
        <Flex
          w={"50%"}
          justifyContent={"flex-end"}
          display={{ lg: "flex", md: "none", sm: "none", base: "none" }}
        >
          <Image src={bannerImage} alt="Banner image" />
        </Flex>
      </HStack>
    </HStack>
  );
};

export default BannerContent;
