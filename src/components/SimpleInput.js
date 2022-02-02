import { useState } from "react";

import "../index.css";

const SimpleInput = (props) => {
    const [enteredFormInput, setEnteredFormInput] = useState("");
    const [enteredInputIsValid, setEnteredInputIsValid] = useState(false);
    const [enteredInputEdited, setEnteredInputEdited] = useState(false);

    const formInputHandler = (event) => {
        setEnteredFormInput(event.target.value);
    };

    const submitFormHandler = (event) => {
        event.preventDefault();

        setEnteredInputEdited(true);

        if (enteredFormInput.trim() === "") {
            setEnteredInputIsValid(true);
            return;
        }

        console.log(enteredFormInput);
        setEnteredFormInput("");
        setEnteredInputIsValid(false);
    };

    const nameInputIsValid = enteredInputIsValid && enteredInputEdited;

    const inputFieldClass = enteredInputIsValid
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={submitFormHandler}>
            <div className={inputFieldClass}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={formInputHandler}
                    value={enteredFormInput}
                />
                {nameInputIsValid && (
                    <p className="error-text">Name must not be empty</p>
                )}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
