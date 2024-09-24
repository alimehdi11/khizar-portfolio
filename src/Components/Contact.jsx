import {Button, Circle, Flex, HStack, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import Head from './Heading'
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { SlEnvolope } from "react-icons/sl";
import { TbEar } from 'react-icons/tb';
const Contact = () => {
    let arr = [
        {
            icon:<CiLocationOn />,
            title:"Address",
            desc:"A108 Adam Street, New York, NY 535022"
        },
        {
            icon:<IoCallOutline />,
            title:"Call Us",
            desc:"+1 5589 55488 55"
        },
        {
            icon:<SlEnvolope />,
            title:"Email Us",
            desc:"info@example.com"
        },
    ]
  return (
    <>
    <VStack w={"90vw"} mx={"auto"} my={10}>
      <Head
          name="Contact"
          desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
        <HStack shadow={'lg'} gap={3} px={4} py={8} w={'full'} mt={10}>
            {
                arr.map((item,idx)=>(
                    <Flex gap={4} key={idx} flex={1}>
                <Circle color={'blue.500'}  size={'55px'} border={'1px solid blue'} fontSize={28} _hover={{
                    background:"#0d6efd",
                    color:"white",
                    transition:"1s ease",
                    border:"none"
                }}>
                    {item.icon}
                </Circle>
                <VStack gap={0} alignItems={'start'}>
                <Text fontSize={20} fontWeight={'bold'}>{item.title}</Text>
                <Text>{item.desc}</Text>
                </VStack>      
            </Flex>
                ))
            }
            
        </HStack>
        <VStack p={8} shadow={'lg'} w={'90vw'} gap={5} mt={5}>
            <Flex gap={4} w={'full'}>
                <Input type='text' placeholder='Your Name' border={'1px solid gray'}/>
                <Input type='email' placeholder='Your Email' border={'1px solid gray'}/>
            </Flex>
            <Input type='email' placeholder='Your Subject' border={'1px solid gray'}/>
            <Textarea placeholder='Message' border={'1px solid gray'} rows={6}/>
            <Button colorScheme={'blue'} rounded={'30px'} px={8} py={6} _hover={{
                background:"blue.400",
            }}>Send Message</Button>
        </VStack>
      </VStack> 
    </>
  )
}

export default Contact
