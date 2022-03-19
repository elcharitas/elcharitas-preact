import { h } from "preact";
import { Link } from "preact-router/match";

import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    VStack,
    Icon,
    IconButton,
    CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

export default function Gslr() {
    const mobileNav = useDisclosure();

    const SponsorButton = (
        <Box
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            as="a"
            aria-label="Sponsor on Open Collective"
            href={""}
            target="_blank"
            rel="noopener noreferrer"
            bg="gray.50"
            borderWidth="1px"
            borderColor="gray.200"
            px="1em"
            minH="36px"
            rounded="md"
            fontSize="sm"
            color="gray.800"
            outline="0"
            transition="all 0.3s"
            _hover={{
                bg: "gray.100",
                borderColor: "gray.300",
            }}
            _active={{
                borderColor: "gray.200",
            }}
            _focus={{
                boxShadow: "outline",
            }}
            ml={5}
        >
            <Icon as={FaHeart} w="4" h="4" color="red.500" mr="2" />
            <Box as="strong" lineHeight="inherit" fontWeight="semibold">
                Sponsor
            </Box>
        </Box>
    );

    const Items = () => (
        <>
            <Button as={Link} href="/" variant="ghost">
                Home
            </Button>
            <Button variant="ghost">Blog</Button>
            <Button variant="ghost">Github</Button>
            <Button variant="ghost">Twitter</Button>
        </>
    );

    return (
        <chakra.header
            bg="gray.900"
            w="full"
            px={{ base: 2, sm: 4 }}
            py={4}
            shadow="md"
        >
            <Flex alignItems="center" justifyContent="space-between" mx="auto">
                <Flex>
                    <chakra.a
                        href="/"
                        title="Choc Home Page"
                        display="flex"
                        alignItems="center"
                    >
                        elcharitas.dev
                        <VisuallyHidden>elcharitas.dev</VisuallyHidden>
                    </chakra.a>
                    <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                        elcharitas.dev
                    </chakra.h1>
                </Flex>
                <HStack display="flex" alignItems="center" spacing={1}>
                    <HStack
                        spacing={1}
                        mr={1}
                        color="brand.500"
                        display={{ base: "none", md: "inline-flex" }}
                    >
                        <Items />
                    </HStack>
                    <SponsorButton />
                    <Box display={{ base: "inline-flex", md: "none" }}>
                        <IconButton
                            display={{ base: "flex", md: "none" }}
                            aria-label="Open menu"
                            fontSize="20px"
                            color={useColorModeValue("gray.800", "inherit")}
                            variant="ghost"
                            icon={<AiOutlineMenu />}
                            onClick={mobileNav.onOpen}
                        />

                        <VStack
                            pos="absolute"
                            top={0}
                            left={0}
                            right={0}
                            display={mobileNav.isOpen ? "flex" : "none"}
                            flexDirection="column"
                            p={2}
                            pb={4}
                            bg="gray.900"
                            spacing={3}
                            rounded="sm"
                            shadow="sm"
                        >
                            <CloseButton
                                aria-label="Close menu"
                                onClick={mobileNav.onClose}
                            />
                            <Items />
                        </VStack>
                    </Box>
                </HStack>
            </Flex>
        </chakra.header>
    );
}
