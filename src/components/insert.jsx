import React, {Component, Fragment} from 'react'
import paper from '../Assets/paper-with-text-lines.svg'
import "../css/style.css"
function insert() {

    return(
        <>
        <body>
    <div class="container">
        <h1 class="title">Insert Web Link</h1>
        <input id="URL" type="text" placeholder="Enter or paste a URL"/>
            <div class="upload">
                <p class="description"><img src={paper} width="20px" height="20px"/>Link Information Preview</p>
            </div>
            <label for="option" class="textoption">Auto Fill:</label>
            <select name="option" id="option">
                <option value="None">None</option>
                <option value="OptionA">Option A</option>
                <option value="OptionB">Option B</option>
                <option value="OptionC">Option C</option>
            </select>
            <div class="button">
                <button class="Remove">Remove</button>
                <div class="buttonright">
                    <button class="Cancel">Cancel</button>
                    <button class="Insert">Insert</button>
            </div>
            </div>
    </div>
</body>
        </>
    )}

    export default insert