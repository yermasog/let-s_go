// import "./Header.css"
import React, { useContext } from "react";
import ResultContext from "../../utils/ResultContext"


function Description() {
    const {results} = useContext(ResultContext)
    // const arr = ["hello", "my", "name", "is"]

    return (
        <>
            {results.map((description, index) => (
                <div  key={index}>
                    <h2>Description</h2>
                    <p>{results.description}</p>
                </div>
            ))}
        </>
    )

}

export default Description;