import ListItem from '../UI/ListItem'
import Skeleton from '@/UI/Skeleton'

const ListItemSkeleton = () => {
  return (
    <ListItem className='pointer-events-none bg-transparent relative h-14 flex'>
        <Skeleton className='absolute top-0 left-0 h-full w-full rounded-sm' />

        <Skeleton className='absolute top-1/2 left-0 rounded-sm dark:bg-gray-500 bg-gray-500 -translate-y-1/2 w-12 h-full' />

        <Skeleton className='absolute top-1/2 left-16 h-4 w-[25%] dark:bg-gray-500 bg-gray-500 rounded-sm -translate-y-1/2' />
        <Skeleton className='absolute top-1/2 left-[42%] h-4 w-[50%] dark:bg-gray-500 bg-gray-500 rounded-sm -translate-y-1/2' />
    </ListItem>
  )
}

export default ListItemSkeleton