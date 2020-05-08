import React, {createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_EMPLOYEE,
  GET_EMPLOYEES,
  ADD_EMPLOYEES,
  REMOVE_EMPLOYEES,
  UPDATE_EMPLOYEES,
  LOADING
} from "./actions"
// Don't forget to import all of your actions!
const StoreContext = createContext();
const {Provider} = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_EMPLOYEE:
    return{
      ...state,
      currentEmployee: action.employee,
      loading: false 

    }
    case GET_EMPLOYEES:
      return{
        ...state,
        employees: [...state.employees],
        loading: false

      }
      case ADD_EMPLOYEES:
        return{
          ...state,
          employees: [ action.employee, ...state.employees]
        }
        case REMOVE_EMPLOYEES:
          return{
            ...state,
            employees: state.employees.filter((post)=>{
              return employee._id !== action._id;
            })
          }
          case UPDATE_EMPLOYEES:
            return{
              ...state,
              employees: [...action.employees],
              loading: false 
            }
            case LOADING:
              return{
                ...state,
                loading: true
              }  
  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    employees: [],
    currentEmployee: {
      _id: 0,
      name: "",
      title: "",
      department: "",
      email: ""
    },
    loading: false
  });

  return <Provider value={[state, dispatch]}{...props}/>;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
