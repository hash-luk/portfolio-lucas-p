import { VStack,HStack, Heading,Text,useColorModeValue, Flex } from '@chakra-ui/react'
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript, BiLogoTypescript, BiLogoNodejs, BiLogoPhp, BiLogoDocker,BiLogoGit } from "react-icons/bi";
import { GrReactjs, GrMysql } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { SiLaravel } from "react-icons/si";

const TechStack = () => {
  const techs = [
    {
      name: "HTML5",
      nível: "Avançado"
    },
    {
      name: "CSS3",
      nível: "Avançado"
    },
    {
      name: "JavaScript",
      nível: "Avançado"
    },
    {
      name: "TypeScript",
      nível: "Intermediário"
    },
    {
      name: "NodeJS",
      nível: "Intermediário"
    },
    {
      name: "ReactJS",
      nível: "Avançado"
    },
    {
      name: "NextJS",
      nível: "Intermediário"
    },
    {
      name: "PHP",
      nível: "Intermediário"
    },
    {
      name: "MySQL",
      nível: "Intermediário"
    },
    {
      name: "Laravel",
      nível: "Iniciante"
    },
    {
      name: "Docker",
      nível: "Intermediário"
    },
    {
      name: "Git",
      nível: "Avançado"
    },
  ]

  const styleOptions = {
    height: "80vh",
    py: "32px",
    box: {
      height: "200px",
      width: "200px",
      borderColor: useColorModeValue("customBlue.500","customBlue.500"),
      backgGroundColor: useColorModeValue("customBgColors.gray200","customBgColors.gray200"),
      border: "1px solid",
      color: useColorModeValue("grayChateau.200","grayChateau.200"),
      defaultPixels: "8px",
      fontSize: {
        name: "lg",
        level: "md"
      },
      boxShadow: "13px 4px 21px 2px rgba(0,0,0,0.16)",
      hover: {
        '&>.icon': {
          color: useColorModeValue("customBlue.400","customBlue.400"),
        },
        transform: "scale(1.1)"
      },
      transition: "all ease-in-out .2s"
    },

  }

  return (
    <HStack w={"100vw"} backgroundColor={useColorModeValue("customBgColors.gray100", "customBgColors.gray100")} padding={8}>
      <VStack alignItems={"flex-start"} gap={8} id='techstack' maxW={'1220px'} margin={'0 auto'}>
      <Heading as={"h3"}>Conhecimentos</Heading>
      <Flex height={styleOptions.height} wrap={"wrap"} gap={8} justify={"center"} w={"100%"} py={styleOptions.py}>
        {
          techs.map((tech, index) => (
            <VStack key={index} 
              w={styleOptions.box.width} 
              h={styleOptions.box.height}
              backgroundColor={styleOptions.box.backgGroundColor}
              borderRadius={styleOptions.box.defaultPixels}
              justifyContent={"center"}
              gap={styleOptions.box.defaultPixels}
              color={styleOptions.box.color}
              _hover={styleOptions.box.hover}
              transition={styleOptions.box.transition}
              boxShadow={styleOptions.box.boxShadow}
              border={styleOptions.box.border}
              borderColor={styleOptions.box.borderColor}
            >
              <Text as={"span"} fontSize={styleOptions.box.fontSize.name} >{tech.name}</Text>
              {tech.name === "HTML5" && <AiFillHtml5 size={64} className='icon'/>}
              {tech.name === "CSS3" && <BiLogoCss3 size={64}  className='icon'/>}
              {tech.name === "JavaScript" && <BiLogoJavascript size={64}  className='icon'/>}
              {tech.name === "TypeScript" && <BiLogoTypescript size={64}  className='icon'/>}
              {tech.name === "NodeJS" && <BiLogoNodejs size={64}  className='icon'/>}
              {tech.name === "ReactJS" && <GrReactjs size={64}  className='icon'/>}
              {tech.name === "NextJS" && <TbBrandNextjs size={64}  className='icon'/>}
              {tech.name === "PHP" && <BiLogoPhp size={64}  className='icon'/>}
              {tech.name === "MySQL" && <GrMysql size={64}  className='icon'/>}
              {tech.name === "Laravel" && <SiLaravel size={64}  className='icon'/>}
              {tech.name === "Docker" && <BiLogoDocker size={64}  className='icon'/>}
              {tech.name === "Git" && <BiLogoGit size={64}  className='icon'/>}
              <Text as={"span"} fontSize={styleOptions.box.fontSize.level}>{tech.nível}</Text>
            </VStack>
          ))
        }
      </Flex>
      </VStack>
    </HStack>
  );
};

export default TechStack;
