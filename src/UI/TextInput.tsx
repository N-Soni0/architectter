import React from 'react'
import { twMerge } from 'tailwind-merge';
import { UseFormRegisterReturn } from 'react-hook-form'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegisterReturn;
    label?: string;
    error?: string;
}

const TextInput: React.FC<TextInputProps> = ({ error, className, register, label, required, ...props }) => {
  return (
    <div className='form-control'>
        <label className='mb-2 text-sm'>{label} {required ? <span className='text-accent'>*</span> : ''}</label>

        <input  
          {...props} 
          className={twMerge('input', className)} 
          type='text' 
          {...register} 
        />

        <label className="label">
            <span className="label-text-alt text-error">{error}</span>
        </label>
    </div>
    
  )
}

export default TextInput