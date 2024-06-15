import { Box, Image } from "@chakra-ui/react"
import header from "../assets/images/header.png"
import title from "../assets/images/title.png"

export default function Header() {
  return (
    <Box position={"relative"}>
      <Image src={header} alt="bg" />
      <Image
        src={title}
        alt="title"
        position={"absolute"}
        transform={"translate(-50%, -50%)"}
        top={"50%"}
        left={"50%"}
      />
    </Box>
  )
}
