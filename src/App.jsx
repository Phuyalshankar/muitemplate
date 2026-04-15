import Login from './mui/templates/Login';
import Register from './mui/templates/Register';
import Table from './mui/templates/Table';
import { currentTemplate } from './mui/config';

function App() {
  let TemplateComponent;
  switch (currentTemplate) {
    case 'login':
      TemplateComponent = Login;
      break;
    case 'register':
      TemplateComponent = Register;
      break;
    case 'table':
      TemplateComponent = Table;
      break;
    default:
      TemplateComponent = Login;
  }
  return <TemplateComponent />;
}

export default App;