import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const AdminSignUp = () => {

    const [psassword, setPassword] = useState('')
    const [email, setemail] = useState('')

    const handleSignUp = () => {

        axios.post('http://localhost:3001/admin/sign', {
            username: email,
            password: psassword
        })
            .then((response) => {
                console.log(response);
                localStorage.setItem('signUptoken', response.data.token)
                // console.log(response.data.token);
            })
            .catch((error) => { console.log(error) })
    }


    return (
        <section className='bg-[#391484] h-screen w-screen'>
            <div className="container">
                <div className='grid grid-cols-1 justify-items-center content-center h-screen '>
                    <div className='min-w-[540px] min-h-[611px] px-16 py-12 bg-white rounded-3xl'>
                        <div className='text-center'>
                            <div className='font-bold font-primary text-[#391484] text-2xl'>JIYANI <span className='text-base text-black'>TechLabs</span> </div>
                            <h1 className='font-bold text-4xl leading-[46px] font-primary mt-6'>Let’s Sign You Up</h1>
                        </div>
                        <div className='flex flex-col justify-center mt-12'>
                            <div className='relative'>
                                <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Your email' className='py-4 pl-16 pr-11 font-normal font-primary text-base leading-6 text-[#12022F] bg-[#ececf0] w-full rounded-full focus:outline-[#cacada]' />
                                <span className='absolute left-5 top-1/3'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3H7C4.23858 3 2 5.23858 2 8V16C2 18.7614 4.23858 21 7 21H16.9919L17.2087 20.9952C19.8687 20.8794 21.9901 18.6885 21.9939 16.0014L21.997 8.006L22 7.99797C22 5.23601 19.7607 2.99747 17 3ZM17.0009 5L17.1771 5.00494C18.6929 5.09145 19.907 6.30518 19.9949 7.8217L19.998 7.99949L19.9939 15.9995C19.9916 17.6556 18.6479 18.9985 16.991 19H7C5.34315 19 4 17.6569 4 16V8C4 6.34315 5.34315 5 7 5L17.0009 5Z" fill="#391484" />
                                        <g opacity="0.5">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 8.29289C7.65338 7.93241 8.22061 7.90468 8.6129 8.2097L8.70711 8.29289L9.87868 9.46447C11.0034 10.5892 12.799 10.6342 13.9773 9.59943L14.1213 9.46447L15.2929 8.29289C15.6834 7.90237 16.3166 7.90237 16.7071 8.29289C17.0676 8.65338 17.0953 9.22061 16.7903 9.6129L16.7071 9.70711L15.5355 10.8787C13.6421 12.7721 10.6078 12.8295 8.64525 11.0508L8.46447 10.8787L7.29289 9.70711C6.90237 9.31658 6.90237 8.68342 7.29289 8.29289Z" fill="#391484" />
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            <div className='mt-4 relative'>
                                <input type="text" value={psassword} onChange={(e) => setPassword(e.target.value)} placeholder='Your password' className='py-4 pl-16 pr-11 font-normal font-primary text-base leading-6 text-[#12022F] bg-[#ececf0] w-full rounded-full focus:outline-[#cacada]' />
                                <span className='absolute left-5 top-1/3'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8H8C5.23858 8 3 10.2386 3 13V17C3 19.7614 5.23858 22 8 22H16C18.7614 22 21 19.7614 21 17V13C21 10.2386 18.7614 8 16 8ZM8 10H16C17.6569 10 19 11.3431 19 13V17C19 18.6569 17.6569 20 16 20H8C6.34315 20 5 18.6569 5 17V13C5 11.3431 6.34315 10 8 10ZM12 13C11.4477 13 11 13.4477 11 14V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V14C13 13.4477 12.5523 13 12 13Z" fill="#391484" />
                                        <g opacity="0.5">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C14.89 2 16.8924 4.06728 16.9958 6.84958L17 7.07671V8.99996C17 9.55224 16.5523 9.99996 16 9.99996C15.4872 9.99996 15.0645 9.61392 15.0067 9.11658L15 8.99996V7.07671C15 5.25479 13.8307 4 12 4C10.2328 4 9.09149 5.1519 9.00522 6.86605L9 7.0588V8.99996C9 9.55224 8.55228 9.99996 8 9.99996C7.48716 9.99996 7.06449 9.61392 7.00673 9.11658L7 8.99996L7.00001 7.05451C7.01241 4.15921 9.03349 2 12 2Z" fill="#391484" />
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            <button className='mt-6 font-bold font-primary text-base leading-6 text-[#391484]'>Forgot Password?</button>
                            <button onClick={() => handleSignUp()} className='mt-10 py-4 font-bold font-primary text-base leading-6 bg-[#FFDDA9] rounded-full hover:bg-[#f0cc99]'>Sign Up</button>
                        </div>
                        <div className='border border-[#E7E5EA] mt-10 mb-10'></div>
                        <div className='text-center'>
                            <p className='font-bold text-base font-primary text-[#594D6D] leading-6'>Don't have an account?<span className='text-[#391484]'>Sign Up</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminSignUp
