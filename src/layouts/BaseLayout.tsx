import { Box } from "@chakra-ui/react"
import Navbar from "../components/Navbar"

interface BaseLayoutProps {
  children?: React.ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Box minH="100vh" bgGradient="linear(to-tr, #FFBBA4 27%, #FFECCE 100%)">
      <Navbar />
      {children}
    </Box>
  )
}
