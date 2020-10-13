import React from 'react';

export default function TileComponent(props) {

    const { tiles, findItem, checkLocation, changeTiles, checkWin } = props;

    const tileStyle = {
        backgroundColor: "#f4a261",
        textAlign: "center",
        padding: "20px 0",
        borderRadius: "5px",
        margin: "2%",
        cursor: "pointer"
    };

    const tileStyleHidden = {
        backgroundColor: "#f4a261",
        textAlign: "center",
        padding: "20px 0",
        borderRadius: "5px",
        margin: "2%",
        visibility: "hidden",
        cursor: "pointer"
    };



    const HandleClick = (tile) => {
        let indexOfEmpty = findItem(0);
        let indexOfClicked = findItem(tile);

        if (checkLocation(indexOfEmpty, indexOfClicked)) {
            let newArray = tiles.filter(x => x !== tile && x !== 0);

            if (indexOfEmpty > indexOfClicked) {
                indexOfEmpty -= 1;
            }

            newArray.splice(indexOfEmpty, 0, tile);
            newArray.splice(indexOfClicked, 0, 0);
            changeTiles(newArray);
            checkWin(newArray);

        }
    }


    return (
        <>
            {
                tiles.map((tile) => (
                    tile === 0 ?
                        <div style={tileStyleHidden} key={tile} onClick={() => HandleClick(tile)}>{tile}</div>
                        :
                        <div style={tileStyle} key={tile} onClick={() => HandleClick(tile)}>{tile}</div>
                ))
            }
        </>
    )
}