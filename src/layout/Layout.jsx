import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
export const Layout = () => {
  return (
    <>
        <div className="bg-gradient-to-r from-slate-900 to-slate-950">      
            <Header />
                <main className="container mx-auto mt-10">
                    <Outlet /> 
                </main>
            <Footer />
        </div>
    </>
  )
}
