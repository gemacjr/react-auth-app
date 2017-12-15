import React from 'react';

const Banner = ({ appName }) => {
    return (
        <div className="banner">
            <div className="container">
                <h1 className="logo-font">
                    {appName.toLowerCase()}
                </h1>
                <p>A place to share your Knowledge.</p>
            </div>
        </div>

    );
};

export default Banner;