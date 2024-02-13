import { Route, Routes } from "react-router-dom"
import { About, Home, Login, NotFound, Profile, Registration } from "./pages"
import Navbar from "./components/Navbar"
import ProtectedRoute from "./utils/ProtectedRoute"
import AddPublicationPage from "./components/Publication/AddPublicationPage"
import EditPublicationPage from "./components/Publication/EditPublicationPage"
import PublicationDetailsPage from "./components/Publication/PublicationDetailsPage"

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

        <Route path="/add-publication" element={<AddPublicationPage />} />
        <Route path="/update-publication/:id" element={<EditPublicationPage />} />

        <Route path="/publications/:id" element={<PublicationDetailsPage />} />

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