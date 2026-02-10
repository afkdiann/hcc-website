interface SectionCardProps {
    header: string;
}

function SectionCard({ header }: SectionCardProps) {
    return ( 
        <div className="w-full bg-black bg-[url('/assets/section-header.png')] bg-cover bg-center m-4 flex justify-center items-center">
            <h1 className="text-2xl font-bold text-white p-4">{header}</h1>
        </div>
     );
}

export default SectionCard;