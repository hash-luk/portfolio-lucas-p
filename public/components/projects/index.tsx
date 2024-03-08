import { Flex, Stack } from "@chakra-ui/react";
import { projects } from "utils/data/projects";
import ProjectCard from "../project-card";
import Title from "../title";

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
        <Title title="Projetos" />
        <Flex
          flexWrap={"wrap"}
          w={"full"}
          height={"100%"}
          gap={8}
          justify={"center"}
          paddingTop={"32px"}
          paddingBottom={"32px"}
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
