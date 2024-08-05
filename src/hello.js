import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaEye,FaEyeSlash} from 'react-icons/fa';

function Hello(){
    // const myFunction=()=>{(setValue("Submit"))}
        const[entries,setEntries]=useState([])
       const[table,setTable]=useState(false)
       const[showModal,setshowModal]=useState(false)
       const[showPassword,setShowPassword]=useState(false)
function myFunction(){
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
function handleChange(e){
    setUname(e.target.value); 
}
function handlepassword(e){
    setPassword(e.target.value);
    }
function toggleModal(){
    setshowModal(!showModal);
}
function  toggleShowPassword(){
    setShowPassword(!showPassword);
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
    <h5 className='modal-title'>HEADING</h5>
    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='close'></button> 
    </div>
    <div className='modal-body'>
        <p>signup</p>
    </div>
    <div className='modal-footer'>
        <button type='button' className='btn btn-secondary' data-bs-dismiss='close' onClick={toggleModal}>CLOSE</button>
        <button type='button' className='btn btn-primary'>SUBMIT</button>
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
                {/* <tr><td>{Uname}</td>
                <td>{password}</td></tr> */}
               
        </tbody>
    </table>
    </div>
)
}
   
   </div>
   </div>


   )
}

export default Hello;