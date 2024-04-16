'use client'

import { useRef, FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import styles from './contact.module.scss'

interface InputProps {
  name: string
  type: string
  label: string
  className: string
  required: boolean
}

const Contact = () => {
  const [isSubmit, setIsSubmit] = useState(false)
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmit(true)
    emailjs
      .sendForm(
        'service_1n6ur22',
        'template_b66z2l6',
        form.current!,
        'e9NDfAo7shMdtQHdr'
      )
      .then(
        () => {
          toast.success('Message sent')
          setIsSubmit(false)
        },
        (error) => {
          toast.error(`There was an error ${error}. Please try again`)
          setIsSubmit(false)
        }
      )
    if (form.current) {
      form.current.reset()
    }
  }

  const Input = ({ className, name, type, label, required }: InputProps) => (
    <div className={styles.group}>
      <input
        name={name}
        type={type}
        className={className}
        required={required}
        autoComplete='off'
      />
      <label className={styles.label}>{label}</label>
    </div>
  )

  return (
    <div className='container-md'>
      <h1 className={styles.pageTitle}>Get in touch</h1>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <Input
          name='name'
          type='text'
          label='Name'
          className={styles.input}
          required
        />
        <Input
          name='email'
          type='text'
          label='E-mail'
          className={styles.input}
          required
        />
        <Input
          name='message'
          type='text'
          label='Message'
          className={styles.input}
          required
        />
        <button type='submit' disabled={isSubmit} className={styles.sendBtn}>
          {isSubmit ? 'Sending...' : 'Send message'}
        </button>
      </form>
    </div>
  )
}

export default Contact
