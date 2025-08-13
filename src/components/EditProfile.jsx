import {useState} from 'react';
import UserCard from './UserCard';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const EditProfile = ({user}) => {
     const[firstName, setFirstName] = useState(user.firstName );
      const[lastName, setLastName] = useState(user.lastName ); 
      const[photoUrl, setPhotoUrl] = useState(user.photoUrl )
      const[age, setAge] = useState(user.age || "");
      const[gender,setGender] =useState(user.gender || "");
      const[about ,setAbout] = useState(user.about || "");
      const [error,setError] = useState("");
      const dispatch = useDispatch();
      const [showToast, setShowToast] = useState(false);

      const saveProfile= async()=>{
        // Clear Errors
        setError(""); 
        try{
           const res = await axios.patch(
            BASE_URL + "/profile/edit",
             { firstName, lastName, photoUrl, age, gender, about},
              { withCredentials: true }
           );
           dispatch(addUser(res?.data?.data));
           setShowToast(true);
           setTimeout(()=> {
            setShowToast(false);
           },3000);
        } catch (err){
          console.log(err);
         setError(err.response?.data || err.message);
        }   
      };

  return (
    <>
    <div className="flex justify-center my-10">
    <div className="flex justify-center mx-10">
   <div className="card card-border bg-gray-500 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center font-bold text-2xl">Edit Profile</h2>
  <div >
 
    <label className="form-control w-full max-w-xs my-2 ">
      <div className="label m-2">
 <span className="label-text font-bold">First Name</span>
      </div>
      <input type="text" value={firstName}  className=" input-bordered w-full max-w-xs bg-gray-400 rounded-lg p-2" onChange={(e)=>setFirstName(e.target.value)}/>
    </label>

    <label className="form-control w-full max-w-xs my-2 ">
      <div className="label  m-2">
 <span className="label-text font-bold">Last Name</span>
      </div>
      <input type="text" value={lastName}  className=" input-bordered w-full max-w-xs bg-gray-400 rounded-lg p-2" onChange={(e)=>setLastName(e.target.value)}/>
    </label>

    <label className="form-control w-full max-w-xs my-2 ">
      <div className="label  m-2">
 <span className="label-text font-bold">Photo URl</span>
      </div>
      <input type="text" value={photoUrl}  className=" input-bordered w-full max-w-xs bg-gray-400 rounded-lg p-2" onChange={(e)=>setPhotoUrl(e.target.value)}/>
    </label>


    <label className="form-control w-full max-w-xs my-2 ">
      <div className="label  m-2">
 <span className="label-text font-bold">Age</span>
      </div>
      <input type="text" value={age}  className=" input-bordered w-full max-w-xs bg-gray-400 rounded-lg p-2" onChange={(e)=>setAge(e.target.value)}/>
    </label>

        <label className="form-control w-full max-w-xs my-2 ">
      <div className="label  m-2">
 <span className="label-text font-bold">Gender</span>
      </div>
      <input type="text" value={gender}  className=" input-bordered w-full max-w-xs bg-gray-400 rounded-lg p-2" onChange={(e)=>setGender(e.target.value)}/>
    </label>

        <label className="form-control w-full max-w-xs my-2 ">
      <div className="label  m-2">
 <span className="label-text font-bold">About</span>
      </div>
      <input type="text" value={about}  className=" input-bordered w-full max-w-xs bg-gray-400 rounded-lg p-2" onChange={(e)=>setAbout(e.target.value)}/>
    </label>

 </div>
   <p className="text-red-500">{error}</p>
    <div className="card-actions justify-center mt-2">
      <button className="btn btn-primary" onClick={saveProfile} >Save Profile</button>
    </div>
  </div>
</div>
</div>
<UserCard user={{ firstName, lastName,photoUrl, age, gender, about}}/>
</div>
{showToast && (
<div className="toast toast-top toast-center">
 <div className="alert alert-success">
    <span>Profile saved successfully.</span>
  </div>
</div>
)}
</>
  );
};

export default EditProfile
