import React, { useState } from 'react';

export default function TileComponent(props) {

    const { number, clickHandler } = props;

    return (
        <>
            <div onClick={() => clickHandler(number)}>Tile {number}</div>
        </>
    )
}