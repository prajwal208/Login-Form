import React from 'react'
import './style.css'
import {useFormik} from 'formik'

export default function LoginForm() {
   
   
const initialValues = {
        name:"",
        email:"",
        birthday:"",
        city:"",
        country:"",
    }

    const onSubmit =  (values,onSubmitprops) => {
        console.log("value is",values)
        alert("Successfully Submited")
        onSubmitprops.resetForm();
       
}


     const validate = values => {
        let errors = {}

        if(!values.name){
            errors.name = "Name is Requried"
        }

        if(!values.email){
            errors.email = "Email is Requried"
        } 
        

        //else if(! /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/(values.email)){
            //error.name = "Invalid Email"

        if(!values.birthday){
            errors.birthday = "Requried"
        }

        if(!values.city){
            errors.city = "City is Requried"
        }

        if(!values.country){
            errors.country = "Country is Requried"
        }


        return errors;
  }



  const formik = useFormik({
      initialValues,
      onSubmit,
      validate 
})
  
  //console.log("values is:",formik.values)
        




    return (
        <>
            <div className="container1">
                <div className="content1">
               
                    <img src="https://images.unsplash.com/photo-1554646375-7bd5eedf4dae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" id="image1" />
                    <div className="header-name">
                        <h2>Registration</h2>
                        <p>CLICK FOR TOUR SHOOT</p>
                   

                    <form onSubmit={formik.handleSubmit}>
                        <ul>
                        <li><label>Name</label>
                        <input type="text" name="name" id="name"
                        //onChange={formik.handleChange} value={formik.values.name}   onBlur={formik.handleBlur} 
                        {...formik.getFieldProps('name')}  />
                        
                      {formik.touched.name && formik.errors.name ? (<div className="errors">{formik.errors.name}</div> ) : null}</li>

                        <li> <label>Email</label>
                        <input type="email" name="email"
                        //onChange={formik.handleChange} value={formik.values.email}  onBlur={formik.handleBlur}
                        {...formik.getFieldProps('email')}/>
                        { formik.touched.email && formik.errors.email ? (<div className="errors">{formik.errors.email}</div>) : null}</li>

                        
                         <li id="date"><label>Date of Birth</label>
                        <input type="date" id="birthday" name="birthday"
                        //onChange={formik.handleChange} value={formik.values.birthday}  onBlur={formik.handleBlur}
                        {...formik.getFieldProps('birthday')}/></li>
                        { formik.touched.birthday && formik.errors.birthday ? (<div className="errors">{formik.errors.birthday}</div>) : null}


                        <li><label>city</label>
                        <input type="list" name="city" id="city"
                        //onChange={formik.handleChange} value={formik.values.city}   onBlur={formik.handleBlur}
                        {...formik.getFieldProps('city')}/></li>
                       {formik.touched.city && formik.errors.city ? (<div className="errors">{formik.errors.city}</div>) : null}


                        <li> <label>Country</label>
                        <input type="country" name="country" id="country"
                        //onChange={formik.handleChange} value={formik.values.country}   onBlur={formik.handleBlur} 
                        {...formik.getFieldProps('country')}/></li>
                      {formik.touched.country && formik.errors.country ? (<div className="errors">{formik.errors.country}</div>) : null}



                        <button type="btnn" class="btn btn-primary btn-sm" id="btn1"
                        disabled={!formik.isValid ||formik.isSubmitting}>Submit</button>
                        <span><h6>Have an Account? Sign In</h6></span>

                        </ul>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}
