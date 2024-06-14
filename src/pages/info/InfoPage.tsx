import { useParams } from "react-router-dom"
import BaseLayout from "../../layouts/BaseLayout"
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react"
import godaStuti from "../../assets/json/goda_stuti.json"
import InfoTab from "../../components/InfoTab"
import { useState } from "react"
import { Search } from "lucide-react"

export default function InfoPage() {
  const { page_id } = useParams()
  const [searchQuery, setSearchQuery] = useState("")

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
      <Flex
        minH="20"
        bg={"red.400"}
        gap={"2"}
        py={"4"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Heading textAlign={"center"} color="white">
          {page_id
            ?.split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </Heading>
        <InputGroup maxW={"xl"} mx="auto">
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
      </Flex>
      <Flex gap="2" flexDirection={"column"} p="4" alignItems={"center"}>
        {filteredContent.map((item, index) => (
          <InfoTab
            key={index}
            sanskrit={item.sanskrit}
            englishTransliteration={item.english_transliteration}
            englishMeaning={item.english_meaning}
            englishDiacritics={item.english_diacritics}
            kannada={item.kannada}
            audio={""}
          />
        ))}
      </Flex>
    </BaseLayout>
  )
}
