import React from 'react'
import Head from './Heading'
import { HStack, VStack } from '@chakra-ui/react'
import ServicesCard from './ServicesCard'
import { TbActivityHeartbeat } from "react-icons/tb";
import { HiSignal } from "react-icons/hi2";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { FaRegSquare } from "react-icons/fa";
import { RiRadioLine } from "react-icons/ri";
import { MdOutlineTextsms } from "react-icons/md";
const serviceCards = [
    {
      icon:  <TbActivityHeartbeat/>,
      title: 'Nesciunt Mete',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora dolorem voluptatem id at corporis amet qui deserunt!'
    },
    {
      icon:  <HiSignal />,
      title: 'Eosle Commodi',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora dolorem voluptatem id at corporis amet qui deserunt!'
    },
    {
      icon:  <PiTelevisionSimpleLight />,
      title: 'Ledo Markt',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora dolorem voluptatem id at corporis amet qui deserunt!'
    },
    {
      icon:  <FaRegSquare />,
      title: 'Asperiores Commodir',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora dolorem voluptatem id at corporis amet qui deserunt!'
    },
    {
      icon:  <RiRadioLine />,
      title: 'Velit Doloremque',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora dolorem voluptatem id at corporis amet qui deserunt!'
    },
    {
      icon:  <MdOutlineTextsms />,
      title: 'Dolori Architecto',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora dolorem voluptatem id at corporis amet qui deserunt!'
    }
]
const Services = () => {
  return (
    <>
      <VStack w={"90vw"} mx={"auto"}>
      <Head
          name="Services"
          desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
        <HStack w={'90vw'} my={10} wrap={'wrap'} justify={'center'}>
            {
                serviceCards.map((card, index) => 
                    <ServicesCard key={index} title={card.title} desc={card.desc} icon={card.icon} />
                )
            }
        </HStack>
        </VStack>
    </>
  )
}

export default Services
