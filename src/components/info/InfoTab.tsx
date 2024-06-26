import React from "react"
import {
  Text,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Icon,
} from "@chakra-ui/react"
import { Clapperboard, Headphones, Type } from "lucide-react"

import audioF from "../../assets/audio/goda_stuti_1.mp3"

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
      mx="auto"
      my="4"
    >
      <Tabs variant="soft-rounded" colorScheme="red" align="end">
        <TabList>
          <Tab>
            <Icon as={Type} />
          </Tab>
          <Tab>
            <Icon as={Headphones} />
          </Tab>
          <Tab>
            <Icon as={Clapperboard} />
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel textAlign="center">
            {text === "" ? missing : textWithNewlines(text)}
          </TabPanel>
          <TabPanel>
            <Box display="flex" justifyContent="center">
              <audio controls>
                <source src={audioF} type="audio/mp3" />
              </audio>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box display="flex" justifyContent="center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/KVdQ-VPiSbY"
                title="Goda Stuti"
                allowFullScreen
              />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
