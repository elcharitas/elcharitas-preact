import { h } from "preact";
import {
    chakra,
    useColorModeValue,
    Flex,
    Badge,
    SimpleGrid,
} from "@chakra-ui/react";
import Banner from "../../assets/header.jpg";

const Home = () => {
    return (
        <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={0}
            h="100vh"
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            bg={`url(${Banner})`}
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
                    px={3}
                    py={1}
                    mb={3}
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
                    color="whiteAlpha.300"
                    lineHeight="shorter"
                >
                    Blockchain Engineer
                </chakra.h1>
                <chakra.p
                    pr={{ base: 0, lg: 16 }}
                    mb={4}
                    fontSize="sm"
                    color={useColorModeValue("brand.600", "gray.400")}
                    letterSpacing="wider"
                >
                    A design centric software genius
                </chakra.p>
            </Flex>
        </SimpleGrid>
    );
};

export default Home;
