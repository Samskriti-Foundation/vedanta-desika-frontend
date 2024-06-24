import Header from "../../components/home/Header"
import Navbar from "../../components/home/Navbar"
import TestTree from "../../components/tree/TestTree"
import VedantaImage from "../../components/home/VedantaImage"
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
