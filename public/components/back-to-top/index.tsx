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
            bottom='20px'
            right={['16px', '84px']}
            zIndex={3}
            backgroundColor={useColorModeValue("customBlue.500", "customBlue.500")}
            _hover={{
              backgroundColor: useColorModeValue("customBlue.700", "customBlue.700"),
              transform: "scale(1.1)"
            }}
            transition={"all ease-in-out .2s"}
            px={2}
            py={2}
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
