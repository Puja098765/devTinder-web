import {useState} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {useNavigate} from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const[emailId, setEmailId] = useState("");
  const[password, setPassword] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
   const [isLoginForm, setIsLoginForm] = useState(true);
  const [error,setError] = useState("");


  const dispatch = useDispatch();
  const navigate = useNavigate();

 const handleLogin = async ()=> {
try {
const res = await axios.post( BASE_URL + "/login",
  {
   emailId,
    password,
  },
{ withCredentials: true}
);

dispatch(addUser(res.data));
return navigate("/");
} catch (err){
  setError(err?.response?.data || "Something went wrong");
} 
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center my-35">
   <div className="card card-border bg-gray-600 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center font-bold text-2xl">   {isLoginForm ? "Login" : "Sign Up"}</h2>
  <div className="join">
    
  <div >
     {!isLoginForm && (
              <>
    <label className="input validator join-item mt-3 ">
      
      <input type="text" value={firstName}  placeholder="First Name"  required  className="w-80 " onChange={(e)=>setFirstName(e.target.value)}/>
    </label>

     <label className="input validator join-item mt-3 ">
      
      <input type="text" value={lastName}  placeholder="Last Name" required  className="w-80 " onChange={(e)=>setLastName(e.target.value)}/>
    </label>
    </>
     )}
    
    <label className="input validator join-item mt-3 ">
    
      <input type="email" value={emailId}  placeholder="Email ID" required  className="w-80" onChange={(e)=>setEmailId(e.target.value)}/>
    </label>
    <div className="validator-hint hidden">Enter valid email address</div>

    <label className="input validator mt-3">
 
  <input
    type="password"
     value={password}
    required
   placeholder="Password"
   onChange={(e)=>setPassword(e.target.value)}
    minLength={8}
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
  />
</label>
<p className="validator-hint hidden">
  Must be more than 8 characters, including
  <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
</p>
  </div>

</div>
   <p className="text-red-500">{error}</p>
    <div className="card-actions justify-center mt-2">
      <button className="btn btn-primary" onClick={isLoginForm ? handleLogin : handleSignUp} >   {isLoginForm ? "Login" : "Sign Up"}</button>
    </div>
       <p
            className="m-auto cursor-pointer py-2"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm
              ? "New User? Signup Here"
              : "Existing User? Login Here"}
          </p>
  </div>
</div>
</div>
  );
};

export default Login
