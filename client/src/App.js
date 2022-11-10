import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import Auth from "../src/utils/Auth";
import Home from '../src/pages/Home';
//import Detail from '../src/pages/Detail';
import NoMatch from '../src/pages/NoMatch';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import Nav from '../src/components/Nav';
//import { StoreProvider } from '../src/utils/GlobalState';
import Success from '../src/pages/Success';
import OrderHistory from '../src/pages/OrderHistory';

// import Admin from '../src/pages/admin';
// import { Concast } from '@apollo/client/utilities';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// function App() {
//   const token = Auth.loggedIn() ? Auth.getProfile() : null
//   console.log(token)
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div>
//           <StoreProvider>
//             <Nav />
//             <Routes>
//               <Route 
//                 path="/" 
//                 element={<Home />} 
//               />
//               <Route 
//                 path="/admin" 
//                 element={<Admin />} 
//               />
//               <Route 
//                 path="/login" 
//                 element={<Login />} 
//               />
//               <Route 
//                 path="/signup" 
//                 element={<Signup />} 
//               />
//               <Route 
//                 path="/success" 
//                 element={<Success />} 
//               />
//               <Route 
//                 path="/orderHistory" 
//                 element={<OrderHistory />} 
//               />
//               <Route 
//                 path="/jacket/:id" 
//                 element={<Detail />} 
//               />
//               <Route 
//                 path="*" 
//                 element={<NoMatch />} 
//               />
//             </Routes>
//           </StoreProvider>
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
// }




function App(){
  return(<>
  <Router>
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
                path="/success" 
                element={<Success />} 
              />
              <Route 
                path="/orderHistory" 
                element={<OrderHistory />} 
              />
              <Route 
                path="/jacket/:id" 
                element={<Detail />} 
              />
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
  </Routes>
</Router>

  </>)
}

export default App;