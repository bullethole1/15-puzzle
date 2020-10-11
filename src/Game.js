import React from 'react';
import TilesContainer from './Containers/TilesContainer';

export default function Game() {

    const numberOfColumns = 3;
    const numberOfRows = 4;

    return (
        <>
            <TilesContainer numberOfColumns={numberOfColumns} numberOfRows={numberOfRows} />
        </>
    )
}