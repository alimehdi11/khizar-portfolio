import { Box, Flex, HStack, Heading, Image, Progress, Text, VStack } from "@chakra-ui/react";
import React from "react";

const About = () => {
  let obj = {
    Name: "M.Khizar Abbas",
    Profile: "Frontend Developer",
    Email: "ykhizar65@gmail.com",
    Phone: "03170128852",
  };
  let profile = Object.entries(obj);
  let progressBars = [
    {
      progress: 100,
      name:"HTML",
    },
    {
      progress: 90,
      name:"CSS",
    },
    {
      progress: 75,
      name:"JAVASCRIPT",
    },
    {
      progress: 50,
      name:"REACT'JS",
    },
    
  ]

  return (
    <Flex w={"90vw"}  mx={"auto"} boxShadow="dark-lg" my={16} py={8}>
      <VStack w={"50%"}>
        <HStack alignItems={'start'} gap={10}>
          <Image src="https://sb.kaleidousercontent.com/67418/574x435/74d8ee5821/screenshot_2022-04-25_at_16-00-23-removebg-preview.png" objectFit={'cover'} w={200} h={250} objectPosition={'center -20px'} />
          <VStack gap={5}>
            {profile.map((item, key) => (
              <HStack justify={'start'} key={key} w={'100%'}>
                <Text fontWeight={"bold"} w={"60px"}>{item[0]}:</Text>
                <Text >{item[1]}</Text>
              </HStack>
            ))}
          </VStack>
        </HStack>
        <VStack align={'left'} w={'90%'}>
          <Heading fontSize={22}>Skills</Heading>
              {
                progressBars.map((item,index)=>(
                  <Box key={index}>
                  <HStack justify={'space-between'}>
                    <Text>{item.name}</Text>
                    <Text>{item.progress}%</Text>
                  </HStack>
                  <Progress value={item.progress} />
                   </Box>
                ))
              }
        </VStack>
      </VStack>
      <VStack w={"50%"} align={'start'} gap={7} fontSize={17}>
        <VStack align={'start'}>
          <Heading>About me</Heading>
          <Text w={20} h={"2px"} bg={"blue.400"}></Text>
        </VStack>
        <Text>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. </Text>
        <Text>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.</Text>
        <Text>Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</Text>
      </VStack>
    </Flex>
  );
};

export default About;