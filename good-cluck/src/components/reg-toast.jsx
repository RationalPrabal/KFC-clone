import { useToast,Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
function ToastExample() {
    const navigate=useNavigate()
    const toast = useToast()
    return (
      <Button
        onClick={() =>{
          toast({
            title: 'Signin/Signup Successfull.',
            description: "You have been looged in.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          navigate("/menu")
        }
    }
      >
    Submit
      </Button>
    )
  }

  export {ToastExample}