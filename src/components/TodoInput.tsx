import { useState, useCallback } from 'react';
import styles from './TodoInput.module.css';

interface Props {
  onAdd: (text: string) => void;
}

export function TodoInput({ onAdd }: Props) {
  const [text, setText] = useState('');

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (text.trim()) {
        onAdd(text);
        setText('');
      }
    },
    [text, onAdd]
  );

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="何をする？"
        className={styles.input}
        autoFocus
      />
      <button type="submit" className={styles.button}>
        追加
      </button>
    </form>
  );
}
