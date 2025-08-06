import {useState} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {useNavigate} from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const[emailId, setEmailId] = useState("pujak12@gmail.com");
  const[password, setPassword] = useState("Puja@123");

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
navigate("/");
} catch(err){
  console.log(err);
} 
  };

  return (
    <div className="flex justify-center my-35">
   <div className="card card-border bg-gray-600 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center font-bold text-2xl">Login</h2>
  <div className="join">
  <div>
    <label className="input validator join-item  ">
      
      <input type="email" value={emailId} placeholder="abc@gmail.com"  required  className="w-80" onChange={(e)=>setEmailId(e.target.value)}/>
    </label>
    <div className="validator-hint hidden">Enter valid email address</div>

    <label className="input validator mt-3">
 
  <input
    type="password"
     value={password}
    required
    placeholder="Password"
   onChange={(e)=>setPassword(e.target.value)}
    minlength="8"
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
    <div className="card-actions justify-center mt-2">
      <button className="btn btn-primary" onClick={handleLogin} >Login</button>
    </div>
  </div>
</div>
</div>
  )
}

export default Login
