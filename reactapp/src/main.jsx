import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme.js'
import { QueryClient, QueryClientProvider, } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </ >
)
