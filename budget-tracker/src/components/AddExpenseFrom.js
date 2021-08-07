import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid"

const AddExpenseFrom = () => {
    const { dispatch, actions } = useContext(AppContext);
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        }
        dispatch({
            type: actions.addExpense,
            payload: expense,
        })
        setName("");
        setCost("");
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name">Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                        className="form-control"
                        type="text"
                        name="name"
                        required />
                </div>
                <div className="col-sm">
                    <label htmlFor="cost">Cost</label>
                    <input
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                        id="cost"
                        className="form-control"
                        type="text"
                        name="cost"
                        required />
                </div>
                <div className="col-sm">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseFrom
