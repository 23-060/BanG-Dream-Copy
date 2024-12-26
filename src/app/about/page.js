import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="w-[100%] h-auto p-[100px] overflow-hidden bg-[url('/bg_pattern.png')]">
        <div className="flex justify-center font-['poppins'] font-bold text-[#ffffff] mt-[60px]">
            <button className="bg-[url(/news_pattern.png)] bg-cover px-[200px] rounded-full py-1 text-[30px]">ABOUT</button>
        </div>
      </div>
      <div className="w-[100%] h-auto p-[100px] bg-cover overflow-hidden bg-[url('/about_pattern.png')]">
        <div className="flex justify-center">
            <img className="w-[662px]" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/common/about/ttl_activity.png" alt="banner" />
        </div>
        <div className="flex justify-center mt-[100px]">
            <img src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/common/about/img_activity_3.png" alt="banner2" />
        </div>
      </div>
      <div className="w-[100%] h-auto p-[100px] overflow-hidden bg-[#fffafa]">
        <div className="flex justify-center">
            <div className="mx-5">
                <div className="bg-[#ff3c72] rounded-l-full px-5 text-[#ffffff] font-['poppins'] font-bold flex justify-between h-[58px] w-[550px]">
                    <p className="self-center ml-5 text-[30px]">Adventure</p>
                    <img className="mr-[-27px]" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/common/about/icon_heading.png" alt="star" />
                </div>
                <div className="mt-5 ">
                    <img className="ml-[10px] w-[544px] h-[307px]" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/common/about/img_adventure.png" alt="ss1" />
                    <img className="ml-[-50px]" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/common/about/img_adventure_discover.png" alt="text" />
                </div>
            </div>
            <div className="mx-5">
                <div className="bg-[#ff3c72] rounded-l-full px-5 text-[#ffffff] font-['poppins'] font-bold flex justify-between h-[58px] w-[550px]">
                    <p className="self-center ml-5 text-[30px]">Rhythm Game</p>
                    <img className="mr-[-27px]" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/common/about/icon_heading.png" alt="star" />
                </div>
                <div className="mt-5 ml-[10px]">
                    <img className="w-[544px] h-[307px]" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/common/about/img_rhythm.png" alt="ss2" />
                    <img className="mr-[-100px]" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/common/about/img_rhythm_tap.png" alt="" />
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-[50px]">
            <div className="bg-[#ff3c72] rounded-l-full px-5 text-[#ffffff] font-['poppins'] font-bold flex justify-between h-[58px] w-[100%]">
                <p className="self-center ml-5 text-[30px]">ScreenShot</p>
                <img className="mr-[-27px]" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/common/about/icon_heading.png" alt="star" />
            </div>
        </div>
        <div className="flex justify-center mt-10">
            <img className="mx-[50px] w-[544px] h-[307px]" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/uploads/screenshot1.png" alt="ss1" />
            <img className="mx-[50px] w-[544px] h-[307px] " src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/uploads/screenshot2.png" alt="ss2" />
        </div>
        <div className="flex justify-center mt-10">
            <img className="mx-[50px] w-[544px] h-[307px] " src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/uploads/screenshot3.png" alt="ss2" />
            <img className="mx-[50px] w-[544px] h-[307px]" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/common/about/img_adventure.png" alt="ss1" />
        </div>
      </div>
      <div className="w-[100%] h-auto p-[100px] overflow-hidden bg-[#f4f6f7]">
        <div className="flex justify-center">
            <img className="w-[616px] h-[87px] z-10"  src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/common/about/ttl_overview.png" alt="" />
        </div>
        <div className="flex justify-center bg-[url('/penjelasan.png')] py-[50px]  bg-cover bg-center mt-[-40px] border-x-8 border-x-[#d9d9d9]">
            <div className="w-[100%] bg-[#ffffff] border-x-2 border-x-[#d9d9d9]">
                <div className="flex justify-center ">
                    <img className="m-[80px] self-center w-[320px] h-[168px]" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/common/about/logo.png" alt="" />
                    <img className="m-[80px] self-center w-[586px] h-[381px]" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/common/about/img_kv.png" alt="" />
                </div>
                <div className="px-[50px] font-['poppins'] text-[20px] mb-[50px]">
                “BanG Dream!” is a next generation girls band project that links animated characters with real life performances. It is a media franchise that includes Anime, Games and Live performances. Voice actors from “Poppin’Party” & “Roselia” formed real bands, and are actively performing live. A third live band, “RAISE A SUILEN”, was formed and are in the midst of activities as well.
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
