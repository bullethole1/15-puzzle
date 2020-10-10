import React, { useState } from 'react';
import TilesContainer from './Containers/TilesContainer';

export default function Game() {

    const numberOfColumns = 5;
    const numberOfTiles = 21;

    return (
        <>
            <TilesContainer numberOfColumns={numberOfColumns} numberOfTiles={numberOfTiles} />
        </>
    )
}