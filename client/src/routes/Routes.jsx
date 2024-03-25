import Home from '../components/Home';
import StuntList from '../components/StuntsList';
import Faq from '../components/Faq';
import InsertStunt from '../components/crud/InsertStunt';
import EditStunt from '../components/crud/EditStunt';
import UpdateForm from '../components/crud/UpdateForm';
import Login from '../components/Login';

const routes = [
  { path: "/", element: <Home /> },
  { path: "/stunt", element: <StuntList /> },
  { path: "/faq", element: <Faq /> },
  { path: "/login", element: <Login /> },
  { path: "/addstunt", element: <InsertStunt /> },
  { path: "/editstunt", element: <EditStunt /> },
  { path: "/update/:id", element: <UpdateForm /> },
];

export default routes;
