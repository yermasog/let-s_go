import "./ImageCard.css"
import React, { useContext } from "react";
import ResultContext from "../../utils/ResultContext"

function ImageCard() {
    const { results } = useContext(ResultContext)

    return (
        <>
            {results.map((park, index) => (

            <div key={index} className="box-padding">
                <img src={park.images[0].url} alt="{park.images[0].altText}" />
            </div>
            ))}
        </>
    )

}

export default ImageCard;