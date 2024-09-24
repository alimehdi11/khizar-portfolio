import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { GoPaperclip } from "react-icons/go";
import { useAppContext } from "../Context/AppContext";

const PortfolioCards = ({ name, img, desc, index, activeCat, fun }) => {
  const cardCatogery = name.split(" ")[0];
  const conditon = activeCat == cardCatogery || activeCat == "all";
  const { openLightBox } = useAppContext();

  return (
    <>
      <Box
        overflow={"hidden"}
        pos={conditon ? "relative" : "absolute"}
        transform={conditon ? "scaleX(1)" : "scale(0)"}
        opacity={conditon ? 1 : 0}
        flexGrow={1}
        maxW={{ base: "", md: 300 }}
        transition="transform 0.2s ease-in-out"
        flexBasis={260}
        _hover={{
          "& .content": {
            bottom: 10,
          },
        }}
      >
        <Image src={img} alt="" />
        <VStack
          className="content"
          transition={"all .4s"}
          position={"absolute"}
          bottom={"-100%"}
          alignItems={"start"}
          left={5}
          w={"90%"}
          bg={"white"}
          color={"black"}
          opacity={"0.9"}
          px={5}
          py={2}
        >
          <Text textTransform={"uppercase"} fontSize={"20px"}>
            {name}
          </Text>
          <Flex>
            <Text fontSize={"16px"} color={"gray.500"}>
              {desc}
            </Text>
            <Flex pt={2} fontSize={"19px"} color={"gray.500"}>
              <HiMagnifyingGlassPlus
                cursor={"pointer"}
                onClick={() => openLightBox(cardCatogery, index)}
              />
              <GoPaperclip />
            </Flex>
          </Flex>
        </VStack>
      </Box>
    </>
  );
};
export default PortfolioCards;
