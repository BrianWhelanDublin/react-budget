import {TiDelete} from "react-icons/ti"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const ExpenseItem = ({id,name,cost}) => {

    const {dispatch, actions} = useContext(AppContext);

    const handelDelete = () =>{
        dispatch({
            type:actions.deleteExpense,
            payload: id,
        })
    }

    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
          {name} 
          <div>
             <span className="badge bg-primary rounded-pill mr-3">
                 € {cost}     
             </span>
             <TiDelete size="1.5em" onClick={handelDelete} ></TiDelete>
          </div>
      </li>
    )
}

export default ExpenseItem
