

import * as React from 'react';
import {useState,useEffect} from 'react';

import {Box,Grid} from '@mui/material';
import TextField from '@mui/material/TextField';
import './Login2.scss';
import { Button } from '@mui/material';
import Login2Header from './Login2Header';
import {Link} from 'react-router-dom';
import {login} from '../../../api/Auth/apiAuth';
import {authenticate,isAuthenticated} from '../../../utils/auth'
import {Redirect } from 'react-router-dom';
import { showError, showLoading } from '../../../utils/messages';
import { useDispatch } from 'react-redux';


export default function Login2() {
  const [values, setValues] = useState({
    error: false,
    errorMsg:'',
    loading: false,
    disabled: false,
    redirect: false
});

const dispatch = useDispatch();

const redirectUser = () =>{
  if(redirect) return <Redirect to='/'/>
  if(isAuthenticated()) return <Redirect to='/'/>
}

const { loading, error,errorMsg, redirect, disabled } = values;

const handleSubmit = (event) => {
  event.preventDefault();

  setValues({ ...values,
    error:false, 
     disabled: false,
      loading: true,
      redirect:false, 
    });
    
  const data = new FormData(event.currentTarget);
  const email = data.get('email');
   const password =  data.get('password');
  login({email,password})
  .then(response =>{
    if(response.status === 200){
      authenticate(response.data.access_token, () =>{
          event.target.reset();
      })
      setValues({ ...values,
        error:false, 
         disabled: false,
          loading: false,
          redirect:true, 
        });

       localStorage.setItem("userRole",JSON.stringify(response.data.role)); 
    }
     dispatch({type:"userRole",payload:response.data.role})
     console.log(response);
     
      
  })
  .catch(err =>{
    console.log(err);
      let errMsg = 'Something went wrong!';
      if (err.response.data !== undefined) {
          errMsg = err.response.data.message;
      } else {
          errMsg = 'Something went wrong!';
      };
      console.log(errorMsg);
      setValues({ ...values,
        error:true, 
        errorMsg: errMsg,
         disabled: false,
          loading: false 
        });
  })
};
  return (
    <div className='login__page'>
       <div class="skewed-accent-bg sm:visible"></div>
       <div class="main-content">
         <Grid  className='login-card'>
           <div class="self-center logo-container">
               <h2>Papping</h2>
           </div>
           <div class="flex flex-row justify-center login-content">
               <h1>Sign in to your account</h1>
           </div>
          <div id="Login2">
                <form  onSubmit={handleSubmit} component="form" noValidate autoComplete="off">
                {showError(error, errorMsg)}
                          {showLoading(loading)}
                          {redirectUser()}
                  <label className="mb-2">Email</label>
                  <TextField
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                    autoComplete="current-password"
                    fullWidth
                    required
                    name="email"
                  />
                  <br />
                  <br />
                  <label className="mb-2">Password</label>
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    fullWidth
                    required
                    name="password"
                  />
                  <div class="forgot-password">
                     <a class="ef-link" href="/auth/recovery">Forgot Your Password?</a>
                  </div>
                  <br />
                  <Button type='submit' className='signinbtn' variant="contained">
                     Sign In
                  </Button>
                </form>
                <hr/>
                <div class="signup">
                      <span><b>Don't have an account?</b> Create one as: </span>
                </div>
              <div class="mt-7 ned-hlp">
                <span>Need Help? <a class="ef-link" href="mailto:operations@gurumedia.com">Contact Support</a></span>
             </div>
           </div>
          </Grid> 
      </div>
    </div>
  );
}
