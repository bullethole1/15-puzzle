import React, { useState } from 'react';

export default function TilesContainer(props) {

    const { numberOfColumns, numberOfRows } = props;

    const tileStyleHidden = {
        backgroundColor: "#f4a261",
        textAlign: "center",
        padding: "20px 0",
        borderRadius: "5px",
        margin: "2%",
        visibility: "hidden",
        cursor: "pointer"
    };

    const tileStyle = {
        backgroundColor: "#f4a261",
        textAlign: "center",
        padding: "20px 0",
        borderRadius: "5px",
        margin: "2%",
        cursor: "pointer"
    };

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
        changeTiles(PrepareTiles);
    }

    const containerStyle = {
        display: "grid",
        gridTemplateColumns: Noc()
    };

    const findItem = (inp) => {
        for (var i = 0; i < tiles.length; i++) {
            if (tiles[i] === inp) {
                return i;
            }
        }
    };

    const checkLocation = (empty, clicked) => {
        var all = numberOfColumns * numberOfRows;
        var each = all / numberOfRows;

        if (tiles[empty + 1] === tiles[clicked]) {
            // Check right
            if ((empty + 1) % each === 0) {
                return false;
            }
            return true;
        }
        else if (tiles[empty - 1] === tiles[clicked]) {
            //Check left
            if (empty % each === 0) {
                return false;
            }
            return true;
        }
        else if (tiles[empty + numberOfColumns] === tiles[clicked]) {
            if (empty > ((all - numberOfColumns) - 1)) {
                return false;
            }
            return true;
        }
        else if (tiles[empty - numberOfColumns] === tiles[clicked]) {
            // Check top
            if (empty < numberOfColumns) {
                return false;
            }
            return true;
        }

        return false;
    }

    const HandleClick = (tile) => {
        var indexOfEmpty = findItem(0);
        var indexOfClicked = findItem(tile);

        if (checkLocation(indexOfEmpty, indexOfClicked)) {
            var newArray = tiles.filter(x => x !== tile && x !== 0);

            if (indexOfEmpty > indexOfClicked) {
                indexOfEmpty -= 1;
            }

            newArray.splice(indexOfEmpty, 0, tile);
            newArray.splice(indexOfClicked, 0, 0);

            changeTiles(newArray);
        }
    }

    const PrepareTiles = () => {
        let tiles = [];
        for (var i = 0; i < numberOfColumns * numberOfRows; i++) {
            tiles.push(i)
        }
        return ShuffleArray(tiles);
    }

    const [tiles, changeTiles] = useState(PrepareTiles);

    return (
        <>
            <div className="grid-container" style={containerStyle}>
                {tiles.map((item, index) => (
                    item === 0 ? <div id={item} style={tileStyleHidden} key={item} onClick={() => HandleClick(item)}>{item}</div>
                        :
                        <div id={item} className="Tile fade-in" style={tileStyle} key={item} onClick={() => HandleClick(item)}>{item}</div>
                ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <div style={{ padding: "20px", background: "#e76f51", cursor: "pointer", borderRadius: "5px", color: "white" }} onClick={() => Randomize()}>Nytt spel</div>
            </div>
        </>
    )
}