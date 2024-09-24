import { Box, Flex, IconButton, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";

const Carousel = ({
  children,
  showDots = true,
  showArrows = true,
  autoplay = false,
  autoplayInterval = 3000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = React.Children.toArray(children);
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, currentSlide]);

  return (
    <Flex overflow={"hidden"}>
      <Flex
        w={"100%"}
        transform={`translateX(-${currentSlide}00%)`}
        transition="all .5s"
      >
        {slides.map((slide, index) => (
          <Flex
            key={index}
            justify="center"
            align="center"
            flexShrink={0}
            w="full"
            h="full"
          >
            {slide}
          </Flex>
        ))}
      </Flex>
      {showArrows && (
        <>
          <IconButton
            fontSize={40}
            variant={""}
            aria-label="Previous Slide"
            icon={<ChevronLeftIcon />}
            position="absolute"
            top="50%"
            left="10%"
            transform="translateY(-50%)"
            onClick={prevSlide}
            zIndex={1}
          />
          <IconButton
            fontSize={40}
            variant={""}
            aria-label="Next Slide"
            icon={<ChevronRightIcon />}
            position="absolute"
            top="50%"
            right="10%"
            transform="translateY(-50%)"
            onClick={nextSlide}
            zIndex={1}
          />
        </>
      )}
      {showDots && (
        <Flex
          position="absolute"
          bottom="10px"
          w="full"
          justify="center"
          gap={2}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => goToSlide(index)}
              boxSize={4}
              borderRadius="full"
              bg={currentSlide === index ? "gray.800" : "gray.400"}
              _hover={{ bg: currentSlide === index ? "gray.600" : "gray.500" }}
              cursor="pointer"
            />
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default Carousel;
