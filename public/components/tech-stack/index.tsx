import {
  VStack,
  HStack,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoPhp,
  BiLogoGit,
} from "react-icons/bi";
import { GrReactjs, GrMysql } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { SiLaravel } from "react-icons/si";
import Title from "../title";

const TechStack = () => {
  const techs = [
    {
      name: "HTML5",
      hv_cor: "#e86229",
    },
    {
      name: "CSS3",
      hv_cor: "#358dc9",
    },
    {
      name: "JavaScript",
      hv_cor: "#f3d024",
    },
    {
      name: "TypeScript",

      hv_cor: "#0076c6",
    },
    {
      name: "NodeJS",
      hv_cor: "#6eb351",
    },
    {
      name: "ReactJS",
      hv_cor: "#5ed3f3",
    },
    {
      name: "NextJS",
      hv_cor: "#FFFFFF",
    },
    {
      name: "PHP",
      hv_cor: "#7377ad",
    },
    {
      name: "MySQL",
      hv_cor: "#f09111",
    },
    {
      name: "Git",
      hv_cor: "#f04a2e",
    },
  ];

  const styleOptions = {
    height: {
      xl: "80vh",
      lg: "100%",
      md: "100%",
      sm: "100%",
    },
    py: "32px",
    box: {
      height: "200px",
      width: "200px",
      borderColor: useColorModeValue("customBlue.500", "customBlue.500"),
      backgGroundColor: useColorModeValue(
        "customBgColors.gray200",
        "customBgColors.gray200"
      ),
      border: "1px solid",
      color: useColorModeValue("grayChateau.200", "grayChateau.200"),
      defaultPixels: "8px",
      fontSize: {
        name: "lg",
        level: "md",
      },
      boxShadow: "13px 4px 21px 2px rgba(0,0,0,0.16)",
      hover: {
        ".icon": {
          color: useColorModeValue("customBlue.400", "customBlue.400"),
        },
        transform: "scale(1.1)",
      },
      transition: "all ease-in-out .2s",
    },
  };

  return (
    <HStack
      w={"100vw"}
      h={{ sm: "auto", md: "auto", lg: "80vh" }}
      // minHeight={"100vh"}
      backgroundColor={useColorModeValue(
        "customBgColors.gray100",
        "customBgColors.gray100"
      )}
      padding={8}
      id="techstack"
    >
      <VStack
        alignItems={"flex-start"}
        gap={8}
        maxW={"1220px"}
        margin={"0 auto"}
        w={"full"}
      >
        <Title title="Conhecimentos" />
        <Flex
          height={"100%"}
          wrap={"wrap"}
          gap={8}
          justify={"center"}
          w={"100%"}
          py={styleOptions.py}
        >
          {techs.map((tech, index) => (
            <VStack
              key={index}
              w={styleOptions.box.width}
              h={styleOptions.box.height}
              backgroundColor={styleOptions.box.backgGroundColor}
              borderRadius={styleOptions.box.defaultPixels}
              justifyContent={"center"}
              gap={styleOptions.box.defaultPixels}
              color={styleOptions.box.color}
              _hover={{
                ".icon": {
                  color: tech.hv_cor,
                },
                transform: "scale(1.1)",
              }}
              transition={styleOptions.box.transition}
              boxShadow={styleOptions.box.boxShadow}
              border={styleOptions.box.border}
              borderColor={styleOptions.box.borderColor}
            >
              <Text as={"span"} fontSize={styleOptions.box.fontSize.name}>
                {tech.name}
              </Text>
              {tech.name === "HTML5" && (
                <AiFillHtml5
                  size={64}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
              {tech.name === "CSS3" && (
                <BiLogoCss3
                  size={64}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
              {tech.name === "JavaScript" && (
                <BiLogoJavascript
                  size={64}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
              {tech.name === "TypeScript" && (
                <BiLogoTypescript
                  size={64}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
              {tech.name === "NodeJS" && (
                <BiLogoNodejs
                  size={64}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
              {tech.name === "ReactJS" && (
                <GrReactjs
                  size={64}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
              {tech.name === "NextJS" && (
                <TbBrandNextjs
                  size={64}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
              {tech.name === "PHP" && (
                <BiLogoPhp
                  size={64}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
              {tech.name === "MySQL" && (
                <GrMysql
                  size={64}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
              {tech.name === "Git" && (
                <BiLogoGit
                  size={64}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
            </VStack>
          ))}
        </Flex>
      </VStack>
    </HStack>
  );
};

export default TechStack;
