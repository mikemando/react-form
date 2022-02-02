import { useState } from "react";

const SimpleInput = (props) => {
    const [enteredFormInput, setEnteredFormInput] = useState("");

    const formInputHandler = (event) => {
        setEnteredFormInput(event.target.value);

        console.log(event.target.value);
    };

    const submitFormHandler = (event) => {
        event.preventDefault();

        enteredFormInput("");
    };

    return (
        <form onSubmit={submitFormHandler}>
            <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={formInputHandler}
                    value={enteredFormInput}
                />
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
