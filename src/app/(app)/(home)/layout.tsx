import Navbar from "@/components/navbar";
import Footer from "@/components/ui/footer";

export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={"flex flex-col min-h-screen"}>
            <Navbar/>
            <div className={"flex-1"}>
                {children}
            </div>
            <Footer/>
        </div>
    );
}
