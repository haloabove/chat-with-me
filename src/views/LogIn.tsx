
import React from "react";
import { useNavigate } from "react-router-dom";

function LogIn() {
    const navigate = useNavigate();

    function handleClick(event) {
        event.preventDefault(); // Prevents form submission
        navigate("/Home");
    }

    return (
        <div className="col col-sm-12 col-md-4 col-lg-4 mx-auto log-in">
            <form>
                <div className="form-outline ">
                    <input type="email" id="form1Example1" className="form-control" />
                    <label className="form-label" htmlFor="form1Example1">Email address</label>
                </div>
                <div className="form-outline">
                    <input type="password" id="form1Example2" className="form-control" />
                    <label className="form-label" htmlFor="form1Example2">Password</label>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                            <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                        </div>
                    </div>
                    <div className="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>
                <button type="submit" onClick={handleClick} className="btn btn-primary btn-block">Sign in</button>
            </form>
        </div>
    );
}

export default LogIn;
