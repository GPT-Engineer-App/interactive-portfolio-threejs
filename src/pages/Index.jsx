import React from "react";
import { Box, Flex, Heading, Text, VStack, HStack, Link, Button, Image, Container, SimpleGrid } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src={imageUrl} alt={`${title} project preview`} />
      <Box p={6}>
        <Heading size="md" my={2}>
          {title}
        </Heading>
        <Text mb={4}>{description}</Text>
        <Button rightIcon={<FaExternalLinkAlt />} as="a" href={projectUrl} target="_blank" colorScheme="teal">
          View Project
        </Button>
      </Box>
    </Box>
  );
};

const Index = () => {
  // Dummy data for the projects, replace with real project info
  const projects = [
    {
      title: "3D Model Showcase",
      description: "An interactive 3D model viewer built with Three.js",
      imageUrl: "https://images.unsplash.com/photo-1621109246687-10ae613f2d8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMG1vZGVsJTIwc2hvd2Nhc2V8ZW58MHx8fHwxNzA4Nzg3ODQ4fDA&ixlib=rb-4.0.3&q=80&w=1080",
      projectUrl: "#",
    },
    // Add other projects here
  ];

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h1">John Doe's Portfolio</Heading>
          <HStack>
            <Link href="https://github.com" isExternal>
              <Button leftIcon={<FaGithub />}>GitHub</Button>
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Button leftIcon={<FaLinkedin />}>LinkedIn</Button>
            </Link>
          </HStack>
        </Flex>

        <Box as="section">
          <Heading as="h2" size="xl" mb={4}>
            Projects
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
