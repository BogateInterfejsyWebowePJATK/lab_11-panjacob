import {useState} from 'react';
import Star from './Star';
import '../App.css'

function StarRating() {
    const [rating, setRating] = useState(0);
    const [ratings, setRatings] = useState([]);

    function fillArray(size, funcValue) {
        return [...Array(size)].map(_ => funcValue());
    }

    function averageSum(arr) {
        if (!arr.length) {
            return 0;
        }
        return arr.reduce((prev, curr) => prev + curr) / arr.length;
    }

    return (
        <div className="StarRating">
            <div>
                {
                    fillArray(rating, () => 1).concat(fillArray(5 - rating, () => 0)).map((value, index) =>
                        <Star {...{value, index, setRating}} />
                    )}

            </div>
            <div>Score: {averageSum(ratings)}</div>
            <button onClick={
                () => {
                    ratings.push(rating);
                    setRating(0);
                }
            }>
                Rate
            </button>
        </div>
    )
}

export default StarRating;