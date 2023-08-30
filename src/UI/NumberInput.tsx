import React from 'react'
import { twMerge } from 'tailwind-merge';
import { UseFormRegisterReturn } from 'react-hook-form'

interface NumberInputProps extends React.ComponentProps<'input'> {
    register: UseFormRegisterReturn;
    label?: string;
    error?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({ error, className, register, label, required, ...props }) => {
  return (
    <div className='form-control'>
        <label className='mb-2 text-sm'>{label} {required ? <span className='text-accent'>*</span> : ''}</label>
        
        <input  
          {...props} 
          className={twMerge('input', className)} 
          type='number' 
          {...register} 
        />

        <label className="label">
            <span className="label-text-alt text-error">{error}</span>
        </label>
    </div>
    
  )
}

export default NumberInput