// import "./Header.css"
import React, { useContext } from "react";
import ResultContext from "../../utils/ResultContext"


function Description() {
    const {results} = useContext(ResultContext)

    return (
        <>
            {results.map((park, index) => (
                <div  key={index}>
                    <h2>{park.fullName}</h2>
                    <p>{park.description}</p>
                    <a href={park.url} target="_blank">Learn more...</a>
                </div>
                
            ))}
        </>
    )

}

export default Description;