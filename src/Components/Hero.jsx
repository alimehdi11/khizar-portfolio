import { Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
const Hero = () => {
  const myfun = () => {
    alert("loop completed");
  };
  const [text] = useTypewriter({
    words: [
      "React Developer",
      "Web Designer",
      "Responsive Expert",
      "Backend Developer",
    ],
    loop: true,
  });

  return (
    <>
      <VStack
        h={{base:400,lg:"600px",xl:"90vh"}}
        bg={"black"}
        color={"white"}
        backgroundImage={
          "linear-gradient(to bottom, rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center -103px"}
      >
        <Heading  mt={20} fontSize={"5vw"}>I am M.Khizar Abbas</Heading>
        <Heading>
          {text}
          <Cursor />
        </Heading>
      </VStack>
    </>
  );
};

export default Hero;
