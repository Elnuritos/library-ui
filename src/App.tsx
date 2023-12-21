import { Route, Routes } from "react-router-dom"
import { About, BookPage, Home, Login, NotFound } from "./pages"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/books/:isbn" element={<BookPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App