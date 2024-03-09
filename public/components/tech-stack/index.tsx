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
  BiLogoGit,
} from "react-icons/bi";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { SiStorybook, SiStyledcomponents, SiCypress } from "react-icons/si";
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
      name: "Cypress",
      hv_cor: "#00814D",
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
      name: "Styled-Components",
      hv_cor: "#bf4f74",
    },
    {
      name: "StoryBook",
      hv_cor: "#ff4785",
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
      height: {
        lg: "200px",
        md: "20ppx",
        sm: "116px",
        base: "116px",
      },
      width: {
        lg: "200px",
        md: "200px",
        sm: "95vw",
        base: "95vw",
      },
      borderColor: useColorModeValue("grayChateau.50", "grayChateau.50"),
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
                  color: {
                    lg: tech.hv_cor,
                    base: tech.hv_cor,
                  },
                },
                transform: {
                  lg: "scale(1.1)",
                  base: "scale(1.1)",
                },
                borderColor: {
                  lg: tech.hv_cor,
                  base: tech.hv_cor,
                },
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
                  size={48}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
              {tech.name === "CSS3" && (
                <BiLogoCss3
                  size={48}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
              {tech.name === "JavaScript" && (
                <BiLogoJavascript
                  size={48}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
              {tech.name === "TypeScript" && (
                <BiLogoTypescript
                  size={48}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
              {tech.name === "Cypress" && (
                <SiCypress
                  size={48}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
              {tech.name === "ReactJS" && (
                <GrReactjs
                  size={48}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
              {tech.name === "NextJS" && (
                <TbBrandNextjs
                  size={48}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
              {tech.name === "StoryBook" && (
                <SiStorybook
                  size={48}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
              {tech.name === "Styled-Components" && (
                <SiStyledcomponents
                  size={48}
                  className="icon"
                  style={{ transition: styleOptions.box.transition }}
                />
              )}
              {tech.name === "Git" && (
                <BiLogoGit
                  size={48}
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
