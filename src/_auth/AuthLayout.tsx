import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
      <Navigate to="/"/>
      ) : (
          <>
            <section className="w-screen bg-gradient-to-r from-blue to-bg flex flex-1 justify-center items-center">
              <div className=" bg-white px-10 py-10 rounded-2xl">
                <Outlet />
              </div>
            </section> 
          </>
      ) }
    </>
  )
}

export default AuthLayout;