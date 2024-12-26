import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
  <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
    <div className="overflow-hidden bg-[url('https://bestdori.com/assets/en/characters/resourceset/res021050_rip/card_normal.png')] w-[100%] h-[100vh] bg-cover bg-center mt-[80px]">
      <div className="flex justify-center">
        <img className="h-[200px]  hover:transition-all transition-all mt-[400px]" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/pc/index/logo.png" alt="bengdrim" />
      </div>
      <div className="flex justify-center mt-2">
        <Link href="https://apps.apple.com/us/app/bang-dream-girls-band-party/id1335529760"><img className="h-[60px] mx-5" src="/appstore.png" alt="App Store" /></Link>
        <Link href="https://play.google.com/store/apps/details?id=com.bushiroad.en.bangdreamgbp"><img className="h-[60px] mx-5" src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png" alt="Play Store" /></Link>
      </div>
    </div>
    <div className="w-[100%] h-auto p-[100px] overflow-hidden bg-[url('/bg_pattern.png')]">
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
  </div>
  
  );
}
