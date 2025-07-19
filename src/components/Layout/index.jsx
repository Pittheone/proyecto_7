import { Outlet } from "react-router-dom"
import Header from "./Header"

const Layout = () => {
    return(
        <>
            <div className='flex flex-col h-screen justify-between'>
                <Header />
                <main className="mb-auto">
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default Layout
