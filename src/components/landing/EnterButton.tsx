import { Flex, Image } from "@chakra-ui/react"
import enter from "../../assets/images/landing/enter.png"
import enterTop from "../../assets/images/landing/enter_top.png"
import enterBottom from "../../assets/images/landing/enter_bottom.png"
import { useNavigate } from "react-router-dom"

export default function EnterButton() {
  const navigate = useNavigate()

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="64px"
    >
      <Image src={enterTop} alt="enter-top" />
      <Image
        src={enter}
        alt="enter-button"
        onClick={() => {
          navigate("/home")
        }}
        cursor="pointer"
      />
      <Image src={enterBottom} alt="enter-bottom" />
    </Flex>
  )
}
