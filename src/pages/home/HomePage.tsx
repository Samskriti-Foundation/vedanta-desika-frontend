import Header from "../../components/Header"
import TestTree from "../../components/TestTree"
import VedantaImage from "../../components/VedantaImage"
import BaseLayout from "../../layouts/BaseLayout"
import { Flex } from "@chakra-ui/react"

export default function HomePage() {
  return (
    <BaseLayout>
      <Header />
      <Flex>
        <TestTree />
        <VedantaImage />
      </Flex>
    </BaseLayout>
  )
}
