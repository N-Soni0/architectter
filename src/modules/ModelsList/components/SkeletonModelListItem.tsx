import Skeleton from "@/UI/Skeleton"
import ListItem from "./ListItem"

const SkeletonModelListItem = () => {
  return (
    <ListItem className="relative bg-transparent">
        <Skeleton className="absolute w-full h-full rounded-sm" />
        <Skeleton className="absolute w-[50%] top-6 left-3 h-2.5 rounded-sm dark:bg-gray-500" />
        <Skeleton className="absolute w-[15%] top-6 left-[60%] h-2.5 rounded-sm dark:bg-gray-500" />
        <Skeleton className="absolute w-[70%] top-10 left-3 h-2.5 rounded-sm dark:bg-gray-500" />


        <Skeleton className="absolute w-[30%] top-[6rem] left-3 h-2 rounded-sm dark:bg-gray-500" />
        <Skeleton className="absolute w-[50%] top-[6rem] left-[40%] h-2 rounded-sm dark:bg-gray-500" />
        <Skeleton className="absolute w-[60%] top-[6.8rem] left-3 h-2 rounded-sm dark:bg-gray-500" />
        <Skeleton className="absolute w-[20%] top-[6.8rem] left-[70%] h-2 rounded-sm dark:bg-gray-500" />
    </ListItem>
  )
}

export default SkeletonModelListItem