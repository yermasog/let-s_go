// import "./Header.css"
import React, { useContext } from "react";
import ResultContext from "../../utils/ResultContext"


function Description() {
    const results = useContext(ResultContext)
    const arr = ["hello", "my", "name", "is"]

    return (
        <>
            {arr.map((item) => (
                <div>
                    <h2>Description</h2>
                    <p>{item}</p>
                </div>
            ))}
        </>
    )

}

export default Description;