import React from "react";
import Card from "react-bootstrap/Card"
import '../App.css'
import StarRating from "./StarRating";
import ThumbRating from "./ThumbRating";


export default function Picture({picture}) {
    return (
        <>
            {
                <Card>
                    <Card.Body>
                        <Card.Title>{picture.title}</Card.Title>
                    </Card.Body>
                    <Card.Img className={"picture_url"} variant={"bottom"} src={picture.url}/>
                    <Card.Footer>
                        <small className="text-muted">Added {picture.date.toISOString()}</small>
                        <StarRating/>
                        <ThumbRating />
                    </Card.Footer>
                </Card>

            }
        </>
    );
}