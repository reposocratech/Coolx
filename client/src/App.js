import { AppRoutes } from './routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactForm } from './components/forms/ContactForm';


function App() {

  return (
    <div>
      <AppRoutes/>
      <ContactForm/>
  
    </div>
  );
}

export default App;
