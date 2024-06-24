import { Box, Flex, Image } from "@chakra-ui/react"
import landingBg from "../../assets/images/landing/background.png"
import LandingHeader from "../../components/landing/LandingHeader"
import vedantaImg from "../../assets/images/landing/vedanta_desika_full.png"
import title from "../../assets/images/landing/title.png"
import EnterButton from "../../components/landing/EnterButton"

export default function LandingPage() {
  return (
    <Box
      bgImage={`url(${landingBg})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minHeight="100vh"
      maxWidth="100vw"
    >
      <LandingHeader />
      <Flex alignItems="center">
        <Image src={vedantaImg} alt="Vedanta Desika" height="600px" />
        <Image
          src={title}
          alt="Vedanta Desika Title"
          height="250px"
          mb="45px"
        />
      </Flex>
      <Box position="absolute" bottom="100px" right="0">
        <EnterButton />
      </Box>
    </Box>
  )
}
