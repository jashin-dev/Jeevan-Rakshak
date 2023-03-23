import React, { useState } from 'react'

export default function RequestForm() {

    const [formData, setFormData] = useState({ firstName: "", lastName: "",emailId: "" ,  bloodGrp: "B+" , detailText : "" });

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const changeHandler = (e) => {
       
        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    return (

        <div >
            <form onSubmit={submitHandler} className='w-[500px] flex flex-col justify-center items-center gap-5 mx-auto'>
                <div>
                    <input
                        type="text"
                        placeholder='Patient First Name'
                        name="firstName"
                        value={formData.firstName}
                        onChange={changeHandler}
                    />

                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Patient Last Name'
                        name="lastName"
                        value={formData.lastName}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder='Patient Email-Id'
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <select 
                        name = "bloodGrp"
                        id = "bloodGrp"
                        value = {formData.bloodGrp} 
                        onChange = {changeHandler}
                    >
                    <option value = {"A+"} >A+</option>
                    <option value = {"A-"} >A-</option>
                    <option value = {"B+"} >B+</option>
                    <option value = {"B-"} >B-</option>
                    <option value = {"O+"} >O+</option>
                    <option value = {"O-"} >O-</option>
                    </select>
                    <label htmlFor='bloodGrp'>Please select the Blood Group required </label>
                </div>

                <div>
                    <textarea 
                    placeholder='Please enter the required Details'
                    id = "detailText"
                    name = "detailText"
                    value = {formData.detailText}
                    onChange = {changeHandler}
                    ></textarea>
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}
