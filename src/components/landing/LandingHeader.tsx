import { Flex, Image } from "@chakra-ui/react"
import leftImg from "../../assets/images/landing/header_left.png"
import centerImg from "../../assets/images/landing/header_center.png"
import rightImg from "../../assets/images/landing/header_right.png"

export default function LandingHeader() {
  return (
    <Flex
      maxWidth="80%"
      mx="auto"
      p="4"
      justifyContent="space-between"
      color="white"
      fontWeight="bold"
    >
      <Image src={leftImg} alt="logo" height="64px" />
      <Image src={centerImg} alt="logo" height="64px" />
      <Image src={rightImg} alt="logo" height="64px" />
    </Flex>
  )
}
