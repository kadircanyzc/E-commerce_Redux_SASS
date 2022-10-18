import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Layout from './components/Layout';
import Login from './components/Login';

function App() {
  const cart = useSelector(state => state.cart);
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  useEffect(() => {

    const sendRequest = async () => {
     
      const res = await fetch('https://redux-http-8218a-default-rtdb.firebaseio.com/cartItems.json', {
        method: "PUT",
        body: JSON.stringify(cart),

      });
      const data = await res.json();
    };
    sendRequest();


  }, [cart]);
  return (
    <div>
      {!isLoggedIn && <Login />}
      {isLoggedIn && <Layout />}

    </div>
  );
}

export default App;
