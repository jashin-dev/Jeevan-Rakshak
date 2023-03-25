import React , {useState } from 'react'

export default function Registration() {

    const [formData, setFormData] = useState({ firstName :"" , lastName : "" , email: "", password: "" });
    const changeHandler = (e) => {

        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <div className="font-sans antialiased bg-grey-lightest" >


            <div className="w-full bg-grey-lightest pt-[4rem]">
                <div className="container mx-auto py-8">
                    <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                        <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">Register for a free account</div>
                        <form className="py-4 px-8" onSubmit={submitHandler}>
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-1">
                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="first_name">First Name</label>
                                    <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="Your first name" value={formData.firstName} onChange = {changeHandler}/>
                                </div>
                                <div className="w-1/2 ml-1">
                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="last_name">Last Name</label>
                                    <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" placeholder="Your last name" value={formData.lastName} onChange = {changeHandler}/>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Email Address</label>
                                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email address" value={formData.email} onChange = {changeHandler}/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">Password</label>
                                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your secure password" value={formData.password} onChange = {changeHandler}/>
                                    <p className="text-grey text-xs mt-1">At least 6 characters</p>
                            </div>
                            <div className="flex items-center justify-between mt-8">
                                <button className="bg-blue hover:bg-blue-dark text-red-400 font-bold py-2 px-4 rounded-full" type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                    <p className="text-center my-4">
                        <a href="#" className="text-grey-dark text-sm no-underline hover:text-grey-darker">I already have an account</a>
                    </p>
                </div>
            </div>

          
        </div >
    )
}
