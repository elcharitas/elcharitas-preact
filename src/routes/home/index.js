import { h } from "preact";
import {
  chakra,
  Flex,
  Badge,
  SimpleGrid,
  Box,
  ScaleFade,
} from "@chakra-ui/react";
import PageLayout from "../../components/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <Box
        pos="absolute"
        w="100vw"
        h="100vh"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPos="center"
        bg={`url(${Banner})`}
        zIndex={-100}
      >
        &nbsp;
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={0}
        pt={10}
        _after={{
          bg: "brand.500",
          opacity: 0.25,
          pos: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: -1,
          content: '" "',
        }}
      >
        <ScaleFade initialScale="0.2" in={true}>
          <Flex
            direction="column"
            alignItems="start"
            justifyContent="center"
            px={{ base: 4, lg: 20 }}
            py={35}
          >
            <Badge
              color="white"
              pt={20}
              pb={1}
              variant="solid"
              colorScheme="brand"
              rounded="full"
            >
              Jonathan Irhodia
            </Badge>
            <chakra.h1
              mb={6}
              fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color="white"
              lineHeight="shorter"
            >
              Software <chakra.span color="purple">Engineer</chakra.span>
            </chakra.h1>
            <chakra.p
              pr={{ base: 0, lg: 16 }}
              mb={4}
              fontSize="sm"
              color={"gray.100"}
              letterSpacing="wider"
            >
              A design centric software genius building amazing cutting edge
              technologies using Solidity, Rust, JavaScript, Dart and Python.
              Building products for the web, mobile and the Metaverse.
            </chakra.p>
          </Flex>
        </ScaleFade>
      </SimpleGrid>
    </PageLayout>
  );
};

export default Home;
