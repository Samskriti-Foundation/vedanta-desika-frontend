import Header from "../../components/Header"
import TestTree from "../../components/TestTree"
import BaseLayout from "../../layouts/BaseLayout"

export default function HomePage() {
  return (
    <BaseLayout>
      <Header />
      <TestTree />
    </BaseLayout>
  )
}
