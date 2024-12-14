import Products from "./pages/product"
import Header from "./components/Header"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
<>
<ThemeProvider>
<Header/>
<Products/>
</ThemeProvider>

</>
  )
}

export default App
