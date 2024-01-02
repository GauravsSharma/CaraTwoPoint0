import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useFirebase } from '../../firebase/FirebaseContext'
import {Link, useNavigate} from 'react-router-dom'
import toast ,{Toaster} from 'react-hot-toast'
const signUpScehma = Yup.object({
    email:Yup.string().email().required("*Please enter your email"),
    password: Yup.string().min(6).required("*Please enter your password"),
})
const initialValues = {
    name:"",
    email:"",
    password:"",
}
const Register = ({setFoot,setNav}) => {
    const firebase = useFirebase()
    const navigate = useNavigate()
    useEffect(()=>{
        setFoot(false);
        setNav(false);
    },[])
    const { values, handleBlur, handleChange, touched, handleSubmit, errors } = useFormik({
        initialValues,
        validationSchema:signUpScehma,
        onSubmit: (values, action) => {
           const myPromise = firebase.signin(values.email,values.password)
           toast.promise(myPromise,{
            loading: 'Loading',
            success: 'login success, redirecting',
            error: 'Password incorrent ! retry',

           })
          action.resetForm();
        }
      })
      const handleSignInWithGoogle = async () => {
        try {
          await firebase.signInWithGoogle();
          toast.success("Success");
        } catch (error) {
          if (error.code === 'auth/popup-blocked') {
            // Handle popup blocked error
            toast.error("Popup blocked. Please disable your popup blocker.");
          } else {
            // Handle other authentication errors
            console.log(error);
            toast.error("Authentication error. Please try again.");
          }
        }
      };
      useEffect(()=>{
        if(firebase.isLoggedIn){
           setTimeout(() => {
            navigate('/');
           }, 2000);
          }
      },[firebase.isLoggedIn])
  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-100 p-5 sm:py-10">

    {/* Login component */}
    <div className="flex shadow-md flex-col sm:flex-row ">
        {/* Login form */}
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: '24rem', height: '32rem' }}>
            <div className="w-72">
                {/* Heading */}
                <h1 className="text-xl font-semibold">Wellcome To Cara</h1>
                <small className="text-gray-400">Please enter your details</small>

                {/* Form */}
                <form className="mt-4" onSubmit={handleSubmit}>
            
                    <div className="mb-3">
                        <label className="mb-2 block text-xs font-semibold">Email</label>
                        <input type="email" placeholder="Enter your email" className="block w-full rounded-md border border-gray-300 focus:border-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-700 py-1 px-1.5 text-gray-500" 
                        name='email'
                         value={values.email}
                         onChange={handleChange}
                         onBlur={handleBlur}/>
                         {errors.email && touched.email ? <p className='text-red-500 text-sm m-0.5'>{errors.email}</p> : null}
                    </div>

                    <div className="mb-3">
                        <label className="mb-2 block text-xs font-semibold">Password</label>
                        <input type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-700 py-1 px-1.5 text-gray-500" 
                        name='password'
                         value={values.password}
                         onChange={handleChange}
                         onBlur={handleBlur}/>
                         {errors.password && touched.password ? <p className='text-red-500 text-sm m-0.5'>{errors.password}</p> : null}
                    </div>

                    <div className="mb-3 flex flex-wrap content-center">
                        <input id="remember" type="checkbox" className="mr-1 checked:bg-slate-700" /> <label htmlFor="remember" className="mr-auto text-xs font-semibold">Remember for 30 days</label>
                        <a href="#" className="text-xs font-semibold text-slate-700">Forgot password?</a>
                    </div>

                    <div className="mb-3">
                        <button type='submit' className="mb-1.5 block w-full text-center text-white bg-slate-700 hover:bg-slate-900 px-2 py-1.5 rounded-md">Sign in</button>
                    </div>
                </form>
                <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md" onClick={handleSignInWithGoogle}>
                            <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Google Icon" />
                            Sign in with Google
                        </button>
                {/* Footer */}
                <div className="text-center">
                    <span className="text-xs text-gray-400 font-semibold">Don't have account?</span>
                    <Link to="/signup" className="text-xs font-semibold text-slate-700" >Sign up</Link>
                </div>
            </div>
        </div>

        {/* Login banner */}
        <div className="hidden sm:flex flex-wrap content-center justify-center rounded-r-md" style={{ width: '24rem', height: '32rem' }}>
            <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://i.imgur.com/9l1A4OS.jpeg" alt="Login Banner" />
        </div>

    </div>
    <Toaster />
</div>
  )
}

export default Register