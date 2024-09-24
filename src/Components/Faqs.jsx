import { HStack, Heading, Text, VStack, Box } from '@chakra-ui/react'
import React from 'react'
import Accordian from './Accodian'

const Faqs = () => {
  return (
    <>
      <HStack w={'90vw'} mx={'auto'} align={'start'} justify={'space-between'}>
        <VStack w={'25%'} ps={'5vw'} >
            <Heading fontWeight={'2px'}>Frequently Asked <Heading fontWeight={'bold'}>Questions</Heading></Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</Text>
        </VStack>
        <VStack w={'65%'} >
        <Accordian/>
        </VStack>
      </HStack>
    </>
  )
}

export default Faqs
