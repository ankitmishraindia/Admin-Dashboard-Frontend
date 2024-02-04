import AdCard from "@/components/AdCard";
import AdminCard from "@/components/AdminCard";
import ArticleCard from "@/components/ArticleCard";
import StoryCard from "@/components/StoryCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen ml-[240px] w-[calc(100%-240px)] bg-[#F8FAFB] pb-4">
      {/* ********************nav part******************** */}
      <div className="h-[80px] w-full bg-white px-5 flex items-center justify-between shadow-md">
          <div className="mt-1 py-1 pl-3 pr-8 rounded-3xl cursor-pointer flex gap-3 bg-[#FCFCFD] border">
                      <Image
                        src="/akar-icons_search.png"
                        alt="content"
                        className=""
                        width={30}
                        height={15}
                      />
                      
                      <input type="text" className="bg-transparent py-1 text-sm text-[#CECECE] outline-none" placeholder="Search"/>
            </div>
            <div className="space-x-3 flex">
                  <div className="py-1 px-3 flex items-center space-x-2 border rounded bg-[#FAFAFA]">
                      <div className="space-x-1 text-sm flex">
                        <p>11-10-2022</p>
                        <Image
                        src="/calendar.png"
                        alt="calendar"
                        className=""
                        width={20}
                        height={20}
                      />
                      </div>
                      <p className="text-[13px] opacity-70">OR</p>
                      <div className="space-x-1 text-sm flex">
                        <p>11-10-2022</p>
                        <Image
                        src="/calendar.png"
                        alt="calendar"
                        className=""
                        width={20}
                        height={20}
                      />
                      </div>
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
      </div>

      {/* *******************main part after nav********** */}
      <div className="pl-5 pt-8 space-y-6">
        {/* ********Hello admim section******* */}
        <section className="pr-5">
          <h2 className="text-[35px] font-semibold">Hello Admin,</h2>
          <p className="text-[17px] text-[#A0A3BD] ">This is what we got you for today.</p>
          <div className="flex justify-between w-full mt-5">
            <AdminCard heading="Articles" text="4,950 New Updates" image='helloadmin1.png'/>
            <AdminCard heading="Categories" text="10,275 New Updates" image='helloadmin2.png'/>
            <AdminCard heading="Stories" text="4,193 New Updates" image='helloadmin3.png'/>
            <AdminCard heading="Advertisements" text="928 New Updates" image='helloadmin4.png'/>
            
          </div>
        </section>
        {/* ***************Top articles ***** */}
        <section>
          <div className="flex justify-between w-full pr-5">
            <h2 className="text-[24px] font-semibold">Top Articles</h2>
            <a className="text-[20px] text-[var(--violet-text)] font-semibold" href="">See all</a>
          </div>
              
          <div className=" space-x-2 mt-3 overflow-hidden whitespace-nowrap">
               <ArticleCard 
               image='toparticlesmain1.png' 
               tags={['Branding','Communication','Branding']} 
               type='Buisness'
               status='Created'
               heading='7 Rules of Effective Branding'/>
               <ArticleCard 
               image='toparticlemain3.png' 
               tags={['World','Population']} 
               type='Economy'
               status=''
               heading='Research on biodiversity an..'/>
               <ArticleCard 
               image='toparticlemain2.png' 
               tags={['Politics','Defence']} 
               type='Politics'
               status=''
               heading='Close and historical ties to h..'/>
               <ArticleCard 
               image='toparticlesmain1.png' 
               tags={['Branding','Communication','Branding']} 
               type='Buisness'
               status='Created'
               heading='7 Rules of Effective Branding'/>
              
               
          </div>
        </section>
        {/* ***************Top Stories ***** */}
        <section>
          <div className="flex justify-between w-full pr-5">
            <h2 className="text-[24px] font-semibold">Top Stories</h2>
            <a className="text-[20px] text-[var(--violet-text)] font-semibold" href="">See all</a>
          </div>
              
          <div className="mt-3 w-full space-x-2 overflow-hidden whitespace-nowrap">
               <StoryCard 
               image='topstory1.png' 
               type='Buisness'
               heading='How 7 lines code turned into
               $36 Billion Empire'/>
               <StoryCard 
               image='topstory2.png' 
               type='Buisness'
               status='Created'
               heading='Chez pierre restaurant in Monte Carlo by Vuidafieri'/>
               <StoryCard 
               image='topstory3.png' 
               type='Politics'
               status=''
               heading='Teknion wins Gold at 2022 
               International Design Awards'/>
               <StoryCard 
               image='topstory4.png' 
               type='Buisness'
               status='Created'
               heading='Chez pierre restaurant in Monte Carlo by Vuidafieri'/>
               <StoryCard 
               image='topstory1.png' 
               type='Buisness'
               heading='How 7 lines code turned into
               $36 Billion Empire'/>
          </div>
        </section>
        {/* ***************Advertisement ***** */}
        <section>
          <div className="flex justify-between w-full pr-5">
            <h2 className="text-[24px] font-semibold">Advertisement</h2>
            <a className="text-[20px] text-[var(--violet-text)] font-semibold" href="">See all</a>
          </div>
              
          <div className="mt-3 w-full flex gap-5 pr-5">
               <AdCard 
               image='advertise1.png' 
               heading='Build your business'
               subtext='Shopify has all the tools you need to start, sell, market, and manage.'
               />
               <AdCard 
               image='advertise2.png' 
               heading='Libre Coffee'
               subtext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
               />
               <AdCard 
               image='advertise3.png' 
               heading='KFC'
               subtext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
               />
               
          </div>
        </section>
      </div>
    </main>
  );
}
