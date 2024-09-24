import { Image, Text, VStack,Flex,Icon } from "@chakra-ui/react";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
const ReviewCard = ({ image, name, title, description }) => {
  return (
    <VStack w={'50%'}>
      <Image
        src={image}
        w={"100px"}
        h={"100px"}
        rounded={"full"}
        border={"5px lightblue solid"}
      />
      <Text fontSize={"22px"} fontWeight={"bold"}>
        {name}
      </Text>
      <Text fontSize={"16px"} color={"gray.300"}>
        {title}
      </Text>
      <Flex>
        {[1, 1, 1, 1, 1].map((_, idx) => (
          <IoStarSharp key={idx} color={"gold"} fontSize={"20px"} gap={0} />
        ))}
      </Flex>
      <Text textAlign={"center"}>
        <Icon me={2} fontSize={24} color={"gray.400"}>
          <RiDoubleQuotesL />
        </Icon>
        {description}
        <Icon ml={2} fontSize={24} color={"gray.400"}>
          <RiDoubleQuotesR />
        </Icon>
      </Text>
    </VStack>
  );
};

export default ReviewCard;
