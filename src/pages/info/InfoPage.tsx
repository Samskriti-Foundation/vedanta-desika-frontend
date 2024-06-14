import { useParams } from "react-router-dom"
import BaseLayout from "../../layouts/BaseLayout"
import { Box, Flex, Heading } from "@chakra-ui/react"
import godaStuti from "../../assets/json/goda_stuti.json"
import InfoTab from "../../components/InfoTab"

export default function InfoPage() {
  const { page_id } = useParams()
  return (
    <BaseLayout>
      <Box h={20} bg={"red.400"} verticalAlign={"middle"}>
        <Heading textAlign={"center"} color="white">
          {page_id
            ?.split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </Heading>
      </Box>
      <Flex gap="2" flexDirection={"column"} p="4" alignItems={"center"}>
        {godaStuti.content.map((item, index) => (
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
