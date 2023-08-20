import React from 'react'
import { twMerge } from 'tailwind-merge'
import { UseFormRegisterReturn } from 'react-hook-form'


interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegisterReturn;
    label?: string;
    error?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ className, register, label, ...props }) => {
  return (
    <div className='flex items-center gap-3'>
        <label className='text-sm'>{label}</label>
        <input className={twMerge('checkbox checkbox-sm', className)} type='checkbox' {...register} {...props} />
    </div>
  )
}

export default Checkbox