import { useParams } from "react-router-dom"
import BaseLayout from "../../layouts/BaseLayout"
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
import data from "../../assets/json/data.json"
import InfoTab from "../../components/InfoTab"
import { useEffect, useState } from "react"
import { ChevronDownIcon, Search } from "lucide-react"
import Navbar from "../../components/Navbar"

const languages = [
  { value: 0, label: "Sanskrit" },
  { value: 1, label: "English" },
  { value: 2, label: "Kannada" },
]

const options = [
  { value: 0, label: "Texts" },
  { value: 1, label: "Meanings" },
]

type Language = "sanskrit" | "english" | "kannada"

type Item = {
  title: string
  texts: { [key in Language]: string }[]
  meanings: { [key in Language]: string }[]
  missing: { [key in Language]: string }
}

export default function InfoPage() {
  const { pageName } = useParams<{ pageName: string }>()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState({
    value: 0,
    label: "Sanskrit",
  })
  const [selectedOption, setSelectedOption] = useState({
    value: 0,
    label: "Texts",
  })

  const [selectedItem, setSelectedItem] = useState<Item>(data[0] as Item)

  useEffect(() => {
    const foundItem =
      data.find((item: Item) => item.title === pageName) || (data[0] as Item)
    setSelectedItem(foundItem)
  }, [pageName])

  const selectedLanguageKey = selectedLanguage.label.toLowerCase() as Language

  const filteredData =
    selectedOption.value === 0
      ? selectedItem.texts.map((text) => text[selectedLanguageKey])
      : selectedItem.meanings.map((meaning) => meaning[selectedLanguageKey])

  const displayedData = filteredData.filter((item) =>
    item.includes(searchQuery)
  )

  return (
    <BaseLayout>
      <Box position="sticky" top={0} zIndex={9999}>
        <Navbar />
      </Box>
      <Flex
        minH="20"
        bg={"red.400"}
        gap={"2"}
        py={"4"}
        flexDirection={"column"}
        justifyContent={"center"}
        position={"sticky"}
        top={68}
        zIndex={10}
      >
        <Heading textAlign={"center"} color="white">
          {pageName
            ?.split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </Heading>
        <VStack maxW={"md"} mx="auto" gap={4} mt={4}>
          <InputGroup mx="auto">
            <Input
              placeholder="Search terms"
              onChange={(e) => setSearchQuery(e.target.value)}
              color={"white"}
              fontWeight={"semibold"}
              variant={"flushed"}
              _placeholder={{ color: "white" }}
              _focusVisible={{ outline: "none" }}
            />
            <InputRightElement pointerEvents="none">
              <Search color={"white"} />
            </InputRightElement>
          </InputGroup>
          <Flex gap={"4"}>
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
                <Tab
                  color="white"
                  _selected={{ border: "none", bg: "white", color: "red.500" }}
                >
                  Texts
                </Tab>
                <Tab
                  color="white"
                  _selected={{ border: "none", bg: "white", color: "red.500" }}
                >
                  Meanings
                </Tab>
              </TabList>
            </Tabs>
          </Flex>
        </VStack>
      </Flex>
      <Flex
        gap="2"
        flexDirection={"column"}
        p="4"
        alignItems={"center"}
        zIndex={9}
      >
        {displayedData.length > 0 ? (
          displayedData.map((item, index) => (
            <InfoTab
              key={index}
              text={item}
              missing={selectedItem.missing[selectedLanguageKey]}
            />
          ))
        ) : (
          <Box>No results found</Box>
        )}
      </Flex>
    </BaseLayout>
  )
}
