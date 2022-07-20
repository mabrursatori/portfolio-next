import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg'
import emailjs from '@emailjs/browser';
import { MdClose } from "react-icons/md";
import { AiFillSmile } from "react-icons/ai";
import { FaSadCry } from "react-icons/fa";

const Contact = () => {
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showFailedToast, setShowFailedToast] = useState(false);
    const form = useRef();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const resetForm = () => {
        setName('');
        setPhone('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    const sendEmail = e => {
        e.preventDefault();

        if(!name && !phone && !email && !subject && !message){
            setShowFailedToast(true);
            setTimeout(() => {
                setShowFailedToast(false);
            }, 3000);
            return;
        }

        emailjs.sendForm(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.EMAILJS_PUBLIC_KEY
        )
                    .then(function() {
                        console.log('SUCCESS!');
                        setShowSuccessToast(true);
                        resetForm();
                        setTimeout(() => {
                            setShowSuccessToast(false);
                        }, 3000);
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
    };

    const closeToast = () => {
        setShowSuccessToast(false);
        setShowFailedToast(false);
    }


    
    

  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Contact
            </p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}
                <div  className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                        <Image
                        className='rounded-xl hover:scale-105 ease-in duration-300'
                        src={ContactImg}
                        alt='/'
                        />
                        </div>
                        <div>
                            <h2 className='py-2'>Mabrur</h2>
                            <p>Full-Stack Developer</p>
                            <p className='py-4'>I am available for freelance or full-time positions. Contact me and lets talk.</p>
                        </div>
                        <div>
                        <p className='uppercase pt-8'>Connect With Me</p>
                        <div className='flex items-center justify-between py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href='https://www.linkedin.com/in/mabrur-371b44195/' target="_blank" rel='noreferrer'>
                        <FaLinkedinIn/>
                        </a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <a href="https://github.com/mabrursatori" target="_blank" rel='noreferrer'>
                                <FaGithub/>
                                </a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <a href = "mailto:mabrursatori@gmail.com" target="_blank" rel='noreferrer'>
                                    <AiOutlineMail/>
                                </a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <a href="https://api.whatsapp.com/send?phone=6285624436317" target="_blank" rel='noreferrer'>
                                    <BsFillPersonLinesFill/>
                                </a>
                                </div>
                        </div>
                    </div>
                    </div>
                   
                </div>
                {/* rigth */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input value={name} onChange={(e) => {setName((prev) => e.target.value  )}} 
                                    className='border-2 rounded-lg p-3 flex border-gray-300'
                                    type='text' name='name'
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input value={phone} onChange={(e) => setPhone((prev) => e.target.value)} className='border-2 rounded-lg p-3 flex border-gray-300'
                                    type='text' name='phone'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input
                                value={email} onChange={(e) => setEmail((prev) => e.target.value)} 
                                className='border-2 rounded-lg p-3 flex border-gray-300' 
                                type='email'
                                name='email'
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input
                                value={subject} onChange={(e) => setSubject((prev) => e.target.value)} 
                                className='border-2 rounded-lg p-3 flex border-gray-300' 
                                name='subject'
                                type='text'/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3' rows='10' name='message' defaultValue={message} onChange={(e) => setMessage((prev) => e.target.value)} ></textarea>
                            </div>
                            <button type='submit' className='w-full p-4 bg-[#5651e5] text-gray-100 mt-4'>Send Message</button>
                        </form>
                    </div>
                </div>
               
            </div>
                {/* Success Toast */}
                <div
                className={`flex justify-evenly items-center fixed  h-[70px] w-[250px] bg-green-200  right-[50px] rounded-lg shadow-lg shadow-gray-500 ${showSuccessToast ? 'opacity-100 top-[100px]' : 'opacity-0 top-[50px]'} ease-in duration-100`}
                >
                    <p>Your message sent <AiFillSmile className='inline text-yellow-500 text-[25px]'/>
                    <br/> Please wait for my reply </p>
                    <MdClose onClick={closeToast} className='text-[30px] cursor-pointer'/>
                </div>

                {/* Failed Toast */}
                <div
                className={`flex justify-evenly items-center fixed  h-[70px] w-[250px] bg-red-200  right-[50px] rounded-lg shadow-lg shadow-gray-500 ${showFailedToast ? 'opacity-100 top-[100px]' : 'opacity-0 top-[50px]'} ease-in duration-100`}
                >
                    <p>Your message is&#39;nt sent <FaSadCry className='inline text-yellow-500 text-[25px]'/>
                    <br/> Please fill the form </p>
                    <MdClose onClick={closeToast} className='text-[30px] cursor-pointer'/>
                </div>
            <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
                        </div>
                    </Link>
                </div>
        </div>
    </div>
  )
}

export default Contact