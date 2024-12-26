import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-[100%] h-auto mt-[70px] p-[100px] overflow-hidden bg-[url('/bg_pattern.png')]">
        <div className="flex justify-center font-['poppins'] font-bold text-[#ffffff]">
            <button className="bg-[url(/news_pattern.png)] bg-cover px-[200px] rounded-full py-1 text-[30px]">NEWS</button>
        </div>
        <div className="flex justify-center mt-[100px]">
            <div className='flex bg-[#ffffff] hover:bg-rose-200 hover:transition-all transition-all cursor-pointer border-2 border-rose-400 rounded-xl'>
                <div className="mr-5">
                    <img className="w-[400px] h-[210px]" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/uploads/notice_2024.png" alt="event1" />
                </div>
                <div className="ml-5 mt-5 px-[50px] py-5">
                    <p className="text-rose-400 font-bold text-[20px] mb-5">2024.09.05</p>
                    <p>Update on Version Issues for BanG Dream! Girls Band Party! English Version</p>
                </div>
                <div className="ml-5 text-rose-400 text-[20px] px-[50px] py-5 self-end">
                    <i className="bi bi-chevron-double-right"></i>
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-[50px]">
            <div className='flex bg-[#ffffff] hover:bg-rose-200 hover:transition-all transition-all cursor-pointer border-2 border-rose-400 rounded-xl'>
                <div className="mr-5">
                    <img className="w-[400px] h-[210px]" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/uploads/notice_2024.png" alt="event1" />
                </div>
                <div className="ml-5 mt-5 px-[50px] py-5">
                    <p className="text-rose-400 font-bold text-[20px] mb-5">2024.08.19</p>
                    <p>Update on Version Issues for BanG Dream! Girls Band Party! English Version</p>
                </div>
                <div className="ml-5 text-rose-400 text-[20px] px-[50px] py-5 self-end">
                    <i className="bi bi-chevron-double-right"></i>
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-[50px]">
            <div className='flex bg-[#ffffff] hover:bg-rose-200 hover:transition-all transition-all cursor-pointer border-2 border-rose-400 rounded-xl'>
                <div className="mr-5">
                    <img className="w-[400px] h-[210px]" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/uploads/notice_2024.png" alt="event1" />
                </div>
                <div className="ml-5 mt-5 px-[50px] py-5">
                    <p className="text-rose-400 font-bold text-[20px] mb-5">2024.07.22</p>
                    <p>Update on Version Issues for BanG Dream! Girls Band Party! English Version</p>
                </div>
                <div className="ml-5 text-rose-400 text-[20px] px-[50px] py-5 self-end">
                    <i className="bi bi-chevron-double-right"></i>
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-[50px]">
            <div className='flex bg-[#ffffff] hover:bg-rose-200 hover:transition-all transition-all cursor-pointer border-2 border-rose-400 rounded-xl'>
                <div className="mr-5">
                    <img className="w-[400px] h-[210px]" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/uploads/notice_2024.png" alt="event1" />
                </div>
                <div className="ml-5 mt-5 px-[50px] py-5">
                    <p className="text-rose-400 font-bold text-[20px] mb-5">2024.06.11</p>
                    <p>Update on Version Issues for BanG Dream! Girls Band Party! English Version</p>
                </div>
                <div className="ml-5 text-rose-400 text-[20px] px-[50px] py-5 self-end">
                    <i className="bi bi-chevron-double-right"></i>
                </div>
            </div>
        </div>
        <div className="flex justify-center font-['poppins'] font-bold text-rose-400 mt-[50px]">
            <button className="bg-[#ffffff] active:h-[80px] active:w-[300px] hover:bg-[#DADADA] hover:transition-all transition-all pl-[100px] rounded-xl border-2 border-[#797979] py-5 text-[20px]">More <i className="bi bi-chevron-right ml-[80px] mr-[10px]"></i></button>
        </div>
      </div>
  );
}
