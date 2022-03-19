import { h } from "preact";
import {
    chakra,
    Box,
    useColorModeValue,
    Flex,
    Badge,
    Input,
    VisuallyHidden,
    SimpleGrid,
    Button,
    InputGroup,
    InputRightElement,
    Image,
} from "@chakra-ui/react";

const Home = () => {
    return (
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
                    color={useColorModeValue("brand.600", "gray.300")}
                    lineHeight="shorter"
                >
                    Blockchain Engineer
                </chakra.h1>
                <chakra.form w="full" mb={6}>
                    <VisuallyHidden>Your Email</VisuallyHidden>
                    <Box display={{ base: "block", lg: "none" }}>
                        <Input
                            size="lg"
                            color="brand.900"
                            type="email"
                            placeholder="Enter your email..."
                            bg="white"
                            required="true"
                        />
                        <Button
                            w="full"
                            mt={2}
                            color="white"
                            variant="solid"
                            colorScheme="brand"
                            size="lg"
                            type="submit"
                        >
                            Support
                        </Button>
                    </Box>
                    <InputGroup
                        size="lg"
                        w="full"
                        display={{ base: "none", lg: "flex" }}
                    >
                        <Input
                            size="lg"
                            color="brand.900"
                            type="email"
                            placeholder="Enter your email..."
                            bg="white"
                            required="true"
                        />
                        <InputRightElement w="auto">
                            <Button
                                color="white"
                                variant="solid"
                                colorScheme="brand"
                                size="lg"
                                type="submit"
                                roundedLeft={0}
                            >
                                Support
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </chakra.form>
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
            <Box>
                <Image
                    src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                    alt="..."
                    fit="cover"
                    w="full"
                    h={{ base: 64, md: "full" }}
                    bg="gray.100"
                    loading="lazy"
                />
            </Box>
        </SimpleGrid>
    );
};

export default Home;
