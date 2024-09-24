import { Button, Flex, HStack, VStack } from "@chakra-ui/react";
import Head from "./Heading";
import React, { useEffect, useState } from "react";
import PortfolioCards from "./PortfolioCards";
import { useAppContext } from "../Context/AppContext";

const Portfolio = () => {
  const { projects } = useAppContext();

  const portArr = projects.flatMap((category) =>
    category.data.map((item, itemIndex) => ({
      name: `${category.cat} ${itemIndex + 1}`,
      index: itemIndex,
      ...item,
    }))
  );
  const [active, setActive] = useState("");
  const [temp, setTemp] = useState("all");
  const filterBtns = ["all", "app", "product", "branding", "book"];
  const changeCat = (cat) => {
    setActive("");
    setTemp(cat);
  };

  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => setActive(temp), 100);
    return () => clearTimeout(timeout);
  }, [active]);

  return (
    <>
      <VStack w={"90vw"} mx={"auto"} mt={10}>
        <Head
          name="Portfolio"
          desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
      </VStack>
      <Flex justify={"center"} mt={10}>
        {filterBtns.map((item, idx) => (
          <Button
            key={idx}
            textTransform={"uppercase"}
            fontSize={"17px"}
            fontWeight={"bold"}
            bg={"transparent"}
            color={active === item ? "blue.500" : ""}
            onClick={() => changeCat(item)}
            _hover={{
              color: "blue.500",
            }}
          >
            {item}
          </Button>
        ))}
      </Flex>
      <HStack
        w={"90vw"}
        minH={400}
        pos={"relative"}
        justifyContent={"center"}
        my={5}
        mx={"auto"}
        wrap={"wrap"}
        gap={10}
      >
        {portArr.map((item, idx) => (
          <PortfolioCards key={idx} {...item} activeCat={active} />
        ))}
      </HStack>
    </>
  );
};

export default Portfolio;
