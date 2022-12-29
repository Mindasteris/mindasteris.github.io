import React, { useState } from 'react'
import {TextareaAutosize, TextField } from '@mui/material'

const Contact = () => {
  const [nameField, setNameField] = useState('')
  const [emailField, setEmailField] = useState('')
  const [subjectField, setSubjectField] = useState('')
  const [messageField, setMessageField] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(nameField, emailField)

    if(nameField.length == 0 || emailField.length == 0) {
      setError(true)
    }

    if(nameField && emailField && subjectField && messageField) {
      alert('Thank You for Contacting me!')
      return window.location.reload()
    }
  }

  return (
    <div className='container mx-auto text-center my-10'>
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit}>
        <div className='space-y-4 mx-4 md:w-[80%] lg:w-[60%] xl:w-[40%] md:mx-auto'>
          <div><TextField onChange={(e) => setNameField(e.target.value)} id="outlined-basic" label="Name" variant="outlined" className='w-full' autoFocus /></div>
          
          {error && nameField.length <= 0 ? <label className='error'>Name field can't be empty!</label> : ''}

          <div><TextField onChange={(e) => setEmailField(e.target.value)} id="outlined-basic" label="Email" variant="outlined" className='w-full' /></div>
          
          {error && emailField.length <= 0 ? <label className='error'>Email field can't be empty!</label> : ''}
          
          <div><TextField onChange={(e) => setSubjectField(e.target.value)} id="outlined-basic" label="Subject" variant="outlined" className='w-full' /></div>

          {error && subjectField.length <= 0 ? <label className='error'>Subject field can't be empty!</label> : ''}

          <div><TextareaAutosize onChange={(e) => setMessageField(e.target.value)} minRows={10} placeholder='Your Message' className='w-full border border-black rounded-md p-2' /></div>

          {error && messageField.length <= 0 ? <label className='error'>Message field can't be empty!</label> : ''}

          <div><button type='submit' className='bg-black p-4 w-full text-white rounded-md hover:-translate-y-2 duration-300'>Send</button></div>
        </div>
      </form>
    </div>
    )
}

export default Contact