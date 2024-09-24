import { Button, Flex, Link, List } from "@chakra-ui/react";
import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { useBoolean } from "@chakra-ui/react";
const Navbar = () => {
  const [active, { toggle }] = useBoolean();
  let links = [
    {
      path: "",
      name: "Home",
    },
    {
      path: "",
      name: "About",
    },
    {
      path: "",
      name: "Services",
    },
    {
      path: "",
      name: "Portfolio",
    },
    {
      path: "",
      name: "Contact",
    },
  ];
  return (
    <>
      <Flex
        position={"sticky"}
        wrap={"wrap"}
        w={"full"}
        zIndex={2}
        top={0}
        justify={"space-between"}
        px={"5vw"}
        bg={"black"}
        py={8}
        color={"white"}
        align={"center"}
      >
        <Link fontSize={28} fontWeight={"bold"}>
          KhizarDev
        </Link>
        <Button onClick={toggle} hideFrom={"md"}>
          <FaBarsStaggered />
        </Button>

        <Flex
         overflow={'hidden'}
          w={{ base: "full", md: "auto" }}
          position={{ base: "absolute", md: "static" }}
          top={24}
          bg={"black"}
          left={0}
          px={{ base: "5vw", md: "0" }}
          h={{ base: active ? 240 : 0, md: "auto" }}
          transition={".5s linear"}
          as="ul"
          gap={{ base: 4, md: 8 }}
          fontSize={"18px"}
          direction={{ base: "column", md: "row" }}
        >
          {links.map((item, index) => (
            <a key={index} className="link">
              {item.name}
            </a>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
