import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

test("renders LogIn component for the '/' route", () => {
    render(
        <Router>
            <App />
        </Router>
    );

    // Assert that the LogIn component is rendered for the '/' route
    const logInElement = screen.getByText(/LogIn/i);
    expect(logInElement).toBeInTheDocument();
});

test("renders Home component for the '/Home' route", () => {
    render(
        <Router>
            <App />
        </Router>
    );

    // Assert that the Home component is rendered for the '/Home' route
    const homeElement = screen.getByText(/Home/i);
    expect(homeElement).toBeInTheDocument();
});

test("renders NoPage component for unknown routes", () => {
    render(
        <Router>
            <App />
        </Router>
    );

    // Assert that the NoPage component is rendered for an unknown route
    const noPageElement = screen.getByText(/NoPage/i);
    expect(noPageElement).toBeInTheDocument();
});