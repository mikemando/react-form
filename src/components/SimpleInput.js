import { useState } from "react";

import "../index.css";

const SimpleInput = (props) => {
    const [enteredFormInput, setEnteredFormInput] = useState("");
    const [enteredInputEdited, setEnteredInputEdited] = useState(false);

    const enteredInputIsValid = enteredFormInput.trim() !== "";

    const formInputHandler = (event) => {
        setEnteredFormInput(event.target.value);
    };

    const submitFormHandler = (event) => {
        event.preventDefault();

        setEnteredInputEdited(true);

        if (!enteredInputIsValid) {
            return;
        }

        console.log(enteredFormInput);
        setEnteredFormInput("");
        setEnteredInputEdited(false);
    };

    const inputBlurHandler = () => {
        setEnteredInputEdited(true);
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
                    onBlur={inputBlurHandler}
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
