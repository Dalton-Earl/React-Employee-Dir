import React, {useEffect} from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import{ useStoreContext } from "../../utils/GlobalState"
import{ REMOVE_EMPLOYEES, LOADING, UPDATE_EMPLOYEES } from "../../utils/actions";
import API from "../../utils/API";

const EmployeeList = () => {
  const [state, dispatch] = useStoreContext();
  const removeEmployee = id =>{
    API.deleteEmployee(id)
    .then(() =>{
      dispatch({
        type: REMOVE_EMPLOYEES,
        _id: id
      })
    })
    .catch(err => console.log(err));
  };

  const getEmployees = () => {
    dispatch({ type: LOADING});
    API.getEmployees()
    .then(results =>{
      dispatch({
        type: UPDATE_EMPLOYEES,
        employees: results.data
      });
    })
    .catch(err => console.log(err));
  }

  useEffect(()=>{
    getEmployees();
  }, []);
  return (
    <div>
      <h1>All Blog Posts</h1>
      <h3 className="mb-5 mt-5">Click on a post to view</h3>
      {/* Replace `[]` with the appropriate arrays */}
      {state.employees.length ? (
        <List>
          {state.employees.map(employee => (
            <ListItem key={employee._id}>
              <Link to={"/posts/" + employee._id}>
                <strong>
                  {employee.name} {employee.email} {employee.title} {employee.department}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeEmployee(employee._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any employees yet!</h3>
      )}
     
    </div>
  );
};

export default EmployeeList;
