import { Tabs, TabList, TabPanels, Tab, TabPanel, Text } from "@chakra-ui/react"
import React from "react"

const textWithNewlines = (text: string) => {
  return (
    <Text>
      {text.split("\\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </Text>
  )
}

export default function InfoTab({
  sanskrit,
  englishTransliteration,
  englishMeaning,
  englishDiacritics,
  kannada,
  audio,
  selectedTab,
  setSelectedTab,
  options,
}: {
  sanskrit: string
  englishTransliteration: string
  englishMeaning: string
  englishDiacritics: string
  kannada: string
  audio: string
  selectedTab: number
  setSelectedTab: ({ value, label }: { value: number; label: string }) => void
  options: {
    value: number
    label: string
  }[]
}) {
  return (
    <Tabs
      variant="enclosed-colored"
      colorScheme="red"
      bg="white"
      p="4"
      rounded="md"
      maxW={"4xl"}
      index={selectedTab}
      onChange={(index) => setSelectedTab(options[index])}
    >
      <TabList>
        <Tab>Sanskrit</Tab>
        <Tab>English Transliteration</Tab>
        <Tab>English Meaning</Tab>
        <Tab>English Diacritics</Tab>
        <Tab>Kannada</Tab>
        <Tab>Audio</Tab>
      </TabList>
      <TabPanels textAlign={"center"}>
        <TabPanel>{textWithNewlines(sanskrit)}</TabPanel>
        <TabPanel>{textWithNewlines(englishTransliteration)}</TabPanel>
        <TabPanel>{textWithNewlines(englishMeaning)}</TabPanel>
        <TabPanel>{textWithNewlines(englishDiacritics)}</TabPanel>
        <TabPanel>{textWithNewlines(kannada)}</TabPanel>
        <TabPanel>
          <audio controls>
            <source src={audio} type="audio/mpeg" />
          </audio>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
