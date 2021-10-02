import CardItem from '../CardItem';

function DoneIcon(props) {
  if (props.done) {
    return <i className="fas fa-check"></i>;
  } else {
    return <i className="fas fa-check"></i>;
  }
}

function ListItem(props) {
  return (
    <div>
      <li>
        <CardItem className={props.item.done ? 'done item' : 'item'}>
          {props.item.text}
          <div className="itemsButtons">
            <button
              onClick={() => {
                props.onDone(props.item);
              }}
            >
              <DoneIcon done={props.item.done}></DoneIcon>
            </button>
            <button
              onClick={() => {
                props.onItemDeleted(props.item);
              }}
            >
              X
            </button>
          </div>
        </CardItem>
      </li>
    </div>
  );
}

export default ListItem;
