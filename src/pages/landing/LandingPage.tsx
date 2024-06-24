import { Box, Image } from "@chakra-ui/react"
import landingBg from "../../assets/images/landing/background.png"
import LandingHeader from "../../components/landing/LandingHeader"
import vedantaImg from "../../assets/images/landing/vedanta_desika_full.png"
import title from "../../assets/images/landing/title.png"

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
      <Image src={vedantaImg} alt="Vedanta Desika" height="650px" />
      {/* <Image src={title} alt="Vedanta Desika" height="150px" /> */}
    </Box>
  )
}
