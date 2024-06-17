import React from "react"
import { Text, Box } from "@chakra-ui/react"

const textWithNewlines = (text: string) => {
  return (
    <Text>
      {text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </Text>
  )
}

export default function InfoTab({
  text,
  missing,
}: {
  text: string
  missing: string
}) {
  console.log(typeof text)
  return (
    <Box
      bg="white"
      w={"700px"}
      p={"4"}
      borderRadius={"md"}
      textAlign={"center"}
    >
      {text === "" ? missing : textWithNewlines(text)}
    </Box>
  )
}
