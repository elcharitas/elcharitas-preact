import { h } from "preact";
import { chakra, Flex, Badge, SimpleGrid, Box } from "@chakra-ui/react";
import Banner from "../../assets/header.jpg";
import Particles from "react-tsparticles";

const Home = () => {
    return (
        <>
            <Box
                id="particles"
                as={Particles}
                zIndex={-100}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.3,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 2,
                        },
                    },
                    detectRetina: true,
                }}
            />
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
                bg={`url(${Banner})`}
                zIndex={-100}
            >
                &nbsp;
            </Box>
            <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={0}
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
                        Software{" "}
                        <chakra.span color="purple">Engineer</chakra.span>
                    </chakra.h1>
                    <chakra.p
                        pr={{ base: 0, lg: 16 }}
                        mb={4}
                        fontSize="sm"
                        color={"gray.100"}
                        letterSpacing="wider"
                    >
                        A design centric software genius building amazing
                        cutting edge technologies using Solidity, Rust,
                        JavaScript, Dart and Python. Building products for the
                        web, mobile and the Metaverse.
                    </chakra.p>
                </Flex>
            </SimpleGrid>
        </>
    );
};

export default Home;
