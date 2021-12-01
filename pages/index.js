import Head from 'next/head';
import React from 'react';
import { FaTwitter, FaTwitch, FaLinkedinIn, FaGithub, FaDiscord } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Formik, Field, Form } from 'formik';

class Contact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {showForm: false};
  }
  openForm = (event) => {    
    this.setState({showForm: true});
  }
  closeForm = (event) => {
    this.setState({showForm: false});
  }
  render() {
    if(this.state.showForm){
      return(      
      <div className="flex flex-col items-center p-3 font-bold w-96 rounded-xl cursor-default">        
            <div onClick={this.closeForm}><AiFillCloseCircle className="fill-current text-gray-200 w-6 h-6 hover:text-yellow-500"/></div>
            <Formik 
              initialValues={{name: '', message: '', contact: ''}}
              onSubmit={async (values) => {
                this.closeForm();
              }}
              >
            <Form className="w-full flex flex-col items-center justify-center">
              <label className="block" htmlFor="name">Name*</label>
              <Field id="name" name="name" placeholder="Name" className="px-1 shadow appearance-none border rounded w-full focus:outline-none focus:shadow-outline text-black"/>
              <label className="block" htmlFor="contact">Contact*</label>
              <Field id="contact" name="contact" placeholder="Your contact details (email, Discord, anything)" className="px-1 shadow appearance-none border rounded w-full focus:outline-none focus:shadow-outline text-black"/>
              <label className="block" htmlFor="message">Message*</label>
              <Field component="textarea" name="message" id="message" placeholder="Insert your message here" className="px-1 shadow appearance-none border rounded w-full focus:outline-none focus:shadow-outline text-black"/>
              <button type="submit" className="bg-black rounded mt-2 px-2 pb-1 font-bold hover:bg-red-800">Send message</button>
            </Form>
            </Formik>
      </div>
      )
    }else{ //return when div has not been clicked
      return (
        <div className="animate-pulse flex flex-col items-center justify-center p-3 font-bold hover:bg-yellow-500 rounded-full border-white border-4" onClick={this.openForm}>
            <HiMail />        
            Contact me!          
        </div>
      )
    }
    
  }
}

export default function Home() {
  return (
    <div className="select-none font-sans absolute inset-0 justify-center min-h-screen bg-gray-800 text-white">
      <div className="h-screen py-2 flex flex-col justify-between">
      <Head>
        <title>@lyrete | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="container mx-auto justify-center text-center space-y-4">
          <h1 className="text-3xl md:text-7xl font-bold">Tommi Alajoki</h1>          
          <h2 className="text-xl md:text-l">Web Developer</h2>       
          <div className="divide-y flex border justify-self-center mx-auto max-w-lg bg-white" />
          <div id="logos" className="flex items-center justify-center mx-auto space-x-3">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/lyrete">
              <FaGithub className="fill-current text-gray-200 w-6 h-6 hover:text-yellow-500"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tommi-alajoki-561233113/">
              <FaLinkedinIn className="fill-current text-gray-200 w-6 h-6 hover:text-yellow-500"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/lyrete">
              <FaTwitter className="fill-current text-gray-200 w-6 h-6 hover:text-yellow-500"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitch.tv/lyrete">
              <FaTwitch className="fill-current text-gray-200 w-6 h-6 hover:text-yellow-500"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://discordapp.com/users/111293089846423552/">
              <FaDiscord className="fill-current text-gray-200 w-6 h-6 hover:text-yellow-500"/>
            </a>
          </div>
        </div>
      </main>

      <div className="absolute bottom-5 right-5">
        <Contact />
      </div>

      <footer className="flex flex-col items-center justify-center mx-auto text-gray-400">
        <div className="flex items-center justify-center mx-auto space-x-3">
          <div className="self-end">© 2021</div>
          <div>|</div>
          <div className="self-start">Tommi Alajoki</div>
        </div>
      </footer>
    </div>
    </div>
  )
}
