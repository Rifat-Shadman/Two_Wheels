import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { SelectedContext, UserContext } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    // console.log(children);
    const [loggedInUser, setLoggedInUser] = useContext (UserContext)
    // const [selectedBike, setSelectedBike] = useContext(SelectedContext);
    // console.log(selectedBike);
    // console.log(loggedInUser);
    const {email} = loggedInUser;
    // console.log(email);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;