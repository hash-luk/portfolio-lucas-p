import { Heading, Flex, Stack, Text } from "@chakra-ui/react";
import { projects } from "utils/data/projects";
import ProjectCard from "../project-card";

const Projects = () => {
  return (
    <Stack minH={"100vh"} w={"100vw"} height={"auto"} id="projects">
      <Stack
        h={"auto"}
        maxW={"1220px"}
        gap={8}
        padding={8}
        margin={"0 auto"}
        w={"full"}
      >
        <Heading as={"h3"} fontSize={{ sm: "2xl", base: "2xl" }}>
          Projetos
        </Heading>
        <Flex
          flexWrap={"wrap"}
          w={"full"}
          height={"100%"}
          gap={8}
          justify={"center"}
        >
          {projects.map((item, index) => (
            <ProjectCard
              key={index}
              projectName={item.title}
              projectImage={item.image}
              techs={item.techs}
              deployLink={item.links.deploy}
            />
          ))}
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Projects;
