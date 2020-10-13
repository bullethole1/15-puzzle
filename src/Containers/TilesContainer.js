import React, { useState } from 'react';
import TileComponent from "../Components/TileComponent";

export default function TilesContainer(props) {

    const { numberOfColumns, numberOfRows } = props;

    const buttonContainerStyle = {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px"
    };

    const buttonStyle = {
        padding: "20px",
        background: "#e76f51",
        cursor: "pointer",
        borderRadius: "5px",
        color: "white"
    }

    const GameCompleteStyle = {
        margin: "20px 0 0 0"
    }


    const Noc = () => {
        let nocString = "";
        for (let i = 0; i < numberOfColumns; i++) {
            nocString += " auto";
        }
        return nocString;
    }

    const containerStyle = {
        display: "grid",
        gridTemplateColumns: Noc()
    };


    const ShuffleArray = (a) => {
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    const Randomize = () => {
        setIsWinner(false);
        changeTiles(PrepareTiles);
    }

    const findItem = (inp) => {
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i] === inp) {
                return i;
            }
        }
    };

    const checkLocation = (empty, clicked) => {
        let all = numberOfColumns * numberOfRows;
        let each = all / numberOfRows;

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


    const PrepareTiles = () => {
        let tiles = [];
        for (let i = 0; i < numberOfColumns * numberOfRows; i++) {
            tiles.push(i)
        }
        return ShuffleArray(tiles);
    }

    const checkWinn = (fdsd) => {
        let array = [1, 2, 3, 0];
        let lastItemInArray;
        let newArray = [];

        //Check if numbered tilöes are in descending order

        let isAscending = a => a.slice(1)
            .map((e, i) => e > a[i])
            .every(x => x);


        for (let i = 0; i < array.length; i++) {
            newArray.push(array[i]);
        }

        //find last element in array
        array.forEach(function (item, i) {
            if (i === array.length - 1) {
                lastItemInArray = item;
            }
        });

        if (lastItemInArray === 0) {
            newArray.pop();
        }

        if (isAscending(newArray)) {
            setIsWinner(true);
        }
    }

    const [winner, setIsWinner] = useState(false);

    const [tiles, changeTiles] = useState(PrepareTiles);

    return (

        <>
            <div className="grid-container" style={containerStyle}>
                <TileComponent
                    tiles={tiles}
                    findItem={findItem}
                    checkLocation={checkLocation}
                    changeTiles={changeTiles}
                    checkWinn={checkWinn}
                />
            </div>
            <div style={buttonContainerStyle}>
                <div style={buttonStyle} onClick={() => Randomize()}>Nytt spel</div>
            </div>
            {winner ? <div style={GameCompleteStyle}>Game Completed!</div> : ''}
        </>
    )
}