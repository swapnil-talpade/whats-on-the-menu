

import React from 'react';


export const Header = (props) => {
    return (
        <header className="top">
            <h1>What's
            <span className="ofThe">
                    <span className="of">of</span>
                    <span className="the">the</span>
                </span>
        menu </h1>
            <h3 className="tagline">
                <span>{props.tagline}</span>
            </h3>
        </header>

    )
}
