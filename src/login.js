import {useState} from 'react';
import {Bounce,ToastContainer,toast} from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaEye,FaEyeSlash} from 'react-icons/fa';

import 'react-toastify/dist/ReactToastify.css';

   const Login=()=>{
    // const myFunction=()=>{(setValue("Submit"))}
        const[entries,setEntries]=useState([])
       const[table,setTable]=useState(false)
       const[showModal,setshowModal]=useState(false)
       const[showPassword,setShowPassword]=useState(false)  
    //    const[msgdisplay,setmsgdisplay]=useState(false)
    const myFunction=()=>{
    setTable(true);
    if(Uname.trim() !==""&&password.trim()!==""){
    if (!entries.some(entry=>entry.Uname===Uname&& entry.password===password)){
        setEntries([...entries,{Uname,password}]);
    }
    setUname("");
    setPassword("");
}
}
        const[Uname,setUname]=useState("")
        const[password,setPassword]=useState("")
 const handleChange=(e)=>{
    setUname(e.target.value); 
}
const handlepassword=(e)=>{
    setPassword(e.target.value);
    }
const toggleModal=()=>{
    setshowModal(!showModal);
}
const toggleShowPassword=()=>{
    setShowPassword(!showPassword);
}

const msgdisplay=()=>{
    toast.success('Submitted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
}

   return(

    <div className="row justify-content-center">
    
   <div className='col-md-3 mt-6'>
   <h1>Login</h1>

    <label for="Uname">USERNAME :</label><br/>
    <input type="text" id="Uname" name="Uname" onChange={(e)=>handleChange(e)}/><br/>
    <label for="password">Password :</label><br/>
    <div className='input-group'><input type={showPassword? "text":"password"} id="password" name="Password" onChange={(e)=>handlepassword(e)} />
    <button type='button' className='btn btn-outline-secondary' onClick={toggleShowPassword}>{showPassword? <FaEyeSlash/>:<FaEye/>}</button>
    </div>
    <br/><br/>
    <button onClick={myFunction} className="btn btn-primary">Login</button><br/><br/>
    <a href='#' onClick={toggleModal}>signin</a><br/><br/>
    {showModal &&(
    <div className='modal' style={{display:'block',backgroundColor:'rgba(0,0,0,0.5)'}}tabIndex={-1}>
        <div className='modal-dialog'>
            <div className='modal-content'>
                <div className='modal-header'>
    <h5 className='modal-title'>SIGNUP</h5>
    {/* <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='close'></button>  */}
    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='close' onClick={toggleModal}></button>
    </div>
    <div className='modal-body'>
        <label for="Email">E-MAIL:</label><br/>
            <input type="text" id="Email" name="Email"/><br/>
            <label for ="PASSWORD">PASSWORD:</label><br/>
            <input type="text" id="PASSWORD" name="PASSWORD"/>
    </div>
    <div className='modal-footer'>
        <button type='button' className='btn btn-secondary' data-bs-dismiss='close' onClick={toggleModal}>CLOSE</button>
        <button type='button' className='btn btn-primary' onClick={msgdisplay}>SUBMIT</button>
    </div>
    </div>
    </div>
    </div>
    )}
    
    {table &&(
    <div className="table-responsive">
    <table className="table table-bordered table-primary">
        <thead className='thead-dark'>
            <tr>
                <td>UserName</td>
                <td>Password</td>
            </tr>
        </thead>
        <tbody>
        {entries.map((entry,index)=>(
            <tr key={index}>
                <td>{entry.Uname}</td>
                <td>{entry.password}</td>
            </tr>
        ))}
               
        </tbody>
    </table>
    </div>
)
}
   
   </div>
   <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition= {Bounce}
/>
{/* Same as */}
<ToastContainer />
   </div>


   )
}

export default Login;