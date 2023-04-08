import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const Navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <h3>This is Home</h3>
            <div>
                {
                    Navigation.state === 'loading' && 'Loading...'
                }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;