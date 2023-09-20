
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import List from './components/List';
import { TodoProvider } from './components/context/TodoContext';

function App() {
  
  
  return (
    <>
    <TodoProvider>
      <section className="todoapp">
      <Form/>
      <List/>
      <Footer/>
      </section>
    </TodoProvider>
    </>
  );
}

export default App;
