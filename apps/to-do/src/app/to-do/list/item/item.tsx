import { Checkbox } from '@material-ui/core';

import { ItemProps } from '../../../entities/item-entity';

import styles from './item.module.scss';

export function ItemComponent(props: ItemProps) {
  return (
    <div className={styles.Item}>
      <Checkbox
        checked={props.item.done}
        onChange={(e) => props.handleItemChange(props.item, e)}
      ></Checkbox>
      <span> {props.item.title} </span>
    </div>
  );
}
