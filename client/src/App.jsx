import { BrowserRouter, Route, Routes} from "react-router-dom"
import{ PublicRouter,  UserRouter, AdminRouter } from "./pages/router/router"

import './style/CSS/main.css'

function App() {

  return (
    <>
      <BrowserRouter /* basename="/home" */>
        <Routes>
          <Route path="/*" element={<PublicRouter/>}/>
          <Route path="user/*" element={<UserRouter/>}/>
          <Route path="admin/*" element={<AdminRouter/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
