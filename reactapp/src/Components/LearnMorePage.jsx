import PropTypes from 'prop-types';
import {
    Box,
    Card,
    CardHeader,
    Center,
    Divider,
    Flex,
    CardBody,
    Heading,
    HStack,
    Image,
    VStack,
    Stack,
    Spacer,
    StackDivider,
    Text,
    Link as ChakraLink,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react'
import {
    GrGroup,
} from "react-icons/gr";
import {
    PiGlobeHemisphereEastLight,
    PiSuitcaseSimple,
} from "react-icons/pi";
import {
    RiFlag2Line,
} from "react-icons/ri";
import {
    useParams,
    Link as ReactRouterLink
} from 'react-router-dom'

import { useQuery } from 'react-query'
import axios from 'axios'

export default function LearnMorePage() {
    async function fetchTrip(id) {
        const response = await axios.get(`/trip?id=${id}`);
        return response.data;
    }
    const routeParams = useParams();
    const id = routeParams.id;

    const { data: trip, error, isError, isLoading } =
        useQuery(['trip', id], () => fetchTrip(id), { keepPreviousData: true })

    return (
            <>
                { isLoading && <div>Loading trip...</div> }
                { isError && <div>Error! {error.message}</div> }
                { trip &&
                    <VStack align="left"
                            borderWidth="0px"
                            direction={{ base: 'column', md: 'row' }}
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            bg="#ededef"
                            padding={4}>
                    <ChakraLink  as={ReactRouterLink} to='/' textDecoration={"underline"} >
                        <Text fontSize="sm" color={'gray.500'}>Go back</Text>
                    </ChakraLink>
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        {trip.title}
                    </Heading>
                    <Heading fontSize={'xs'} fontWeight="semibold" color={'gray.500'}>
                        {trip.subtitle}
                    </Heading><Spacer />
                    <Flex >
                        <Image
                            borderRadius="2xl"
                            objectFit="cover"
                            boxSize="10%"
                            src={`${trip.photourl}`}
                            height="20%"
                            width="60%"
                            background-position="center"
                            background-size="cover"
                            alt="#"
                        /><Spacer/>
                        <Card boxSize="30%" divider={<StackDivider />} borderRadius="2xl">
                            <CardHeader>
                                <Heading size='md' fontWeight="bold">{trip.days} days</Heading>
                                <Text pt='1' size='xs' fontWeight="semibold" color={'gray.500'}> Emissions:
                                    { trip.co2kilograms > 999.99999
                                    ? ` ${(Math.round(trip.co2kilograms / 1000 * 100) / 100).toFixed(1)}t CO₂e`
                                    : ` ${(Math.round(trip.co2kilograms * 100) / 100).toFixed(0)}kg CO₂e` }</Text>
                            </CardHeader>
                            <Center padding="5%">
                                <Divider orientation='horizontal' />
                            </Center>
                            <CardBody>
                                <Stack spacing='4'>
                                    <Box >
                                        <Text pt='1' size='md' fontWeight="semibold" color={'gray.500'}> Countries included: </Text>
                                        <UnorderedList sx={{ 'columns': '2', '-webkit-columns': '2', '-moz-columns': '2' }}>

                                            {trip.countries.map((c, i) =>
                                                <ListItem key={i}>
                                                    <Text pt='1' size='xs' fontWeight="semibold" color={'gray.500'}>{c}</Text>
                                                </ListItem>)}
                                        </UnorderedList>
                                    </Box>
                                 
                                </Stack>
                            </CardBody>
                        </Card>
                    </Flex>
                    <Box height="10%" width="60%" bg="#ededef"><Heading padding='4' fontWeight={600} size="sm" >Overview</Heading>
                        <VStack >
                            <HStack >
                                <VStack>
                                    <Box>
                                        <HStack><RiFlag2Line /><Heading size='sm' fontWeight="semibold" >1st advantage</Heading></HStack>
                                        <HStack gap='7'><Spacer /><Text fontSize='12' pt='1' size='xs' fontWeight="semibold" color={'gray.500'}>{trip.advantages[0]}</Text></HStack>
                                    </Box>
                                </VStack>
                                <VStack>
                                    <Box>
                                        <HStack><PiGlobeHemisphereEastLight /><Heading size='sm' fontWeight="semibold" >2nd advantage</Heading></HStack>
                                        <HStack gap='7'><Spacer /><Text fontSize='12' pt='1' fontWeight="semibold" color={'gray.500'}>{trip.advantages[1]}</Text></HStack>
                                    </Box>
                                </VStack>
                            </HStack>
                            <HStack>
                                <VStack>
                                    <Box>
                                        <HStack><PiSuitcaseSimple /><Heading size='sm' fontWeight="semibold" >3rd advantage</Heading></HStack>
                                        <HStack gap='7'><Spacer /><Text fontSize='12' pt='1' size='xs' fontWeight="semibold" color={'gray.500'}>{trip.advantages[2]}</Text></HStack>
                                    </Box>
                                </VStack>
                                <VStack>
                                    <Box>
                                        <HStack><GrGroup /><Heading size='sm' fontWeight="semibold" >4th advantage</Heading></HStack>
                                        <HStack gap='7'><Spacer /><Text gap='4' fontSize='12' pt='1' size='xs' fontWeight="semibold" color={'gray.500'}>{trip.advantages[3]}</Text></HStack>
                                    </Box>
                                </VStack>
                            </HStack>
                            <Divider color={'gray.800'} orientation='horizontal' />
                            <Text fontSize='12' pt='1' size='xs' fontWeight="semibold" color={'gray.500'}>
                                {trip.description }Lorem ipsum t duiue a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.
                            </Text>
                        </VStack>
                        
                    </Box>
                       

                </VStack>
            }
    </>   
    )

}

LearnMorePage.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.obj
    ),
}