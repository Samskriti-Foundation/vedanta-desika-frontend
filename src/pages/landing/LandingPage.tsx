import { Box, Image } from "@chakra-ui/react"
import landingBg from "../../assets/images/landing/background.png"
import LandingHeader from "../../components/landing/LandingHeader"
import vedantaImg from "../../assets/images/landing/vedanta_desika_full.png"
import title from "../../assets/images/landing/title.png"
import EnterButton from "../../components/landing/EnterButton"
import { useEffect, useRef } from "react"
import LandingAudio from "../../assets/audio/vedanta_desika_landing.m4a"

export default function LandingPage() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }, [])

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
      <audio ref={audioRef} src={LandingAudio} autoPlay />
      <Image
        src={vedantaImg}
        alt="Vedanta Desika"
        height={{ base: "100vh", xl: "90vh" }}
        position="absolute"
        bottom="0"
      />
      <Image
        src={title}
        alt="Vedanta Desika Title"
        height="250px"
        position="absolute"
        left="50%"
        top="25%"
      />
      <Box position="absolute" bottom="100px" right="0">
        <EnterButton />
      </Box>
    </Box>
  )
}
