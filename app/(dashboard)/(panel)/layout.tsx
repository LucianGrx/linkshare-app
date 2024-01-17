import { Navbar } from "./_components/navbar";

const PanelLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="h-full">
            <Navbar />
            {children}
        </div>
    )
}

export default PanelLayout;