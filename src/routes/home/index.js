import { h } from "preact";
import { chakra, Flex, Badge, SimpleGrid, Box } from "@chakra-ui/react";
import Banner from "../../assets/header.jpg";

const Home = () => {
    return (
        <>
            <Box
                pos="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgSize="contain"
                bgRepeat="no-repeat"
                bg={`url(${Banner}) center`}
            />
            <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={0}
                pt={80}
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
                <Flex
                    direction="column"
                    alignItems="start"
                    justifyContent="center"
                    px={{ base: 4, lg: 20 }}
                    py={24}
                >
                    <Badge
                        color="white"
                        py={1}
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
                        Blockchain Engineer
                    </chakra.h1>
                    <chakra.p
                        pr={{ base: 0, lg: 16 }}
                        mb={4}
                        fontSize="sm"
                        color={"gray.100"}
                        letterSpacing="wider"
                    >
                        A design centric software genius
                    </chakra.p>
                </Flex>
            </SimpleGrid>
        </>
    );
};

export default Home;
