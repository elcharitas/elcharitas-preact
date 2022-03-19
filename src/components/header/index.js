import { h } from "preact";
import { Link } from "preact-router/match";

import {
    chakra,
    Box,
    Flex,
    HStack,
    Button,
    useDisclosure,
    VStack,
    Icon,
    IconButton,
    CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCoffee } from "react-icons/fa";

export default function Header() {
    const mobileNav = useDisclosure();

    const SponsorButton = (
        <Box
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            as="a"
            aria-label="Sponsor on Open Collective"
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
                bg: "gray.50",
                borderColor: "purple.300",
            }}
            _active={{
                borderColor: "purple.800",
            }}
            _focus={{
                boxShadow: "outline",
            }}
            ml={5}
        >
            <Icon as={FaCoffee} w="4" h="4" color="purple" mr="2" />
            <Box as="strong" lineHeight="inherit" fontWeight="semibold">
                Buy me Coffee
            </Box>
        </Box>
    );

    const Items = (
        <Box>
            <Button
                as={Link}
                href="/"
                bg="transparent"
                size="sm"
                _hover={{ color: "purple" }}
            >
                Home
            </Button>
            <Button
                as={Link}
                href="https://blog.elcharitas.dev"
                bg="transparent"
                size="sm"
                _hover={{ color: "purple" }}
            >
                Blog
            </Button>
            <Button
                as={Link}
                href="https://github.com/elcharitas"
                bg="transparent"
                size="sm"
                _hover={{ color: "purple" }}
            >
                Github
            </Button>
            <Button
                as={Link}
                href="https://twitter.com/iamelcharitas"
                bg="transparent"
                size="sm"
                _hover={{ color: "purple" }}
            >
                Twitter
            </Button>
        </Box>
    );

    return (
        <chakra.header
            bg="transparent"
            color="white"
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
                        fontWeight="extrabold"
                    >
                        elcharitas.dev
                    </chakra.a>
                </Flex>
                <HStack display="flex" alignItems="center" spacing={1}>
                    <HStack
                        spacing={1}
                        mr={1}
                        color="brand.500"
                        display={{ base: "none", md: "inline-flex" }}
                    >
                        {Items}
                    </HStack>
                    {SponsorButton}
                    <Box display={{ base: "inline-flex", md: "none" }}>
                        <IconButton
                            display={{ base: "flex", md: "none" }}
                            aria-label="Open menu"
                            fontSize="20px"
                            color={"white"}
                            bg="transparent"
                            _hover={{ color: "purple" }}
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
                            {Items}
                        </VStack>
                    </Box>
                </HStack>
            </Flex>
        </chakra.header>
    );
}
