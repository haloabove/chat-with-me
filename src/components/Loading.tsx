import React from "react";

function Loading() {
    return (
        <svg height="40" width="40" className="loader">
            <circle className="dot" cx="10" cy="20" r="3" style={{ fill: 'grey' }} />
            <circle className="dot" cx="20" cy="20" r="3" style={{ fill: 'grey' }} />
            <circle className="dot" cx="30" cy="20" r="3" style={{ fill: 'grey' }} />
        </svg>
    );
}

export default Loading;
