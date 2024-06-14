import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import TestTree from "../../components/TestTree";
import BaseLayout from "../../layouts/BaseLayout";

export default function HomePage() {
  return (
    <BaseLayout>
      <Navbar/>
      <Header/>
      <TestTree/>
    </BaseLayout>
  )
}
