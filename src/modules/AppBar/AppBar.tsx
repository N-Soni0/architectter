import { Link } from 'react-router-dom'
import AuthButtons from './components/AuthButtons'

const AppBar = () => {
  return (
    <div className='py-3 w-full bg-primary'>
        <div className='container flex justify-between items-center'>
            <Link to='/' className='text-2xl text-base-200 font-black   '>
                Architectter
            </Link>

            <AuthButtons />
        </div>
    </div>
  )
}

export default AppBar