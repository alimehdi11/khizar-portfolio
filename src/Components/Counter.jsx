import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Counter = () => {
  let counters = [
    {
      num: 232,
      name: "client",
    },
    {
      num: 521,
      name: "projects",
    },
    {
      num: 1453,
      name: "Hours Of Support",
    },
    {
      num: 32,
      name: "Awards",
    },
  ];
  return (
    <>
      <HStack
        h={"70vh"}
        color={"white"}
        backgroundImage={
            "linear-gradient(to bottom, rgba(0, 120, 255, 0.5), rgba(0, 120, 255, 0.5)), url(https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHRlYW18ZW58MHx8MHx8fDA%3D)"
          }
        bgSize={"cover"}
        bgPos={"0px -200px"}
      >
        {counters.map((item, idx) => (
          <VStack gap={0} key={idx} flex={1} zIndex={"1"}>
            <Text fontSize={"40px"} fontWeight={"bold"}>
              {item.num}
            </Text>
            <Text fontSize={"20px"} color={"gray.300"}>
              {item.name}
            </Text>
          </VStack>
        ))}
      </HStack>
    </>
  );
};

export default Counter;
