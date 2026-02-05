import Link from "next/link"

interface SidebarProps{
    header: string;
    sectionList: string[];
}

function Sidebar({ header, sectionList }: SidebarProps) {
    return (
        <aside className="flex-col h-196 w-96 bg-gray-200 hidden md:flex">
            <div className="border-b border-gray-900 p-4 m-8">
                <h1 className="text-center text-2xl font-extrabold ">{header}</h1>
            </div>
            {sectionList.map((section, index) => <Link className="border-b border-gray-900 p-4 m-2" href={`/${section}`} key={index}>{section}</Link>)}
        </aside>
     );
}

export default Sidebar;