import { createContext, useReducer } from "react"

const actions = {
    addExpense: "ADD_EXPENSE",
    deleteExpense: "DELETE_EXPENSE,"
}

const AppReducer = (state, action) => {
    switch (action.type) {
        case actions.addExpense:
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };
        case actions.deleteExpense:
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
            }
        default:
            return state;
    }
}

const initialState = {
    budget: 2000,
    expenses: [
        { id: 1, name: "Shopping", cost: 50 },
        { id: 2, name: "Holiday", cost: 300 }
    ],
    actions: actions
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            actions: state.actions,
            dispatch,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}