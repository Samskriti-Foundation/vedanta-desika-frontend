import { Box, Flex, Image, Link } from "@chakra-ui/react"
import logo from "../assets/images/logo.png"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <Box maxW="7xl" mx="auto">
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Image src={logo} alt="logo" />
        </Box>
        <Flex gap={4} fontSize="lg" fontWeight={"semibold"}>
          <Link
            as={NavLink}
            to="/"
            _activeLink={{ color: "red.400" }}
            _hover={{ color: "red.500" }}
          >
            Home
          </Link>
          <Link
            as={NavLink}
            to="/about"
            _activeLink={{ color: "red.400" }}
            _hover={{ color: "red.500" }}
          >
            About
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}
