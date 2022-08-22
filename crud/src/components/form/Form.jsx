import React, { useState } from 'react';
import Couser from '../couser/Couser';
import './form.css'

const Form = () => {
    const [user, setUser] = useState({
        title : "",
        name: "",
        surname: "",
        date: "",
        gender: "",
    });
    
    const [couser, setCoUser] = useState([{
        title : "",
        name: "",
        surname: "",
        date: "",
        gender: "",
        relation: ""
    }]);
   
    let name, value;

    const handleChange = (e) => {
        // console.log(e.target);
       name = e.target.name;

       value= e.target.value;
       setUser({...user, [name]: value});
    }

    const handleAgain = (e) => {
        // console.log(e.target);
       name = e.target.name;

       value= e.target.value;
       setCoUser({...couser, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked")
        console.log(user, couser)
    }
    const[couserCount, setCoUserCount] = useState(1);

    const addCoUser = ()=>{
        setCoUserCount(couserCount + 1);
    }

    return (
        <div className='form'>
            <div className="topBtn">
                <button>Create Traveller</button>
                <button>Edit Traveller</button>
            </div>
            <form className='inputForm'>
                <div className="first">
                    <select name="visa-type" id="visa-type" className='visa'>
                        <option value="none" selected disabled hidden>VISA TYPE</option>
                        <option value="tourist">Tourist</option>
                        <option value="transit">Transit</option>
                        <option value="business">Business</option>
                        <option value="employment">Employment</option>
                    </select>
                    <label className='dept'>DEPART</label>
                    <input type="date" className='date'/>
                    <label className='return'>RETURN</label>
                    <input type="date" className='date'/>
                </div>

                <div className="second">
                    <p>Traveller Names</p>
                    <p>1. Main Applicant</p>
                    <div className="main">
                    <select name="title" id="title" className='title' value={user.title} onChange={handleChange}>
                        <option value="none" selected hidden>Title</option>
                        <option value="mr">Mr</option>
                        <option value="mrs">Mrs</option>
                        <option value="miss">Miss</option>
                    </select>
                    <input name="name" type="text" className='box' placeholder='Name*' value={user.name} onChange={handleChange}/>
                    <input name="surname" type="text" className='box' placeholder='Surname' value={user.surname} onChange={handleChange}/>
                    <label className='dob'>DOB</label>
                    <input name="date" type="date" className='date' value={user.dob} onChange={handleChange}/>
                    <select name="gender" id="gender" className='gender' value={user.gender} onChange={handleChange}>
                        <option value="none" selected hidden>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    </div>
                
                    <Couser couser={couser} setCoUser={setCoUser} handleAgain={handleAgain}/>
                    
                    <button className='btn2'>+ co-applicant</button>
                    <button className='save' onClick={handleSubmit}>Save</button>
                </div>

                
                
            </form>
        </div>
    )
}

                export default Form