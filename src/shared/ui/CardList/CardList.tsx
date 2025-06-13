import { FC, PropsWithChildren } from 'react';

import styles from './CardList.module.css';

export const CardList: FC<PropsWithChildren> = (props) => (
  <ul className={styles.list}>{props.children}</ul>
);
