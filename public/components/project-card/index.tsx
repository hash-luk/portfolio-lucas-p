import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

interface ProjectProps {
  projectName: string;
  projectImage: string;
  techs: Array<string>;
  deployLink: string;
  repoLink: string;
}

export default function ProjectCard(props: ProjectProps) {
  const imgSrc = `/assets/images/projects/${props.projectImage}`;

  return (
    <VStack width={{"sm": "390px", "md": "500px","lg": "500px"}} h={"360"} gap={0}>
      <HStack
        width={{"sm": "390px", "md": "500px","lg": "500px"}}
        minW={"390px"}
        h={"190"}
        position={"relative"}
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
        overflow={"hidden"}
      >
        <Image
          src={imgSrc}
          alt={`Imagem do projeto ${props.projectName}`}
          fill
          style={{ objectFit: "cover",minWidth: "100%" }}
          loading="lazy"
        />
      </HStack>
      <HStack
        w={"full"}
        borderBottomLeftRadius={8}
        borderBottomRightRadius={8}
        padding={8}
        justifyContent={"center"}
        backgroundColor={useColorModeValue(
          "customBgColors.gray100",
          "customBgColors.gray100"
        )}
      >
        <VStack gap={8}>
          <Text
            as={"h5"}
            fontSize={"lg"}
            fontWeight={"bold"}
            color={useColorModeValue(
              "grayChateau.200",
              "grayChateau.200"
            )}
          >
            {props.projectName}
          </Text>
          <HStack>
            {props.techs.map((item, index) => (
              <Text as={"span"} fontSize={"sm"} key={index}>{item} {index != props.techs.length - 1 ? "•" : ""}</Text>
            ))}
          </HStack>
          <HStack gap={8}>
            <Button as={"a"} href={props.deployLink} padding={6}>
              Visualizar na WEB
            </Button>
            <Button as={"a"} href={props.repoLink} padding={6}>
              Visualizar repositório
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
}
