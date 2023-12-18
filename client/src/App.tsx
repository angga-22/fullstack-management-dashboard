import './App.css'
import AppRouter from './router/routes'
import { AuthProvider } from "./usecases/useAuth";

function App() {

  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
