import React from 'react';
import Header from '../components/Header.tsx';
import Messages from '../components/Messages.tsx';
import UserInput from '../components/UserInput.tsx';

function Home() {
    return (
        <div className='col  col-12 col-sm-12 col-md-6 col-lg-5 .col-xl-5 mx-auto main'>
            <Header />
            <Messages />
            <UserInput />
        </div>
    );
}

export default Home;
