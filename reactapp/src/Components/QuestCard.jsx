import { Link as ReactRouterLink } from 'react-router-dom'
import {
    Center,
    Box,
    Heading,
    Text,
    Button,
    HStack,
    Spacer,
    Link
} from '@chakra-ui/react';
import {
    StarIcon,
} from '@chakra-ui/icons';

function QuestCard(props) { 
    const co2 = props.co2kilograms > 999.99999
        ? `${(Math.round(props.co2kilograms / 1000 * 100) / 100).toFixed(1)}t CO₂e`
        : `${(Math.round(props.co2kilograms * 100) / 100).toFixed(0)}kg CO₂e`;
    return (
        <Center as='section' h='55vh'>
            <Box height='260px' width='310px' bg='white' p='2.5' borderRadius='lg' boxShadow="2xl" >
                <Box bg='white' p='2' borderRadius='lg'
                    bgImage={`url(${props.photourl}); 
                                height: 100%;
                                width: 100%;
                                background-position: center;
                                background-size: cover;"`} >
                    <Center my='-3'>
                        <Heading my='6' size='sm' color='white' fontWeight='semibold'>
                            {props.title}
                        </Heading>
                    </Center>
                    <Center >
                        <Text my='-2' color='white' fontWeight='normal' fontSize='xs' size='sm' >
                            {`${props.numcountries} countries, ${props.days} days`}
                        </Text>
                    </Center>
                    <Center >
                        <Button as={ReactRouterLink} to={`/learnmore/${props.id}`}
                            my='8' background='#4066bd' color='white'
                            fontWeight='normal' fontSize='small' size='sm' borderRadius='3'>
                            Learn more
                        </Button>
                    </Center>
                    <Center my='5'>
                        <HStack mt='-4' spacing='3' padding='3' backgroundColor='#151a2e'
                            color='white' fontSize='xs' fontWeight='normal' borderRadius='8' width='90%'>
                            <Box>Emissions offset:</Box><Spacer /><Box>{co2}</Box>
                        </HStack>
                    </Center>
                    <Center my='-6'>
                        <HStack mt='3' spacing='3' padding='3' backgroundColor='white'
                            color='white' fontSize='xs' borderRadius='8' width='90%'>
                            <Box color='black' fontWeight='bold'>Trip rating</Box><Spacer />
                            <Box color='black' fontWeight='bold'>
                                {Array(5)
                                    .fill('')
                                    .map((_, i) => (
                                        <StarIcon
                                            key={i}
                                            color={i < props.rating ? 'yellow.400' : 'gray.300'}
                                        />
                                    ))} {props.rating}</Box>
                        </HStack>
                    </Center>
                </Box>
            </Box>
        </Center> 
    );
}

export default QuestCard;