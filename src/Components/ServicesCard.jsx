import { Circle, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
const ServicesCard = ({icon,title,desc}) => {

  return (
    <>
      <VStack flexBasis={'350px'} flexGrow={1} maxW={500} align={'start'} bg={'gray.100'} px={8} py={16}>
        <Circle bg={'blue.400'} size={'60px'} color={'white'} fontSize={30}>
            {icon}
        </Circle>
        <Heading fontSize={22}>{title}</Heading>
        <Text>{desc}</Text>
      </VStack>
    </>
  )
}

export default ServicesCard
