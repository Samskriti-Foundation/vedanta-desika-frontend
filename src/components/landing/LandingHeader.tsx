import { Flex, Image } from "@chakra-ui/react"
import leftImg from "../../assets/images/landing/header_left.png"
import centerImg from "../../assets/images/landing/header_center.png"
import rightImg from "../../assets/images/landing/header_right.png"

export default function LandingHeader() {
  const handleRedirect = () => {
    window.open("https://samskritifoundation.org/", "_blank")
    // window.location.href = "https://samskritifoundation.org/" // to open in same page
  }

  return (
    <Flex
      maxWidth="80%"
      mx="auto"
      p="4"
      justifyContent="space-between"
      color="white"
      fontWeight="bold"
    >
      <Image src={leftImg} alt="left-image" height="64px" />
      <Image src={centerImg} alt="title" height="64px" />
      <Image
        src={rightImg}
        alt="logo-sf"
        height="64px"
        onClick={handleRedirect}
        cursor="pointer"
      />
    </Flex>
  )
}
