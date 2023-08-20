import ListItem from "../UI/ListItem"

const EmptyListItem = () => {
  return (
    <ListItem className="flex justify-center items-center pointer-events-none">
        <h4 className="opacity-80">You have <span className="font-bold">0</span> models :(</h4>
    </ListItem>
  )
}

export default EmptyListItem