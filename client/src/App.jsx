import { BrowserRouter, Route, Routes} from "react-router-dom"
import{ PublicRouter,  UserRouter, AdminRouter } from "./router/router"

import '@/style/CSS/main.css'
import AuthGuard from "@/_helpers/auth/authGuard"
import AdminGuard from "./_helpers/auth/adminGuard"

function App() {

  return (
    <>
      <BrowserRouter /* basename="/home" */>
        <Routes>
          <Route path="/*" element={<PublicRouter/>}/>
          
            <Route path="user/*" element={
              <AuthGuard>
                <UserRouter/>
              </AuthGuard>
            }/>
            <Route path="admin/*" element={
            <AuthGuard>
              <AdminGuard>
                <AdminRouter/>
              </AdminGuard>
            </AuthGuard>
            }/>
          
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
