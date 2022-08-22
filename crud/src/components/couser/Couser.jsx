import React, { useState } from 'react';
import './couser.css'

const Couser = ({couser, setCoUser, handleAgain}) => {
    

  return (
    <div>
        <>
        <p>Co-Applicant :</p>
                    <div className="main">
                    <select name="title" id="title" className='title' value={couser.title} onChange={handleAgain}>
                        <option value="none" selected hidden>Title</option>
                        <option value="mr">Mr</option>
                        <option value="mrs">Mrs</option>
                        <option value="miss">Miss</option>
                    </select>
                    <input name='name' type="text" className='box' placeholder='Name*' value={couser.name} onChange={handleAgain}/>
                    <input name='surname' type="text" className='box' placeholder='Surname' value={couser.surname} onChange={handleAgain}/>
                    <label className='dob'>DOB</label>
                    <input name='date' type="date" className='date' value={couser.dob} onChange={handleAgain}/>
                    <select name="gender" id="gender" className='gender' value={couser.gender} onChange={handleAgain}>
                        <option value="none" selected hidden>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <select name="relation" required id="relation" className='relation' value={couser.relation} onChange={handleAgain}>
                        <option value="none" selected hidden>Relation *</option>
                        <option value="father">Parent</option>
                        <option value="mother">Child</option>
                        
                    </select>
                    </div>
        </>
    </div>
  )
}

export default Couser