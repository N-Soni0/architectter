import ListItem from "../UI/ListItem"

const EmptyListItem = () => {
  return (
    <ListItem className="flex justify-center items-center pointer-events-none">
        <h4 className="opacity-80">You have no models</h4>
    </ListItem>
  )
}

export default EmptyListItem