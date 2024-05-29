import { ReactNode } from "react";
import styles from "./index.module.css";

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return <div className={styles.card}>{children}</div>;
}
