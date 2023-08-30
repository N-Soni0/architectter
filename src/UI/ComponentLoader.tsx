import { twMerge } from "tailwind-merge"
import Loader from "./Loader"

type Props = React.ComponentProps<'div'> & {
    loaderClassName?: string;
}

const ComponentLoader = ({className, loaderClassName, ...props}: Props) => {
  return (
    <div className={twMerge('absolute bg-black bg-opacity-40 flex items-center justify-center top-0 left-0 w-full h-full', className)} {...props}>
        <Loader className={twMerge('w-6 h-6', loaderClassName)} />
    </div>
  )
}

export default ComponentLoader