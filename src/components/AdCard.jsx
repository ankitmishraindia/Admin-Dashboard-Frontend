import Image from "next/image";

function AdCard({image,heading,subtext}){


    return(
        <div className=" bg-white rounded-lg space-y-1 w-fit flex shadow-[0_0_5px_gray]">
            <div>
                <Image
                                        src={`/${image}`}
                                        alt="articleimage"
                                        className="rounded-md"
                                        width={400}
                                        height={200}
                                        
                                    />
            </div>
            <div className="p-2 flex flex-col justify-between">
                <h1 className="text-[20px] font-semibold">{heading}</h1>
                <p className="text-sm">{subtext}</p>
                <div className="flex justify-between w-full">
                
                   <button className="bg-[var(--violet-light)] text-[var(--violet-text)]  py-2 w-[70%] font-bold rounded-md">View</button>
                
                    <div className="py-2 px-3 bg-[#FAFAFA] flex items-center rounded-md space-x-[2px]">
                        <div className="rounded-full w-1 h-1 bg-[var(--violet-dark)]"></div>
                        <div className="rounded-full w-1 h-1 bg-[var(--violet-dark)]"></div>
                        <div className="rounded-full w-1 h-1 bg-[var(--violet-dark)]"></div>
                   </div>
                </div>
            </div>
            
            
            
            
            
            
        </div>
    )
}
export default AdCard;