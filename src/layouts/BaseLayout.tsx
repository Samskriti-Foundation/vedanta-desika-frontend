import { Box } from "@chakra-ui/react";

interface BaseLayoutProps {
  children?: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Box minH = "100vh" bgGradient = "linear(to-tr, #FFBBA4 27%, #FFECCE 100%)">
      {children}
    </Box>
  )
}
