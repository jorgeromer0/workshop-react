import { useState, useEffect } from "react";
import { Heading, Box, Image, Text, Flex, Spacer, Tag, Icon } from "@chakra-ui/react";
import logo from "./assets/logo-spacex.png";
import * as API from "./services/launches";
import { LaunchItem } from "./components/LaunchItem";

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
          <LaunchItem key={launch.flight_number} {...launch} />
        ))}
      </section>
    </>
  );
}

export default App;
