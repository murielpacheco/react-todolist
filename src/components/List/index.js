import ListItem from '../ListItem';
 
function List(props) {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onDone={props.onDone}
            onItemDeleted={props.onItemDeleted}
          ></ListItem>
        ))}
      </ul>
    </div>
  );
}

export default List;
