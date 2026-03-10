import Link from "next/link"

interface SidebarProps{
    header: string;
    sectionList: string[];
}

function Sidebar({ header, sectionList }: SidebarProps) {
    return (
        <aside className="flex-col h-196 px-36 hidden md:flex w-1/3 pt-8">
            <div className="border-b border-gray-900">
                <h1 className="text-2xl font-extrabold ">{header}</h1>
            </div>
            {sectionList.map((section, index) => <Link className="text-bold text-sm text-gray-900 py-4 hover:underline hover:underline-offset-2" href={`/people/${section.toLocaleLowerCase().replaceAll(" ", "-")}`} key={index}>{section}</Link>)}
        </aside>
     );
}

export default Sidebar;