import React, { useEffect } from "react";
import { Box, Icon, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { RxCross1 } from "react-icons/rx";
import { useAppContext } from "../Context/AppContext";
import { useLockBodyScroll } from "react-use";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const LightBox = () => {
  const {
    selectedCategory,
    currentImgIdx,
    closeLightBox,
    nextSlide,
    prevSlide,
  } = useAppContext();

  useLockBodyScroll(selectedCategory !== null);

  const currentImage = selectedCategory?.data?.[currentImgIdx]?.img || "";
  const categoryTitle = selectedCategory
    ? `${selectedCategory.cat} ${currentImgIdx + 1}`
    : "";

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedCategory) return;

      switch (event.key) {
        case "ArrowLeft":
          prevSlide();
          break;
        case "ArrowRight":
          nextSlide();
          break;
        case "Escape":
          closeLightBox();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCategory, prevSlide, nextSlide, closeLightBox]);

  return (
    <VStack
      opacity={selectedCategory ? 1 : 0}
      zIndex={selectedCategory ? 10 : -10}
      transition="opacity .5s ease"
      w={"100%"}
      h={"100%"}
      pos={"fixed"}
      top={0}
      left={0}
      bg={selectedCategory && "rgba(0,0,0,0.9)"}
    >
      <Icon
        pos={"absolute"}
        top={"4%"}
        cursor={"pointer"}
        right={"2%"}
        color={"white"}
        fontSize={23}
        onClick={closeLightBox}
      >
        <RxCross1 />
      </Icon>
      <Box
        w={"55%"}
        h={"100%"}
        bg={"white"}
        transform={`scale(${selectedCategory ? 1 : 0})`}
        transition="transform 0.5s ease"
      >
        <Image
          objectPosition={"center"}
          src={currentImage}
          w={"100%"}
          h={"90%"}
          objectFit={"cover"}
        />
        <Text fontWeight={600} p={4} textTransform={"capitalize"}>
          {categoryTitle}
        </Text>
      </Box>
      {currentImgIdx > 0 && (
        <IconButton
          _hover={{ bgColor: "gray.700" }}
          fontSize={40}
          variant={""}
          aria-label="Previous Slide"
          icon={<ChevronLeftIcon />}
          position="absolute"
          top="50%"
          left="2%"
          color={"white"}
          transform="translateY(-50%)"
          onClick={prevSlide}
          zIndex={1}
          px={2}
          py={7}
        />
      )}
      {currentImgIdx < selectedCategory?.data.length - 1 && (
        <IconButton
          bg={"black"}
          px={2}
          py={7}
          fontSize={40}
          variant={""}
          color={"white"}
          _hover={{ bgColor: "gray.700" }}
          aria-label="Next Slide"
          icon={<ChevronRightIcon />}
          position="absolute"
          top="50%"
          right="2%"
          transform="translateY(-50%)"
          onClick={nextSlide}
          zIndex={1}
        />
      )}
    </VStack>
  );
};

export default LightBox;
