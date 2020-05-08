import React, {useRef} from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_EMPLOYEES, LOADING } from "../../utils/actions";
import API from "../../utils/API";
const CreateEmployeeForm = () => {
  const nameRef = useRef();
  const titleRef = useRef();
  const departmentRef = useRef();
  const emailRef = useRef();
  const [state, dispatch] = useStoreContext();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type:LOADING});
    API.saveEmployee({
      name: nameRef.current.value,
      title: titleRef.current.value,
      department: departmentRef.current.value,
      email: emailRef.current.value

    })
    .then(result =>{
      dispatch({
        type: ADD_EMPLOYEES,
        post: result.data
      });
    })
    .catch(err => console.log(err));
    nameRef.current.value = "";
    titleRef.current.value = "";
    departmentRef.current.value = "";
    emailRef.current.value = "";

  };

  return (
    <div className  ="row">
      
      <h1>Add a new Employee</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={nameRef} placeholder="Name" />
        <input className="form-control mb-5" required ref={titleRef} placeholder="Employee Title" />
        <input className="form-control mb-5" required ref={departmentRef} placeholder="Department" />
        <input className="form-control mb-5" required ref={emailRef} placeholder="email" />
        
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Save employee
        </button>
      </form>
    </div>
  );
};

export default CreateEmployeeForm;
