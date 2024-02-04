import Image from "next/image";
import Link from "next/link";

function StoryCard({image,status,type,heading}){


    return(
        <div className=" rounded-lg space-y-1 inline-block relative">
             <Image
                        src={`/${image}`}
                        alt="topstory"
                        className="rounded-md"
                        width={250}
                        height={400}
                      />
              <div className="absolute z-10 flex gap-1 top-1 right-2 w-fit">
                 <div className="py-1 px-2 bg-white flex items-center rounded-md gap-1">
                    <Image
                            src="/storytopimage2.png"
                            alt="topstory"
                            className="rounded-md"
                            width={16}
                            height={16}
                        />
                    <p className="text-[13px] text-[var(--violet-text)] font-semibold">428</p>
                 </div>
                 <div className="py-1 px-2 bg-white flex items-center rounded-md gap-1">
                    <Image
                            src="/storytopimage1.png"
                            alt="topstory"
                            className="rounded-md"
                            width={16}
                            height={16}
                        />
                    
                 </div>
              </div>
              <div className="absolute bottom-0 z-10 text-white w-full p-3 space-y-2 overflow-hidden">
                
                     <h2 className=" text-[17px] font-semibold text-wrap w-full">{heading}</h2>
                        
                    
                    <div className="flex items-center justify-between text-[13px]">
                            
                            <p className=" font-semibold ">{type}</p>
                            <div className="w-2 h-2 bg-[var(--grey-text)] rounded-full"></div>
                            <span className="text-gray-200 text-[13px] "> 22 Sep 2022</span>
                            {status==='Created'?
                            <div className="text-[#58A4FF] bg-[#DAF1FB] py-1 px-2 rounded-md font-semibold text-sm">Created</div>:
                            <div className="bg-[#E4FFF8] text-[#0DAD82] py-1 px-2 rounded-md font-semibold text-sm">Published</div>    
                        }
                    </div>
                    
                    
                    <div className="flex justify-between w-full ">
                        
                            <Link href="/StoryDetail" className="w-full">
                                <button className="bg-[var(--violet-light)] text-[var(--violet-text)]  py-2 w-[93%] font-bold rounded-md">View</button>
                            </Link>
                        
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
export default StoryCard;