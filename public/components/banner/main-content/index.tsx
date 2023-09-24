import {HStack, VStack, Flex, Heading,Text,useColorModeValue, Box, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Typewriter from "typewriter-effect";
import Image from "next/image";
import bannerImage from "../../../assets/images/banner-image.svg";

const BannerContent = () => {
  return (
    <HStack h={"100vh"}>
      <VStack w={"50%"} alignItems={"flex-start"} gap={8}>
        <Heading 
          as={motion.h1} 
          size='4xl' 
          fontWeight={"normal"} 
          w={"full"} 
          fontSize={"3xl"}
        >
            Oi, eu sou o  
            <Text color={useColorModeValue('customBlue.500', 'customBlue.500')} as={"b"}>
              &nbsp;Lucas
            </Text>
        </Heading>
        <Text as={motion.p} color={useColorModeValue('customGray.100', 'customGray.100')} fontSize={"2xl"}>
            Desenvolvedor full-stack
        </Text>
        <Box as={motion.div} 
          h={"fit-content"} w={"full"} 
          py={"2"} fontSize={"1xl"} 
          color={useColorModeValue('customGray.300', 'customGray.300')}
        >
          <Typewriter
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
          href="#aboutme" 
          py={8} px={4} 
          w={"170px"} 
          _hover={{
            backgroundColor:useColorModeValue('customBlue.500', 'customBlue.500'), 
            width: "190px",
          }}
          transition={"all ease .2s"}
        >
          Saiba mais
        </Button>
      </VStack>
      <Flex w={"50%"} justifyContent={"flex-end"}>
        <Image src={bannerImage} alt="Banner image"/>
      </Flex>
    </HStack>
  );
};

export default BannerContent;
