import { Button, Flex, useBreakpointValue } from "@chakra-ui/react"

const Buttons = () => {
    const variant = useBreakpointValue({ 
        base: "red-bg", 
        md: "transparent", 
        lg: "red-bg" 
      })

    return (
        <Flex 
        className="buttons" 
        direction={["column", "column", "row"]}
        justify="space-between" 
        align="center" 
        w={[300, 400, 600]}
      >
        <Button size="sm" variant={variant}>Small</Button>
        <Button size="md" variant="transparent">Medium</Button>
        <Button size="lg" variant="red-bg">Large</Button>
      </Flex>
    )
}

export default Buttons;
