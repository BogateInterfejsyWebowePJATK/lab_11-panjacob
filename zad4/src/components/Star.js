import {FaStar} from 'react-icons/fa';

function Star({index, value, rating, setRating}) {
    return (<FaStar color={value ? "orange" : "#aaa"} onClick={() => setRating(index + 1)}/>)
}

export default Star;