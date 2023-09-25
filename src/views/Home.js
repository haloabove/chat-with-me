
import Header from '../components/Header';
import Messages from '../components/Messages.js';
import UserInput from '../components/UserInput.js';

function Home() {
    return (
        <div className='col  col-12 col-sm-12 col-md-6 col-lg-5 .col-xl-5 mx-auto main'>
            <Header />
            <Messages className="min-vh-60" />
            <UserInput className="min-vh-20" />
        </div>
    );
}

export default Home;
