import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import TestTree from "../../components/TestTree"
import VedantaImage from "../../components/VedantaImage"
import BaseLayout from "../../layouts/BaseLayout"
import { Flex } from "@chakra-ui/react"

export default function HomePage() {
  return (
    <BaseLayout>
      <Navbar />
      <Header />
      <Flex>
        <TestTree />
        <VedantaImage />
      </Flex>
    </BaseLayout>
  )
}
