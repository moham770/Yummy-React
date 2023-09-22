import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'

import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
const  queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
 <QueryClientProvider client={queryClient}>
<App/>
 </QueryClientProvider>
)
