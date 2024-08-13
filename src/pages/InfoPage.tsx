import { useParams } from "react-router-dom"
import BaseLayout from "../layouts/BaseLayout"
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react"
import data from "../assets/json/data.json"
import InfoTab from "../components/info/InfoTab"
import { useEffect, useState } from "react"
import { ChevronDownIcon, Search } from "lucide-react"
import Navbar from "../components/home/Navbar"

const languages = [
  { value: 0, label: "Devanagari" },
  { value: 1, label: "Roman Diacritics" },
  { value: 2, label: "Kannada" },
  { value: 3, label: "Telugu" },
  { value: 4, label: "Tamil" },
]

const options = [
  { value: 0, label: "Texts" },
  { value: 1, label: "Meanings" },
]

type Item = {
  title: string
  names: {
    roman_diacritics: string
    devanagari: string
    kannada: string
    telugu: string
    tamil: string
  }
  texts: {
    devanagari: string
    roman_diacritics: string
    kannada: string
    telugu: string
    tamil: string
  }[]
  meanings: {
    devanagari: string
    roman_diacritics: string
    kannada: string
    telugu: string
    tamil: string
  }[]
  missing: {
    roman_diacritics: string
    devanagari: string
    kannada: string
    telugu: string
    tamil: string
  }
}

type Language =
  | "devanagari"
  | "roman_diacritics"
  | "kannada"
  | "telugu"
  | "tamil"

export default function InfoPage() {
  const { pageName } = useParams<{ pageName: string }>()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [selectedOption, setSelectedOption] = useState(options[0])
  const [selectedItem, setSelectedItem] = useState<Item | undefined>()

  useEffect(() => {
    const foundItem = data.find((item) => item.title === pageName)
    setSelectedItem(foundItem)
  }, [pageName])

  const selectedLanguageKey = selectedLanguage.label
    .toLowerCase()
    .replace(" ", "_") as Language

  const filteredData =
    selectedOption.value === 0
      ? selectedItem?.texts.map((text) => text[selectedLanguageKey])
      : selectedItem?.meanings.map((meaning) => meaning[selectedLanguageKey])

  const displayedData = filteredData?.filter((item) =>
    item.includes(searchQuery)
  )

  return (
    <BaseLayout>
      <Box position="sticky" top={0} zIndex={9999}>
        <Navbar />
      </Box>
      <Flex
        minH="20"
        bg="red.400"
        gap="2"
        py="4"
        flexDirection="column"
        justifyContent="center"
        position="sticky"
        top={68}
        zIndex={10}
      >
        <Heading textAlign="center" color="white">
          {selectedItem?.names[selectedLanguageKey]}
        </Heading>
        <VStack maxW="md" mx="auto" gap={4} mt={4}>
          <InputGroup mx="auto">
            <Input
              placeholder="Search terms"
              onChange={(e) => setSearchQuery(e.target.value)}
              color="white"
              fontWeight="semibold"
              variant="flushed"
              _placeholder={{ color: "white" }}
              _focusVisible={{ outline: "none" }}
            />
            <InputRightElement pointerEvents="none">
              <Search color="white" />
            </InputRightElement>
          </InputGroup>
          <Flex gap="4">
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                color="red.500"
              >
                {selectedLanguage.label}
              </MenuButton>
              <MenuList>
                {languages.map((option) => (
                  <MenuItem
                    key={option.value}
                    color={
                      option.value === selectedLanguage.value
                        ? "red.500"
                        : "black"
                    }
                    onClick={() => setSelectedLanguage(option)}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Tabs
              variant="soft-rounded"
              index={selectedOption.value}
              onChange={(index) => setSelectedOption(options[index])}
            >
              <TabList>
                {options.map((option) => (
                  <Tab
                    key={option.value}
                    color="white"
                    _selected={{
                      border: "none",
                      bg: "white",
                      color: "red.500",
                    }}
                  >
                    {option.label}
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          </Flex>
        </VStack>
      </Flex>
      <Flex gap="2" flexDirection="column" p="4" alignItems="center" zIndex={9}>
        {displayedData && displayedData.length > 0 ? (
          displayedData.map((item, index) => (
            <InfoTab
              key={index}
              text={item}
              missing={selectedItem?.missing[selectedLanguageKey] as string}
              pageName={pageName as string}
              id={index + 1}
            />
          ))
        ) : (
          <Box>No results found</Box>
        )}
      </Flex>
    </BaseLayout>
  )
}
