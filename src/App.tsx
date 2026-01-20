import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import type { FilterType } from './types/todo';
import './App.css';

function App() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    activeCount,
    completedCount,
  } = useTodos();

  const filters: FilterType[] = ['all', 'active', 'completed'];

  const filterLabels: Record<FilterType, string> = {
    all: 'すべて',
    active: '未完了',
    completed: '完了',
  };

  return (
    <div className="app">
      <h1 className="title">やることリスト</h1>
      <div className="container">
        <TodoInput onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        <div className="footer">
          <span className="count">残り {activeCount} 件</span>
          <div className="filters">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`filterButton ${filter === f ? 'active' : ''}`}
              >
                {filterLabels[f]}
              </button>
            ))}
          </div>
          {completedCount > 0 && (
            <button
              type="button"
              onClick={clearCompleted}
              className="clearButton"
            >
              完了を削除
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
