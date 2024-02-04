
import Image from "next/image";

function StoryDetail(){

    return(
      
    <main className="h-screen ml-[240px] w-[calc(100%-240px)]">
      {/* ********************nav part******************** */}
      <div className="h-[80px] w-full bg-white px-5 flex items-center justify-between shadow-md">

                  <div className="flex items-center gap-3">
                       <Image
                            src="/backarrow.png"
                            alt="topstory"
                            className="rounded-md"
                            width={16}
                            height={16}
                        />
                        <p className="text-2xl font-bold">Stories</p>
                  </div>
                  <div className="p-1 flex items-center gap-10 border border-[#E8EFF7] rounded bg-[#FCFCFD]">
                      
                      <div className="space-x-1 text-sm flex items-center">
                        
                        <Image
                        src="/image 11.png"
                        alt="image11"
                        className=""
                        width={33}
                        height={33}
                       />
                        <div className="leading-none">
                          <p className="text-[10px]">Welcome Back</p>
                          <p className="text-[17px]">Akshita Patel</p>
                        </div>
                        
                      </div>
                      <Image
                        src="/Arrow - Down 2.png"
                        alt="image11"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                  </div>
            
      </div>

      {/* *******************main part after nav********** */}
      <div className="px-6 pt-14 w-full h-full">
          <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Image
                            src="/storypage-profile.png"
                            alt="topstory"
                            className="rounded-md"
                            width={40}
                            height={40}
                        />
                        <p className="text-sm text-[grey] font-semibold">James Robert</p>
                        <p className="text-sm text-[#58A4FF] font-semibold">Created on 13 January 2022</p>
                        
                      </div>
                      <div className="flex gap-3">
                          <div className="py-2 px-3 bg-[#FAFAFA] flex items-center rounded-md space-x-[2px]">
                               <p className="text-sm font-semibold">Accessbility</p>
                                  <Image
                                       src="/storypage-downfill.png"
                                      alt="topstory"
                                      className="rounded-md"
                                      width={24}
                                      height={24}                           
                                      />
                           </div>
                           <div className="py-2 px-3 bg-[#FAFAFA] flex items-center rounded-md space-x-[2px]">
                                                  <div className="rounded-full w-1 h-1 bg-[var(--violet-dark)]"></div>
                                                  <div className="rounded-full w-1 h-1 bg-[var(--violet-dark)]"></div>
                                                  <div className="rounded-full w-1 h-1 bg-[var(--violet-dark)]"></div>
                            </div>                
                      </div>
                      
                        
          </div>
          <div className="w-full h-full relative mt-3 flex justify-center">
              <Image
              src="/storypage-blurimage.png"
              alt="topstory"
              fill                
              />
              <div className="absolute h-full w-full flex items-center gap-3 p-2">
                                <Image
                                       src="/storypage-rightarrow.png"
                                      alt="topstory"
                                      className="rounded-md"
                                      width={24}
                                      height={24}                           
                                  />
                                <div className="relative h-full w-8/12">
                                    <Image
                                       src="/storypage-lightimage.png"
                                      alt="topstory"
                                      className="rounded-md"
                                      fill
                                      objectFit="cover"                           
                                    />
                                </div>
                                
                                <Image
                                       src="/storypage-leftarrow.png"
                                      alt="topstory"
                                      className="rounded-md"
                                      width={24}
                                      height={24}                           
                                  />
              </div>
          </div>
      </div>
    </main>
    
    )
}
export default StoryDetail;