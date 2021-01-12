import { useState } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

function ThumbRating() {
    const [ups, setUps] = useState(0);
    const [downs, setDowns] = useState(0);

    return (
        <div>
            <div>
                <FaThumbsUp color={"blue"} onClick={(e) => { e.preventDefault(); setUps(ups + 1); }} />
                {ups}
                <FaThumbsDown color={"red"} onClick={(e) => { e.preventDefault(); setDowns(downs + 1); }} />
                {downs}
            </div>
        </div>
    )
}

export default ThumbRating;