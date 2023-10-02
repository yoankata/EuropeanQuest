import PropTypes from 'prop-types';
import {
    SimpleGrid,
} from '@chakra-ui/react';
import QuestCard from './QuestCard';
import { useQuery } from 'react-query'
import axios from 'axios'

export default function QuestCardsPage() {
    async function fetchTrips() {
        const response = await axios.get('/alltrips');
        return response.data;
    }

    const { data: trips, error, isError, isLoading } =
        useQuery('trips', () => fetchTrips(), { keepPreviousData: true })


    return (
        <>
            { isLoading === true && <div>Loading trips...</div> }
            { isError === true && <div>Error! {error.message}</div> }
            { trips && (
                <SimpleGrid bg='#ededef' columns={[1, 2, 3]} spacing={5}>
                    {trips.map(q =>
                        <QuestCard key={q.id}
                            id={q.id}
                            co2kilograms={q.co2kilograms}
                            photourl={q.photourl}
                            title={q.title}
                            numcountries={q.numcountries}
                            days={q.days}
                            rating={q.rating}
                        />)}
                </SimpleGrid>)}
        </>
    );
    }


QuestCardsPage.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.obj
    ),
}