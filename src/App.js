import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        getProducts();
        // axios
        //     .get('https://dummyjson.com/products')
        //     .then((resp) => setProducts(resp.data.products))
        //     .catch((error) => setError(error.message));
    }, []);

    async function getProducts() {
        try {
            const resp = await axios.get('https://dummyjson.com/products');
            console.log(resp);
            setProducts(resp.data.products);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <h4 style={{ color: 'red', justifyContent: 'center' }}>
                {error !== '' && error}
            </h4>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '300px 300px 300px',
                    gridGap: '5px',
                    height: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {products.map((prod, idx) => {
                    return (
                        <div style={{}}>
                            <div
                                style={{
                                    padding: '20px',
                                    background: 'grey',
                                    color: 'white',
                                    height: '20rem',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <h4>{prod.description}</h4>
                                <h4 key={idx}>
                                    {prod.title} - ${prod.price}
                                </h4>
                                <h6>{prod.brand}</h6>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default App;
