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
} from "@chakra-ui/react"
import godaStuti from "../../assets/json/goda_stuti.json"
import InfoTab from "../../components/InfoTab"
import { useState } from "react"
import { ChevronDownIcon, Search } from "lucide-react"
import Navbar from "../../components/Navbar"

const options = [
  { value: 0, label: "Sanskrit" },
  { value: 1, label: "English Transliteration" },
  { value: 2, label: "English Meaning" },
  { value: 3, label: "English Diacritics" },
  { value: 4, label: "Kannada" },
  { value: 5, label: "Audio" },
]

export default function InfoPage() {
  const { page_id } = useParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedOption, setSelectedOption] = useState({
    value: 0,
    label: "Sanskrit",
  })

  const filteredContent = godaStuti.content.filter(
    (item) =>
      item.sanskrit.includes(searchQuery) ||
      item.english_transliteration.includes(searchQuery) ||
      item.english_meaning.includes(searchQuery) ||
      item.english_diacritics.includes(searchQuery) ||
      item.kannada.includes(searchQuery)
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
          {page_id
            ?.split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </Heading>
        <Flex
          justifyContent={"center"}
          flexDirection={"column"}
          maxW={"md"}
          mx="auto"
          gap={4}
          mt={4}
        >
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
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              color="red.500"
            >
              {selectedOption.label}
            </MenuButton>
            <MenuList>
              {options.map((option) => (
                <MenuItem
                  key={option.value}
                  color={
                    option.value === selectedOption.value ? "red.500" : "black"
                  }
                  onClick={() => setSelectedOption(option)}
                >
                  {option.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Flex
        gap="2"
        flexDirection={"column"}
        p="4"
        alignItems={"center"}
        zIndex={9}
      >
        {filteredContent.map((item, index) => (
          <InfoTab
            key={index}
            sanskrit={item.sanskrit}
            englishTransliteration={item.english_transliteration}
            englishMeaning={item.english_meaning}
            englishDiacritics={item.english_diacritics}
            kannada={item.kannada}
            audio={""}
            selectedTab={selectedOption.value}
            setSelectedTab={setSelectedOption}
            options={options}
          />
        ))}
      </Flex>
    </BaseLayout>
  )
}
