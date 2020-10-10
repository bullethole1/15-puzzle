import React, { useState } from 'react';
import TilesComponent from '../Components/TileComponent'

export default function TilesContainer(props) {

    const { numberOfColumns, numberOfTiles } = props;
    const noc = () => {
        let nocString = "";
        for (var i = 0; i < numberOfColumns; i++) {
            nocString += " auto";
        }
        return nocString;
    }

    const containerStyle = {
        display: "grid",
        gridTemplateColumns: noc()
    };

    function HandleClick(tile) {
        console.log(tile);
    }

    const PrepareTiles = () => {
        let tiles = [];

        for (var i = 0; i < numberOfTiles; i++) {
            tiles.push(<TilesComponent number={1} key={1} clickHandler={HandleClick} />)
        }

        return tiles;
    }

    const [inputValue, setInputValue] = useState(1);
    const [boolShit, setBoolShit] = useState(false);
    const [tiles, setTiles] = useState(PrepareTiles);

    return (
        <>
            <div className="grid-container" style={containerStyle}>
                {tiles}
            </div>
        </>
    )
}