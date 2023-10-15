import {
    Component,
    StrictMode
} from 'react';
import {
    ChakraProvider,
} from '@chakra-ui/react'
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import QuestCardsPage from './Components/QuestCardsPage';
import LearnMorePage from './Components/LearnMorePage';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    componentDidMount() {
        this.populateTripData();
    }

    render() {
        return (
            <StrictMode>
                <ChakraProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route exact path="/" element={<QuestCardsPage />} />
                            <Route path="/learnmore/:id" element={<LearnMorePage />} />
                        </Routes>
                    </BrowserRouter>
                    {this.state.loading
                        ? <p><em>Initializing ASP.NET backend...</em></p>
                        : < QuestCardsPage />}
                </ChakraProvider>
            </StrictMode>
        );
    }

    async populateTripData() {
        const response = await fetch('ping');
        await response.json();
        this.setState({ loading: false });
    }
}
