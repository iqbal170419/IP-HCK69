import React from "react";
import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";

const SortDropdown = () => {
    const sortNameAscending = () => { };
    const sortNameDescending = () => { };
    const sortPriceAscending = () => { };
    const sortPriceDescending = () => { };

    return (
        <Box ml={"12%"}>
            <Menu>
                <MenuButton
                    as={Button}
                    variant="success"
                    id="dropdown-basic2"
                    backgroundColor="#121212"
                    border="none"
                    fontSize="14px"
                    color="#838282"
                >
                    Sort By: New Release
                </MenuButton>

                <MenuList backgroundColor="#121212">
                    <Box>
                        <MenuItem
                            onClick={sortNameAscending}
                            backgroundColor="#121212"
                            color="#838282"
                            _hover={{ bgColor: "#191919" }}
                        >
                            Title: A to Z
                        </MenuItem>
                        <MenuItem
                            onClick={sortNameDescending}
                            backgroundColor="#121212"
                            color="#838282"
                            _hover={{ bgColor: "#191919" }}
                        >
                            Title: Z to A
                        </MenuItem>
                        <MenuItem
                            onClick={sortPriceAscending}
                            backgroundColor="#121212"
                            color="#838282"
                            _hover={{ bgColor: "#191919" }}
                        >
                            Price: High to Low
                        </MenuItem>
                        <MenuItem
                            onClick={sortPriceDescending}
                            backgroundColor="#121212"
                            color="#838282"
                            _hover={{ bgColor: "#191919" }}
                        >
                            Price: Low to High
                        </MenuItem>
                    </Box>
                </MenuList>
            </Menu>
        </Box>
    );
};

export default SortDropdown;
