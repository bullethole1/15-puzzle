import React, { useState } from 'react';

export default function TileComponent(props) {

    const { number, clickHandler } = props;
    let hideTile = number == 0;
    const tileStyle = {
        backgroundColor: "#f4a261",
        textAlign: "center",
        padding: "20px 0",
        borderRadius: "5px",
        margin: "2%"
    };

    return (
        <>
            {hideTile ?
                <div style={{ visibility: "hidden" }}></div>
                :
                <div style={tileStyle} onClick={() => clickHandler(number)}>{number}</div>
            }
        </>
    )
}