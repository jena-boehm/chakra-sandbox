import { Flex } from "@chakra-ui/react";
import Buttons from "../components/Buttons";
import FilterSearch from "../components/FilterSearch";
import { Form } from "../components/Form";
import { Slider } from "../components/Slider"

const Home = () => {
  return (
    <Flex 
      className="container" 
      direction="column" 
      align="center" 
      justify="flex-start"
      paddingTop="100px"
    >
      <Buttons />
      <Flex direction={["column", "column", "row"]}>
        <Flex direction="column" align="center" margin="10px">
          <FilterSearch />
          <Slider />
        </Flex>
        <Form />
      </Flex>
    </Flex>
  )
}

export default Home;
