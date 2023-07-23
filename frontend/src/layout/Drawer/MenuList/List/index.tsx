import { List as MuiList } from '@mui/material/';

import ListItem from './ListItem';

const List = ({ itemlist }) => {
  return (
    <MuiList>
      {itemlist?.map((item: any, index) => (
        <ListItem
          key={index}
          text={item.text}
          icon={item.icon}
          path={item.path}
        />
      ))}
    </MuiList>
  );
};

export default List;
