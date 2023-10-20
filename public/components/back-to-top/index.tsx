import { useEffect, useState } from "react";
import { ChevronUpIcon } from '@chakra-ui/icons';
import { useColorModeValue,Box, Button} from '@chakra-ui/react'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {
        isVisible && (
          <Box
            onClick={scrollToTop}
            position='fixed'
            bottom={{xl: "20px", lg:"95px"}}
            right={{xl:"16px", lg: "10px"}}
            zIndex={3}
            backgroundColor={useColorModeValue("customBlue.500", "customBlue.500")}
            _hover={{
              backgroundColor: useColorModeValue("customBlue.700", "customBlue.700"),
              transform: "scale(1.1)"
            }}
            transition={"all ease-in-out .2s"}
            px={{xl: 2, lg: 1}}
            py={{xl: 2, lg: 1}}
            borderRadius={8}
            cursor={"pointer"}
          >
            <ChevronUpIcon boxSize={16}/>
          </Box>
        )
      }
    </>
  );
};

export default BackToTopButton;
