import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Head from "./Heading";
import VerticleContent from "./VerticleContent";

const Resume = () => {
  return (
    <>
      <VStack mt={20} w={"90vw"} mx={"auto"} py={8}>  
        <Head
          name="Resume"
          desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
        <HStack>
          <VStack align={"start"} w={"50%"} py={20} gap={0}>
            <Heading fontSize={28} >Sumary</Heading>
            <VerticleContent>
              <Text fontSize={20} fontWeight={600} letterSpacing={3}>
                Brandon Johnson
              </Text>
              <Text>
                Innovative and deadline-driven Graphic Designer with 3+ years of
                experience designing and developing user-centered digital/print
                marketing material from initial concept to final, polished
                deliverable.
              </Text>
              <VStack as="ul" align={"start"} ps={5}>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </VStack>
            </VerticleContent>

            <Heading fontSize={28}>Education</Heading>
              <VerticleContent>
              <Text fontSize={20} fontWeight={600} letterSpacing={3}>
                Master of Fine Arts & Graphic Design
              </Text>
              <Text color={"black"}>2015 - 2016</Text>
              <Text>Rochester Institute of Technology, Rochester, NY</Text>
              <Text>
                Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam
                iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti
                nerada porti sand markend
              </Text>
              </VerticleContent>
              <VerticleContent>
              <Text fontSize={20} fontWeight={600} letterSpacing={3}>
                Bachelor of Fine Arts & Graphic Design
              </Text>
              <Text color={"black"}>2015 - 2016</Text>
              <Text>Rochester Institute of Technology, Rochester, NY</Text>
              <Text>
                Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                reiciendis et quis Eius vel ratione eius unde vitae rerum
                voluptates asperiores voluptatem Earum molestiae consequatur
                neque etlon sader mart dila
              </Text>
              </VerticleContent>
          </VStack>
          {/* right div */}
          <VStack align={"start"} w={"50%"} gap={0}>
            <Heading fontSize={28} >Professional Experience</Heading>
            <VerticleContent>
            <Text fontSize={20} fontWeight={600}>
                Senior graphic design specialist
              </Text>
              <Text color={"black"}>2019-present</Text>
              <Text fontWeight={600}>Experion, New York, NY</Text>
              <VStack as="ul" align={"start"} ps={5}>
                <li>
                  Lead in the design, development, and implementation of the
                  graphic, layout, and production communication materials
                </li>
                <li>
                  Delegate tasks to the 7 members of the design team and provide
                  counsel on all aspects of the project.{" "}
                </li>
                <li>
                  Supervise the assessment of all graphic materials in order to
                  ensure quality and accuracy of the design
                </li>
                <li>
                  Oversee the efficient use of production project budgets
                  ranging from $2,000 - $25,000
                </li>
              </VStack>
            </VerticleContent>
            <VerticleContent>
            <Text fontSize={20} fontWeight={600} mt={4} letterSpacing={3}>
                Graphic design specialist
              </Text>
              <Text color={"black"}>2017-2018</Text>
              <Text fontWeight={600}>
                Stepping Stone Advertising, New York, NY
              </Text>
              <VStack as="ul" align={"start"} ps={5}>
                <li>
                  Developed numerous marketing programs (logos,
                  brochures,infographics, presentations, and advertisements).
                </li>
                <li>
                  Managed up to 5 projects or tasks at a given time while under
                  pressure
                </li>
                <li>
                  Recommended and consulted with clients on the most appropriate
                  graphic design
                </li>
                <li>
                  Created 4+ design presentations and proposals a month for
                  clients and account managers
                </li>
              </VStack>
            </VerticleContent>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};

export default Resume;
