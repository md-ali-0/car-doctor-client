import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Context/AuthContext';
import Router from './Router/Router';
import './index.css';

axios.defaults.withCredentials = true
const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <AuthProvider>
                <RouterProvider router={Router}></RouterProvider>
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
