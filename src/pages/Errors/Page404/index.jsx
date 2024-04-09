import React from 'react';
import { NavLink } from 'react-router-dom';
import { generatePath } from '../../../utils/router/generatePath';


const Page404 = () => {
    return (
        <div>
            <h1>Oops!</h1>
            <p>Page not found!</p>
            <NavLink to={generatePath('Home')}>Return to Homepage</NavLink>
        </div>
    );
};

export default Page404;