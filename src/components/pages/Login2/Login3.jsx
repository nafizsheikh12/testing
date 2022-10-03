import React from 'react'
import "./login.css";

const Login3 = () => {
  return (
    <>
      <div class="skewed-accent-bg sm:visible"></div>
      <div class="flex flex-col items-center justify-center main-content">
    



<div class="flex flex-col card">
    <div class="self-center logo-container">
        <img alt="logo" src="/logo.png"/>
    </div>
    <div class="flex flex-row justify-center">
        <h1>Sign in to your account</h1>
    </div>
    
    <form action="" method="post">
        <input type="hidden" id="ReturnUrl" name="ReturnUrl" value="/connect/authorize/callback?client_id=everflow_ui&amp;redirect_uri=https%3A%2F%2Fstats.gurumedia.com%2Fassets%2Fapp%2Flegacy%2Foidc%2Fcallback.html&amp;response_type=code&amp;scope=openid%20profile%20everflow_user%20everflow_api&amp;state=cc03c38301db40609d3af249ac91dbfd&amp;code_challenge=TIvzomY__1PS93h3xGgTUU5jCC_QYddfgjQT0iqB-5k&amp;code_challenge_method=S256&amp;response_mode=query"/>

        <div class="input-group">
            <label class="flex flex-row line-clamp-1" for="Username">Email</label>
            <input type="email" class="form-control" placeholder="Email" required="" data-val="true" data-val-required="The Username field is required." id="Username" name="Username" value=""/>
            <div class="error-message">
                Invalid Email
            </div>
        </div>
        <div class="input-group">
            <label class="flex flex-row line-clamp-1" for="Password">Password</label>
            <input id="password" type="password" class="form-control password" placeholder="Password" autocomplete="off" required="" data-val="true" data-val-required="The Password field is required." name="Password"/>
            <i class="ef-icon text-2xl ef-icon-eye ef-icon-eye-off" id="togglePassword"></i>
            <div class="forgot-password flex flex-row justify-end">
                <a class="ef-link" href="/auth/recovery">Forgot Your Password?</a>
            </div>
        </div>
        <div class="input-group flex flex-row justify-center">
            <button class="btn btn-primary px-10" name="button" value="login">Sign In</button>
        </div>

    <input name="__RequestVerificationToken" type="hidden" value="CfDJ8L_zNu1JkeVGpT6Eub0WGOP9mm4s51j7n14S9k-6zhgM2wNWD-bK30L5Zxd_-inGxJziqvk3vEjEVCRzBRWYszWaYZzee75tHpMF-EeLaILxaWbe0yT4eBZ9dF1YFPHgJ2ldIVwkn6XWY5GeacJpUVA"/>

    </form>
    <hr/>
        <div class="flex flex-col signup">
            <span><b>Don't have an account?</b> Create one as: </span>
            <div class="flex flex-col sm:flex-row mt-3 items-center justify-center">
                    <a href="/affiliate/signup">
                        <button class="m-3 btn">
                            <i class="ef-icon ef-icon-partner"></i>
                            <span>Partner</span>
                        </button>
                    </a>
            </div>
        </div>
    <div class="flex flex-row justify-center mt-7">
        <span>Need Help? <a class="ef-link" href="mailto:operations@gurumedia.com">Contact Support</a></span>
    </div>
</div>


 </div>
    </>
  )
}

export default Login3