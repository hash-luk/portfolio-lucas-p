import {
  Button,
  HStack,
  Text,
  VStack,
  useColorModeValue,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsArrowsAngleExpand } from "react-icons/bs";

interface ProjectProps {
  projectName: string;
  projectImage: string;
  techs: Array<string>;
  deployLink?: string;
}

export default function ProjectCard(props: ProjectProps) {
  const imgSrc = `/assets/images/projects/${props.projectImage}`;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <VStack
        width={{ sm: "390px", md: "500px", lg: "500px" }}
        h={"360"}
        gap={0}
      >
        <HStack
          width={{ sm: "390px", md: "500px", lg: "500px" }}
          minW={"100%"}
          h={"190"}
          position={"relative"}
          borderTopLeftRadius={8}
          borderTopRightRadius={8}
          overflow={"hidden"}
          role="group"
          cursor={"pointer"}
          onClick={onOpen}
        >
          <Image
            src={imgSrc}
            alt={`Imagem do projeto ${props.projectName}`}
            style={{ objectFit: "cover", minWidth: "100%" }}
            loading="lazy"
            transition={"all ease .2s"}
            _groupHover={{
              transform: {
                lg: "scale(1.1)",
                md: "scale(1.1)",
              },
            }}
          />
          <Stack
            position={"absolute"}
            width={"full"}
            alignItems={"center"}
            justifyContent={"center"}
            backgroundColor={"blackAlpha.800"}
            height={"full"}
            className="hoverImageOverlay"
            opacity={"0"}
            _groupHover={{
              opacity: {
                lg: "1",
                md: "1",
              },
            }}
            transition={"all ease .3s"}
          >
            <BsArrowsAngleExpand size={"56"} />
          </Stack>
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
          height={!props.deployLink ? 156 : ""}
        >
          <VStack gap={8}>
            <Text
              as={"h5"}
              fontSize={"lg"}
              fontWeight={"bold"}
              color={useColorModeValue("grayChateau.200", "grayChateau.200")}
            >
              {props.projectName}
            </Text>
            <HStack>
              {props.techs.map((item, index) => (
                <Text as={"span"} fontSize={"sm"} key={index}>
                  {item} {index != props.techs.length - 1 ? "•" : ""}
                </Text>
              ))}
            </HStack>
            <HStack gap={8}>
              {props.deployLink && (
                <Button
                  as={"a"}
                  href={props.deployLink}
                  target="blank"
                  padding={6}
                  gap={4}
                  alignItems={"center"}
                  justifyContent={"center"}
                  _hover={{
                    backgroundColor: useColorModeValue(
                      "customBlue.700",
                      "customBlue.700"
                    ),
                  }}
                >
                  Visualizar <ExternalLinkIcon boxSize={8} />
                </Button>
              )}
            </HStack>
          </VStack>
        </HStack>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"80vw"} margin={"auto"}>
          <ModalCloseButton
            size={{ lg: "lg", md: "md", sm: "sm", base: "sm" }}
            backgroundColor={"#000"}
            padding={{ lg: "8", md: "8", sm: "4", base: "4" }}
          />
          <Image
            width={"full"}
            height={"auto"}
            maxHeight={"900px"}
            src={imgSrc}
          />
        </ModalContent>
      </Modal>
    </>
  );
}
