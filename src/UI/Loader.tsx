import { twMerge } from "tailwind-merge"

interface LoaderProps extends React.HTMLAttributes<HTMLElement> {

}

const Loader: React.FC<LoaderProps> = ({ className, ...props }) => {
  return (
    <span className={twMerge("loading loading-spinner", className)} {...props}></span>
  )
}

export default Loader