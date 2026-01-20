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

  return (
    <div className="app">
      <h1 className="title">Todo App</h1>
      <div className="container">
        <TodoInput onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        <div className="footer">
          <span className="count">{activeCount} items left</span>
          <div className="filters">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`filterButton ${filter === f ? 'active' : ''}`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
          {completedCount > 0 && (
            <button
              type="button"
              onClick={clearCompleted}
              className="clearButton"
            >
              Clear completed
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
