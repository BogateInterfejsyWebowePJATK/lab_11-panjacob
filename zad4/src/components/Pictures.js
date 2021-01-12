import React from "react";
import picturesJson from '../data/pictures.json'
import Picture from "./Picture";
import Row from "react-bootstrap/Row"

export default function Pictures() {
    let picturesJsonWithDate = picturesJson.map(picture => {
        let newDateSplit = picture.date.split('-').map(el => parseInt(el));
        let newDate = new Date(newDateSplit[2], newDateSplit[1], newDateSplit[0]);
        return {
            ...picture,
            date: newDate
        }
    })
    const [pictures, setPictures] = React.useState(picturesJsonWithDate)

    const remove = (id) => {
        let newPictures = [...pictures];
        newPictures = newPictures.filter(picture => picture.id !== id)
        setPictures(newPictures)
    }

    const sortByTitle = () => {
        let newPictures = [...pictures];
        newPictures = newPictures.sort((a, b) => a.title.localeCompare(b.title))
        setPictures(newPictures)
    }

    const sortByDate = () => {
        let newPictures = [...pictures];
        newPictures= newPictures.sort((a,b) => a.date - b.date)
        setPictures(newPictures)
    }

    const sortRandom = () => {
        let newPictures = [...pictures];
        for (let i = newPictures.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newPictures[i], newPictures[j]] = [newPictures[j], newPictures[i]];
        }
        setPictures(newPictures)
    }


    return (
        <>
            <button onClick={() => sortByTitle()}>sort title</button>
            <button onClick={() => sortByDate()}>sort date</button>
            <button onClick={() => sortRandom()}>sort random</button>
            <Row>
                {
                    pictures.map(picture => {
                        return (
                            <div className={"col-3"}>
                                <Picture picture={picture}/>
                                <button onClick={() => remove(picture.id)}>remove</button>
                            </div>
                        )
                    })}
            </Row>
        </>
    );
}