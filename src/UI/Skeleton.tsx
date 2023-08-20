import { twMerge } from "tailwind-merge";

interface SkeletonProps {
    className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div className={twMerge("h-10 w-10 animate-pulse bg-gray-200 rounded-full dark:bg-gray-700", className)} />
  )
}

export default Skeleton