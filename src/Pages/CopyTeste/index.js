import React from "react";

function CopyTeste() {

    function copyToClickBoard() {
        var content = document.getElementById('textArea').innerHTML;

        navigator.clipboard.writeText(content)
            .then(() => {
                alert(content)
            })
            .catch(err => {
                console.log('Something went wrong', err);
            })

    }

    return (
        <>
            <textarea
                id="textArea"
                value="Maurício"
            >
            </textarea>
            <button id="btn" onClick={copyToClickBoard}>Copy</button>
        </>
    );
}

export default CopyTeste;