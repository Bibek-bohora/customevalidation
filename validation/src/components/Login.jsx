import React from "react";
import { useState } from "react";

import {Link,useNavigate} from "react-router-dom"
import api from "../api/constUrl.js"
const Login = () => {
const navigator=useNavigate();
  
  const [bi,setbi]=useState(true)

   const [input,setinput]=useState({
     email:"",
     password:"",

      })

      const [error,seterror]=useState({
        email:"",
        password:"",
   
         })


  const handleInput=(e)=>{
    setinput({...input,[e.target.name]:e.target.value})
    console.log(input)
  }
 
  const validation=(data)=>{
    const {email,password}=data;

    if(!email){
      seterror({
        ...error,
        email:"email is required"
      })
    }else{
      seterror({
        ...error,
        email:""
      })
    }

    if(!password){
      seterror({
        ...error,
        password:"password is requires"
      })
    }else{
      seterror({
        ...error,
        password:""
      })
    }


  }

  //handlesubmit
  const handleSubmit=async(e)=>{
     
     e.preventDefault();
     validation(input)
     try{
        const response=await api.post("auth/login",input);
        console.log(response.data.admin)
        if(response.data.admin){
           console.log(response.data)
           navigator("/")
        }else{
          setbi(response.data)
        }
        
       
     }catch(err){
      console.log(err)
     }
      
  }
  
  return (
    <>
      <nav>
        <div className="flex p-3 items-center text-purple-900 ">
          <img src="/shop.png" alt="logo" className="w-10 h-10" />
          <h2 className="text-3xl font-bold mx-2 font-primaryText ">
            PasalStock
          </h2>
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
              <p className="text-center text-xl italic">
                "Your Second Staff To Manage Your Pasal's Stock"
              </p>
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form action="" onSubmit={handleSubmit}>
                <div className="my-5">
                
                    <p className="text-2xl mb-0 mr-4 font-semibold text-[#b67c2a]">
                      Login your account
                    </p>
                  
                </div>

                {/* email field */}
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    autocomplete="off"
                    onChange={handleInput}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    
                    placeholder="Your Email"
                  />
                  <p>{error?error.email:null}</p>
                </div>

                {/* password */}
                <div className="mb-6">
                  <input
                    type="password"
                    name="password"
                    autocomplete="off"
                    onChange={handleInput}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    
                    placeholder="Your Password"
                  />
                  <p>{error?error.password:null}</p>
                  <p className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">{bi?bi:null}</p>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      
                    />
                    
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-gray-800">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase        rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg           focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150            ease-in-out"
                  >
                    Login
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account ?? {" "}
                    <Link
                      to="/register"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                        >click to register</Link>
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

export default Login;
