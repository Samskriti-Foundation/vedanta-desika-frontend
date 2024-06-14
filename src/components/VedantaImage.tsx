import { Box, Image, keyframes } from "@chakra-ui/react"
import vedanta from "../assets/images/vedanta_desika.png"
import bgChakra from "../assets/images/bg_chakra.png"

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export default function VedantaImage() {
  return (
    <Box>
      <Image
        src={vedanta}
        alt="Vedanta Desika"
        position={"absolute"}
        mt={"36"}
        mr={"10"}
        maxW={"400px"}
        maxH={"500px"}
        right={"10"}
        zIndex={2}
        opacity={"0.57"}
      />
      <Image
        src={bgChakra}
        alt="Background Chakra"
        animation={`${rotate} 20s linear infinite`}
        position={"absolute"}
        top={"122px"}
        right={"67px"}
        maxW={"440px"}
        zIndex={1}
        opacity={"0.13"}
      />
    </Box>
  )
}
