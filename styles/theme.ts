import { extendTheme } from '@chakra-ui/react';
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ["latin"]
})


const Theme =extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true
    },
    colors: {
        customGray: {
            50: '#f2f2f2', 
            100: '#e8e8e8', 
            200: '#c4c4c4', 
            300: '#a1a1a1', 
            400: '#5c5c5c', 
            500: '#151515', 
            600: '#121010', 
            700: '#0f0b0b', 
            800: '#0d0808', 
            900: '#0a0505', 
            950: '#050101'
        },
        customBlue: {
            50: '#f5fcfc', 
            100: '#edfafa', 
            200: '#d5f4f5', 
            300: '#bdeff0', 
            400: '#91e0e3', 
            500: '#66d2d6', 
            600: '#53b9c2', 
            700: '#3a91a1', 
            800: '#256a80', 
            900: '#154a61', 
            950: '#09293d'   
        },
        grayChateau: {
            50: '#f7f9fa', 
            100: '#f5f6f7', 
            200: '#e4e8eb', 
            300: '#d7dce0', 
            400: '#b7bec7', 
            500: '#9ca3af', 
            600: '#7e8a9e', 
            700: '#596785', 
            800: '#374669', 
            900: '#202c4f', 
            950: '#0d1633'
        },
        customBgColors: {
            gray100: "#1f1f1f"
        },
        customPink: {
            500: "#C13584"
        },
        customBackdrop: {
            70: "rgba(0, 0, 0, 0.8)"
        },
        customOrange: {
            300: "#e77f1f"
        }
    },
    fonts: {
        inter: inter.style.fontFamily,
    },
    fontSizes: {
        xs: "0.952rem", //10px
        sm: "1.333rem", //14px
        md: "1.524rem", //16px
        lg: "1.714rem", //18px
        xl: "1.905rem", // 20px
        "1xl": "2.5rem", //25px
        "2xl": "3rem", //30px
        "3xl" : "5rem" // 50px
    },
    breakpoints: {
        base: "0rem",
        sm: "30rem",      // 480px
        md: "48rem",      // 768px
        lg: "62rem",      // 992px
        xl: "80rem",      // 1280px
        "2xl": "96rem",   //1536px
        "3xl": "102rem",    
    },
    styles: {
        global: {
            html: {
                "overflowX" : "hidden !important",
                "scrollBehavior" : "smooth",
                "maxWidth" : "100vw",
                "fontSize" : "62.5%",
            },
            body: {
                "overflow" : "hidden",
                "background" : "customGray.500",
            },
            main: {
                "background" : "transparent",
            },
            h1: {
                "color": "grayChateau.100"
            },
            h2: {
                "color": "grayChateau.100"
            },
            h3: {
                "color": "grayChateau.100"
            },
            h4: {
                "color": "grayChateau.100"
            },
            h5: {
                "color": "grayChateau.100"
            },
            h6: {
                "color": "grayChateau.100"
            },
            a: {
                "fontFamily": "inter",
                "fontSize": "md",
                "fontWeight": "medium"
            },
            box: {
                lg: {
                    padding: "24px"
                }
            }
        }
    },
})


export default Theme;