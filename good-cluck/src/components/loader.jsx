import { Spinner,Stack } from '@chakra-ui/react'
const Loader=()=>{
    return  <Stack direction='row' spacing={20} mt="300" ml="300">
    <Spinner  size='xl' color='red'/>
    <Spinner size='xl' color="green" />
    <Spinner size='xl'  color="blue"/>
    <Spinner size='xl' color='orange' />
    <Spinner size='xl'  color='yellow'/>
  </Stack>

}

export default Loader;