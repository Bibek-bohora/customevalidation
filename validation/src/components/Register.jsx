import React from "react";
import { Children } from "react";
import { useState } from "react";

import { Link} from "react-router-dom"

import api from "../api/constUrl.js"

const Register = () => {

  
const [input ,setINput] = useState({
  name: "",
  email:"",
  phone:"",
  password:"",
  confirmpassword:""
})

const [error,setError] = useState({
  name: "",
  email:"",
  phone:"",
  password:"",
  confirmpassword:""
})

//handleinput
const submitInput = (e) => {
 
  setINput({...input,[e.target.name]:e.target.value})
  console.log(input)
}



const validate = (data) =>{
  const {name,email,phone,password,confirmpassword} = data
  //name
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!name) {
      setError({
          ...error, 
          name:"This feild is required"
      })
  }else{
      setError({
          ...error,
          name:""
      })
  }
  //email
  if(!email) {
      setError((prev) =>{
          return {
              ...prev,
              email:"This field is required..."
          }

      })
  }else{
    setError({
      ...error, 
      email:""
  })
 }

 
  

  if(!phone) {
    setError((prev) =>{
        return {
            ...prev,
            phone:"This field is required..."
        }

    })
  }else{
    setError({
        ...error,
        phone:""
    })
  }

  //password
  if(!password) {
      setError((prev) =>{
          return {
              ...prev,
              password:"This field is required..."
          }

      })
  }else{
    setError({
        ...error,
        password:""
    })
  }

  //confirmpassword
  if(!confirmpassword) {
      setError((prev) =>{
          return {
              ...prev,
              confirmpassword:"This field isrequired..."
          }

      })
  }else{
    setError({
        ...error,
        confirmpassword:""
    })
  }
  

  //matchingPassword
  if(password !== confirmpassword){
    setError((prev) =>{
      return {
          ...prev,
          confirmpassword:"password doesnot match..."
      }

  })
  }
  // }else{
  //   setError({
  //       ...error,
  //       confirmpassword:""
  //   })
  // }
}

const handleSubmit = async(e) => {
  e.preventDefault();
  validate(input)
  
  try{
  const response=await api.post("auth/register",input)
  console.log(response.data)
  }catch(err){
     console.log(err)
  }
  
  
}

// console.log(error)
  return (
    <>
       <nav>
        <div className="flex p-3 items-center text-purple-900">
        <img src="/shop.png" alt="logo" className="w-10 h-10" />
        <h2 className="text-3xl font-bold mx-2 font-primaryText ">PasalStock</h2>
      </div>
       </nav>

      <section className="h-screen font-primaryText ">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full -mt-5">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://i0.wp.com/libertyondemand.biz/wp-content/uploads/2022/06/Shopping-Marketing-Analytics.png?resize=768%2C557&ssl=1"
                className="w-full"
                alt="stock image"
              />
              <p className='text-center text-xl italic'>"Your Second Staff To Manage Your Pasal's Stock"</p>
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form action="" onSubmit={handleSubmit}>
                <div className="my-5">
                
                    <p className="text-2xl mb-0 mr-4 font-semibold">Create Your Account</p>
                  
                </div>
                {/* Name field */}
                
                  <div className="mb-6">
                    <input
                      autocomplete="off"
                      type="text"
                      onChange={submitInput}
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      name="name"
                      placeholder="Your Name"
                    />
                    <p className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">{error?error.name:null}</p>
                  </div>
                
                {/* email field */}
                  <div className="mb-6">
                    <input
                      onChange={submitInput}
                      type="text"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      name="email"
                      placeholder="Your Email"
                    />
                    <p className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">{error?error.email:null}</p>
                  </div>
                  {/* Phone number */}
                  <div className="mb-6">
                    <input
                      onChange={submitInput}
                      type="number"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      name="phone"
                      placeholder="Your Number"
                    />
                    <p className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">{error?error.phone:null}</p>
                  </div>
                  {/* password */}
                  <div className="mb-6">
                    <input
                      onChange={submitInput}

                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      name="password"
                      placeholder="Your Password"
                    />
                    <p className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">{error?error.password:null}</p>
                  </div>
                  {/* confirm password */}
                  <div className="mb-6">
                    <input
                      onChange={submitInput}
                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      name="confirmpassword"
                      placeholder="Confirm password"
                    />
                    <p className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">{error?error.confirmpassword:null}</p>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                     
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white  checked:bg-blue-600  focus:outline-none transition duration-200 mt-1  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck3"
                    
                     />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2"
                         >Accept <a href="#" className="text-blue-600">Terms and Conditions.</a></label>
                 </div>
                  </div>

                  <div className="text-center lg:text-left">
                    <button
                     type="submit"
                         className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase        rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg           focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150            ease-in-out"
                        >
                        Create an account
                     </button>
                     <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                          Already have an account?
                          <Link
                            to="/login"
                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                            >Login</Link>
                          
                                </p>
                    </div>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
