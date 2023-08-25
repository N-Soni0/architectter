import {Html} from '@react-three/drei';
import { motion } from 'framer-motion';
import { FC } from 'react';

interface LabelProps {
    children?: React.ReactNode;
}

const Label: FC<LabelProps> = ({ children }) => {
  return (
    <Html position={[0, 0, 0]} >
      <motion.div 
        className='bg-black bg-opacity-75 absolute -translate-x-1/2 -translate-y-[100%] -top-5 py-2 px-5 rounded-md flex items-center justify-center'
        initial={{opacity: 0 }}
        animate={{opacity: 1 }}
        transition={{duration: .15}}
      >
          {children} 

          {/* Triangle */}
          <div className='border-solid border-t-black border-opacity-75 border-t-8 border-x-transparent border-x-8 border-b-0  absolute bottom-0 translate-y-[95%]' />
      </motion.div>
  </Html>
  )
}

export default Label