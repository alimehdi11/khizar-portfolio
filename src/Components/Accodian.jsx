import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Accordian = () => {
  const faqs = [
    {
      title: " Non consectetur a erat nam at lectus urna duis?",
      desc: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      title: " Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
      desc: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
    },
    {
      title: "Dolor sit amet consectetur adipiscing elit pellentesque?",
      desc: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis",
    },
    {
      title: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
      desc: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
    },
    {
      title: " Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
      desc: "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in",
    },
  ];
 const [active, setActive] = useState(0);
 
  return (
    <>
      <Accordion defaultIndex={[0]} allowMultiple={false} w={"full"}>
      {
        faqs.map((faq, index) => (
        <AccordionItem  p={3} key={index} shadow={'lg'} mb={5}>
          <AccordionButton _hover={{background:"transparent"}} onClick={()=>setActive(index)}>
            <HStack flex="1">
              <Text color={"blue"}>{index + 1}.</Text>
              <Text  color={active == index ? "blue" : ""} >{faq.title}?</Text>
            </HStack>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>{faq.desc}</AccordionPanel>
        </AccordionItem>
        ))
      }
      </Accordion>
    </>
  );
};
export default Accordian;
