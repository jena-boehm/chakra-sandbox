import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({ 
    // colors: { 
    //     red: "#e60000",
    //     gray: "#acacaf"
    // },
    styles: {
        global: { 
            "html, body": {
                bgGradient: "linear(to-br, #12161c, #2d2d2f)"
            }
        }
    },
    // fonts: {},
    // breakpoints: {},
    // fontSizes: {}, 
    components: {
        Button: { 
            baseStyle: {
                textTransform: "uppercase",
                borderRadius: "none",
                fontWeight: "normal"
            },
            sizes: {
                sm: {
                    fontSize: "12px",
                    height: "30px",
                    width: "100px"
                },
                md: {
                    fontSize: "18px",
                    height: "50px",
                    width: "150px"
                },
                lg: {
                    fontSize: "24px",
                    height: "70px",
                    width: "250px",
                    fontWeight: "bold",
                    clipPath: "polygon(100% 0, 100% 80%, 94% 100%, 0 100%, 0 0)"
                }
            },
            variants: {
                "red-bg": {
                    bg: "#e60000",
                    color: "white"
                },
                "transparent": {
                    bg: "none",
                    color: "gray",
                    _hover: {
                        bg: "#e60000",
                        color: "white"
                    }
                }
            }
        },
        // Input: {
        //     baseStyle: {
        //         field: {
        //             width: "120px"
        //         }
        //     }
        // },
        // Select: {
        //     baseStyle: { 
        //         field: {
        //             bg: "black",
        //             color: "white"
        //         },
        //         icon: {
        //             color: "white",
        //         }
        //     }
        // }
    }
})

export default theme
