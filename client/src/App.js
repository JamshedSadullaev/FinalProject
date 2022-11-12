import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Auth from "./utils/auth";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
// import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';

import Admin from './pages/admin';
import Footer from './components/Footer/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const token = Auth.loggedIn() ? Auth.getProfile() : null
  console.log(token)
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/admin" 
                element={<Admin />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              
              <Route 
                path="/orderHistory" 
                element={<OrderHistory />} 
              />
             
            </Routes>
          </StoreProvider>
        <Footer/>
        </div>
        
      </Router>
    </ApolloProvider>
  );
}

export default App;
