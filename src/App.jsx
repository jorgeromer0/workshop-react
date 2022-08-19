import { useState, useEffect } from "react";
import { Heading, Box, Image, Text, Flex, Spacer, Tag, Icon } from "@chakra-ui/react";
import logo from "./assets/logo-spacex.png";
import * as API from "./services/launches";
import { HiCalendar } from "react-icons/hi";

function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Image src={logo} width="300" m={4} />
      <Heading as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      <section>
        {launches.map((launch) => (
          <Box
            key={launch.flight_number}
            bg="gray.100"
            p={4}
            m={4}
            borderRadius="lg"
          >
            <Flex display="flex">
              <Text fontSize="2x1">
                Mision <strong>{launch.mission_name}</strong> (
                {launch.launch_year})
              </Text>
              <Spacer />

              <Tag
                p="{2}"
                colorScheme={launch.launch_success ? "green" : "red"}
              >
                {launch.launch_success ? "Success" : "Failure"}
              </Tag>
            </Flex>

            <Flex align="center">
              <Icon as={HiCalendar}  color="gray.500" />
              <Text fontSize="sm" ml={1} color="gray.500">
                {launch.launch_date_local.split("T")[0]}
{/* 
                {dayjs(launch.launch_date_local).locale("es").format("D MMMM, YYYY")} */}
              </Text>
            </Flex>
          </Box>
        ))}
      </section>
    </>
  );
}

export default App;
