import React, { useContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app  from "../app/firebase";
import { userContext } from "../context/usercontext";
import { useNavigate } from "react-router-dom";
function Oauth() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const {setUser,setToken} = useContext(userContext)

  const navigate = useNavigate()

  const googlelogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        console.log(result.user)
        const user = result.user;
        const formdata = {
            displayName:user.displayName,
            email:user.email,
            photoURL:user.photoURL,
            
        }
        fetch("https://lms-backend-zjpz.onrender.com/glogin",{
            method:"POST",
            credentials:'include',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata)
        }).then((res)=>
            res.json())
          .then((data) =>{
              setUser(data)
              localStorage.setItem("userdetails",JSON.stringify(data))
              navigate('/')

            })
            .catch((err)=>{console.log(err)})
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return <>
    <hr />
    <button style={{border:'1px solid black'}} className="py-2 w-full flex items-center justify-center rounded-md text-md gap-5 bg-white hover:bg-orange-300 font-semibold" onClick={googlelogin}><img className="w-7" src="../../public/Google.png"/>continue with google</button>
  </>
}

export default Oauth;
