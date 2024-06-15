import { Box, Flex, Image, Link } from "@chakra-ui/react"
import logo from "../assets/images/logo.png"
import { NavLink, useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <Box bgGradient="linear(to-r, #FFBBA4 27%, #FFECCE 100%)">
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        maxW="7xl"
        mx="auto"
      >
        <Box>
          <Image
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
            _hover={{ cursor: "pointer" }}
          />
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
