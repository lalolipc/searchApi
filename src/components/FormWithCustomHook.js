import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange ] = useForm({
      name: '',
      email: '',
      password:''
  });
  
  const {name, email, password}=formValues;

  //el efecto cambiara cuando cambie el email
  useEffect(() =>{
      // console.log('email cambio')
  },[email]);

  useEffect(() =>{
    // console.log('name cambio')
},[name]);

  const handleSubmit =(e) =>{
      e.preventDefault()
      console.log(formValues)
  }
  return(
      <div>
        <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group pb-1">
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Name"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
              />          
            </div>
            <div className="form-group pb-1">
                <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
              />          
            </div>
            <div className="form-group pb-1">
                <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter Password"
                autoComplete="off"
                value={password}
                onChange={handleInputChange}
              />          
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
      </div>

  )
}

