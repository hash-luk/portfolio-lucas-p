import {
  VStack,
  Heading,
  Text,
  useColorModeValue,
  Flex,
  Stack,
  HStack,
  Box,
  Link,
} from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import spiderProjectImage from "./projects/spider.png";
import devfinance from "./projects/devfinance.png";
import bmw from "./projects/bmw.png";
import netflix from "./projects/netflix.png";
import moveit from "./projects/moveit.png";
import madeireiraMognoProjectImage from "./projects/madeireira.png";

const hoverEffect = {
  "&>img": {
    transform: "scale(1.1)",
  },
  "&>.text-wrapper": {
    transform: "translatey(325px)",
  },
};

const Projects = () => {
  return (
    <Stack minH={"100vh"} w={"100vw"}>
      <Stack h={"auto"} maxW={'1220px'} id="projects" gap={8} padding={8} margin={'0 auto'}>
        <Heading as={"h3"}>Projetos pessoais</Heading>
        <Flex
          flexWrap={"wrap"}
          w={"full"}
          height={"auto"}
          gap={8}
          justify={"center"}
        >
          <Flex>
            <Link
              isExternal
              href="https://github.com/hash-luk/SpiderMan-Home-Page"
            >
              <HStack
                w={"500px"}
                height={"325px"}
                position={"relative"}
                overflow={"hidden"}
                _hover={hoverEffect}
                transition={"all ease-in .2s"}
                borderLeft={"2px"}
                borderColor={useColorModeValue(
                  "customBlue.500",
                  "customBlue.500"
                )}
              >
                <Image
                  src={spiderProjectImage}
                  alt="Imagem de projeto Spiderman lading page"
                  loading="lazy"
                  style={{ transition: "all ease-in .2s" }}
                />
                <VStack
                  className="text-wrapper"
                  position={"absolute"}
                  zIndex={"2"}
                  w={"full"}
                  h={"full"}
                  justifyContent={"center"}
                  bg="customBackdrop.70"
                  backdropFilter="auto"
                  backdropBlur="1px"
                  transition={"all ease-in-out .4s"}
                >
                  <Heading as={"h6"}>
                    Spider-Man Miles Morales - Landing Page
                  </Heading>
                  <Box>
                    <HStack
                      color={useColorModeValue(
                        "grayChateau.100",
                        "grayChateau.100"
                      )}
                      fontSize={"md"}
                      gap={4}
                    >
                      <Text>JavaScript</Text>
                      <GoDotFill color="#e77f1f" />
                      <Text>HTML5</Text>
                      <GoDotFill color="#e77f1f" />
                      <Text>SASS</Text>
                      <GoDotFill color="#e77f1f" />
                      <Text>JQuery</Text>
                      <GoDotFill color="#e77f1f" />
                      <Text>Tilt.js</Text>
                    </HStack>
                  </Box>
                </VStack>
              </HStack>
            </Link>
          </Flex>
          <Flex>
            <Link isExternal href="https://github.com/hash-luk/Move.it">
              <HStack
                w={"500px"}
                height={"325px"}
                position={"relative"}
                overflow={"hidden"}
                _hover={hoverEffect}
                transition={"all ease-in .2s"}
                borderLeft={"2px"}
                borderColor={useColorModeValue(
                  "customBlue.500",
                  "customBlue.500"
                )}
              >
                <Image
                  src={moveit}
                  alt="Imagem de projeto MoveIT"
                  loading="lazy"
                  style={{ transition: "all ease-in .2s" }}
                />
                <VStack
                  className="text-wrapper"
                  position={"absolute"}
                  zIndex={"2"}
                  w={"full"}
                  h={"full"}
                  justifyContent={"center"}
                  bg="customBackdrop.70"
                  backdropFilter="auto"
                  backdropBlur="1px"
                  transition={"all ease-in-out .4s"}
                >
                  <Heading as={"h6"}>MoveIT</Heading>
                  <Box>
                    <HStack
                      color={useColorModeValue(
                        "grayChateau.100",
                        "grayChateau.100"
                      )}
                      fontSize={"md"}
                      gap={4}
                    >
                      <Text>NextJS</Text>
                      <GoDotFill color="#5965e0" />
                      <Text>TypeScript</Text>
                      <GoDotFill color="#5965e0" />
                      <Text>Firebase</Text>
                      <GoDotFill color="#5965e0" />
                      <Text>CSS Modular</Text>
                    </HStack>
                  </Box>
                </VStack>
              </HStack>
            </Link>
          </Flex>
          <Flex>
            <Link isExternal href="https://github.com/hash-luk/Dev-Finance">
              <HStack
                w={"500px"}
                height={"325px"}
                position={"relative"}
                overflow={"hidden"}
                _hover={hoverEffect}
                transition={"all ease-in .2s"}
                borderLeft={"2px"}
                borderColor={useColorModeValue(
                  "customBlue.500",
                  "customBlue.500"
                )}
              >
                <Image
                  src={devfinance}
                  alt="Imagem de projeto MoveIT"
                  loading="lazy"
                  style={{ transition: "all ease-in .2s" }}
                />
                <VStack
                  className="text-wrapper"
                  position={"absolute"}
                  zIndex={"2"}
                  w={"full"}
                  h={"full"}
                  justifyContent={"center"}
                  bg="customBackdrop.70"
                  backdropFilter="auto"
                  backdropBlur="1px"
                  transition={"all ease-in-out .4s"}
                >
                  <Heading as={"h6"}>DevFinance</Heading>
                  <Box>
                    <HStack
                      color={useColorModeValue(
                        "grayChateau.100",
                        "grayChateau.100"
                      )}
                      fontSize={"md"}
                      gap={4}
                    >
                      <Text>JavaScript</Text>
                      <GoDotFill color="#49aa26" />
                      <Text>HTML</Text>
                      <GoDotFill color="#49aa26" />
                      <Text>SASS</Text>
                      <GoDotFill color="#49aa26" />
                      <Text>JQuery</Text>
                    </HStack>
                  </Box>
                </VStack>
              </HStack>
            </Link>
          </Flex>
          <Flex>
            <Link isExternal href="https://github.com/hash-luk/BMW-Project">
              <HStack
                w={"500px"}
                height={"325px"}
                position={"relative"}
                overflow={"hidden"}
                _hover={hoverEffect}
                transition={"all ease-in .2s"}
                borderLeft={"2px"}
                borderColor={useColorModeValue(
                  "customBlue.500",
                  "customBlue.500"
                )}
              >
                <Image
                  src={bmw}
                  alt="Imagem de projeto Bmw home page"
                  loading="lazy"
                  style={{ transition: "all ease-in .2s" }}
                />
                <VStack
                  className="text-wrapper"
                  position={"absolute"}
                  zIndex={"2"}
                  w={"full"}
                  h={"full"}
                  justifyContent={"center"}
                  bg="customBackdrop.70"
                  backdropFilter="auto"
                  backdropBlur="1px"
                  transition={"all ease-in-out .4s"}
                >
                  <Heading as={"h6"}>BMW - Home Page</Heading>
                  <Box>
                    <HStack
                      color={useColorModeValue(
                        "grayChateau.100",
                        "grayChateau.100"
                      )}
                      fontSize={"md"}
                      gap={4}
                    >
                      <Text>HTML</Text>
                      <GoDotFill color="#1c69d4" />
                      <Text>CSS</Text>
                      <GoDotFill color="#1c69d4" />
                      <Text>JavaScript</Text>
                      <GoDotFill color="#1c69d4" />
                      <Text>SASS</Text>
                      <GoDotFill color="#1c69d4" />
                      <Text>NodeJS</Text>
                    </HStack>
                  </Box>
                </VStack>
              </HStack>
            </Link>
          </Flex>
          <Flex>
            <Link
              isExternal
              href="https://github.com/hash-luk/Netflix-UI-Clone"
            >
              <HStack
                w={"500px"}
                height={"325px"}
                position={"relative"}
                overflow={"hidden"}
                _hover={hoverEffect}
                transition={"all ease-in .2s"}
                borderLeft={"2px"}
                borderColor={useColorModeValue(
                  "customBlue.500",
                  "customBlue.500"
                )}
              >
                <Image
                  src={netflix}
                  alt="Imagem de projeto Netflix UI Clone"
                  loading="lazy"
                  style={{ transition: "all ease-in .2s" }}
                />
                <VStack
                  className="text-wrapper"
                  position={"absolute"}
                  zIndex={"2"}
                  w={"full"}
                  h={"full"}
                  justifyContent={"center"}
                  bg="customBackdrop.70"
                  backdropFilter="auto"
                  backdropBlur="1px"
                  transition={"all ease-in-out .4s"}
                >
                  <Heading as={"h6"}>Netflix UI CLone</Heading>
                  <Box>
                    <HStack
                      color={useColorModeValue(
                        "grayChateau.100",
                        "grayChateau.100"
                      )}
                      fontSize={"md"}
                      gap={4}
                    >
                      <Text>React</Text>
                      <GoDotFill color="#E50914" />
                      <Text>MaterialUI</Text>
                      <GoDotFill color="#E50914" />
                      <Text>JavaScript</Text>
                      <GoDotFill color="#E50914" />
                      <Text>TMDB API</Text>
                      <GoDotFill color="#E50914" />
                      <Text>NodeJS</Text>
                    </HStack>
                  </Box>
                </VStack>
              </HStack>
            </Link>
          </Flex>
          <Flex>
            <Link
              isExternal
              href="https://github.com/hash-luk/madeireira-mogno"
            >
              <HStack
                w={"500px"}
                height={"325px"}
                position={"relative"}
                overflow={"hidden"}
                _hover={hoverEffect}
                transition={"all ease-in .2s"}
                borderLeft={"2px"}
                borderColor={useColorModeValue(
                  "customBlue.500",
                  "customBlue.500"
                )}
              >
                <Image
                  src={madeireiraMognoProjectImage}
                  alt="Imagem de projeto Netflix UI Clone"
                  loading="lazy"
                  style={{ transition: "all ease-in .2s" }}
                />
                <VStack
                  className="text-wrapper"
                  position={"absolute"}
                  zIndex={"2"}
                  w={"full"}
                  h={"full"}
                  justifyContent={"center"}
                  bg="customBackdrop.70"
                  backdropFilter="auto"
                  backdropBlur="1px"
                  transition={"all ease-in-out .4s"}
                >
                  <Heading as={"h6"}>Madeireira Mogno</Heading>
                  <Box>
                    <HStack
                      color={useColorModeValue(
                        "grayChateau.100",
                        "grayChateau.100"
                      )}
                      fontSize={"md"}
                      gap={4}
                    >
                      <Text>React</Text>
                      <GoDotFill color="#77c91e" />
                      <Text>TypeScript</Text>
                      <GoDotFill color="#77c91e" />
                      <Text>NodeJS</Text>
                      <GoDotFill color="#77c91e" />
                      <Text>Framer Motion</Text>
                      <GoDotFill color="#77c91e" />
                      <Text>Twilio</Text>
                    </HStack>
                  </Box>
                </VStack>
              </HStack>
            </Link>
          </Flex>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Projects;
