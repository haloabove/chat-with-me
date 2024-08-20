import React from 'react';
import { Link } from 'react-router-dom';

function NoPage() {
    return (
        <div className="col col-sm-12 col-md-6 mx-auto no-page">
            <h1>Hey-ho!</h1>
            <p>Not a single thing here <Link to='/'> go to landing page</Link></p>
        </div>
    );
}

export default NoPage;