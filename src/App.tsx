import { Route, Routes } from "react-router-dom"
import { About, BookPage, Home, Login, NotFound, Profile, Registration } from "./pages"
import Navbar from "./components/Navbar"
import ProtectedRoute from "./utils/ProtectedRoute"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/books/:isbn" element={<BookPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          {/* add any other protected routes here */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App