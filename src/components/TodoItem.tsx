import { memo } from 'react';
import type { Todo } from '../types/todo';
import styles from './TodoItem.module.css';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = memo(function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className={styles.checkbox}
        />
        <span className={`${styles.text} ${todo.completed ? styles.completed : ''}`}>
          {todo.text}
        </span>
      </label>
      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        className={styles.deleteButton}
        aria-label="Delete todo"
      >
        &times;
      </button>
    </li>
  );
});
