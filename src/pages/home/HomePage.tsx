import Background from "../../components/Background"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import TestTree from "../../components/TestTree"
import BaseLayout from "../../layouts/BaseLayout"
import { Flex } from "@chakra-ui/react"

export default function HomePage() {
  return (
    <BaseLayout>
      <Navbar />
      <Header />
      <Flex>
        <TestTree />
        <Background />
      </Flex>
    </BaseLayout>
  )
}
