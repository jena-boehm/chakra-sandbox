import { SearchIcon } from "@chakra-ui/icons"
import { Box, Flex, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import { CUIAutoComplete } from "chakra-ui-autocomplete"
import { React, useState } from "react"

const options = [
  { value: "optionOne", label: "Option 1" },
  { value: "optionTwo", label: "Option 2" },
  { value: "optionThree", label: "Option 3" }
]

const FilterSearch = () => {
  const [pickerItems, setPickerItems] = useState(options)
  const [selectedItems, setSelectedItems] = useState([])

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item])
    setSelectedItems((curr) => [...curr, item])
  }

  const handleSelectedItemsChange = (selectedItems) => {
    if(selectedItems) {
      setSelectedItems(selectedItems)
    }
  }

    return (
      <Box className="filter-search">
        <InputGroup size="sm" bg="black" color="white">
          <InputLeftAddon border="none" bg="black">
            <SearchIcon />
          </InputLeftAddon>
          <Input placeholder="Search" size="sm" border="none"/>
        </InputGroup>
        <Flex className="dropdown-container" justify="flex-start" align="flex-start" direction="column">
            <Flex className="dropdown-select" align="flex-start">
              <CUIAutoComplete 
                placeholder="Rarity"
                onCreateItem={handleCreateItem}
                items={pickerItems}
                selectedItems={selectedItems}
                onSelectedItemsChange={(changes) => handleSelectedItemsChange(changes.selectedItems)}
                inputStyleProps={{ bg: "none", color: "white",border: "none"}} 
                toggleButtonStyleProps={{color: "white", bg: "none", width: "fit-content"}}
                tagStyleProps={{color: "white", bg: "none", fontSize: "10px", margin: "0"}}
                listStyleProps={{position: "relative", zIndex: "9999", width: "100%", bg: "white"}}
                labelStyleProps={{height: "0", margin: "0"}}
              />
            </Flex>
          </Flex>
      </Box>
    )
}

export default FilterSearch;
