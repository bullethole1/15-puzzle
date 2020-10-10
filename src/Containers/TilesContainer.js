import React, { useState } from 'react';
import TilesComponent from '../Components/TileComponent'

export default function TilesContainer(props) {

    const { numberOfColumns, numberOfRows } = props;

    const Noc = () => {
        let nocString = "";
        for (var i = 0; i < numberOfColumns; i++) {
            nocString += " auto";
        }
        return nocString;
    }

    const ShuffleArray = (a) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    const Randomize = () => {
        setTiles(PrepareTiles);
    }

    const containerStyle = {
        display: "grid",
        gridTemplateColumns: Noc()
    };

    const HandleClick = (tile) => {
        console.log(tile);
    }

    const PrepareTiles = () => {
        let tiles = [];

        for (var i = 0; i < numberOfColumns * numberOfRows; i++) {
            tiles.push(<TilesComponent number={i} key={i} clickHandler={HandleClick} />)
        }

        return ShuffleArray(tiles);
    }

    const [tiles, setTiles] = useState(PrepareTiles);

    return (
        <>
            <div className="grid-container" style={containerStyle}>
                {tiles}
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <div style={{ padding: "20px", background: "#e76f51", cursor: "pointer", borderRadius: "5px", color: "white" }} onClick={() => Randomize()}>Nytt spel</div>
            </div>
        </>
    )
}