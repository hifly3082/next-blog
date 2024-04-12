'use client'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from './contact.module.scss'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_1n6ur22', 'template_6ljxed4', form.current, {
        publicKey: 'e9NDfAo7shMdtQHdr'
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
    e.target.reset()
  }

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      {/* <p className='title'>Register </p>
        <p className='message'>Signup now and get full access to our app. </p> */}
      <div className={styles.flex}>
        <label>
          <input
            className={styles.input}
            type='text'
            name='name'
            placeholder=''
          />
          <span>Your name</span>
        </label>
      </div>

      <label>
        <input
          className={styles.input}
          type='email'
          name='email'
          placeholder=''
        />
        <span>E-mail</span>
      </label>

      <label>
        <textarea className={styles.input} type='password' placeholder='' />
        <span>Message</span>
      </label>
      <button type='submit' value='Send' className={styles.submit}>
        Submit
      </button>
    </form>
  )
}

export default Contact
