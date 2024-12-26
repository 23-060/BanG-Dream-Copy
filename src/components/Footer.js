export default function footer(){
    return (
        <div className="overflow-hidden bg-[url('/footerbg.png')] w-[100%] h-[100vh] p-[50px] bg-cover bg-center font-['poppins']">
          <div className="flex justify-center">
                <div className="mt-[70px] mx-[50px]">
                    <div className="mb-5">
                        <img className="h-[110px] hover:opacity-75 active:h-[115px] hover:transition-all transition-all" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/pc/index/logo.png" alt="bengdrim" />
                    </div>
                    <div className="flex justify-center">
                        <img className="h-[150px] mx-2" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/common/footer/icon_app.png" alt="" />
                        <img className="h-[150px] mx-2" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/common/footer/img_qr.png" alt="" />           
                    </div>
                </div>
                <div className="mt-[70px] mx-[50px]">
                    <div className="font-semibold">
                        <div className="flex">
                            <div className="text-rose-400 mr-[66px] mt-2">
                                <i className="bi bi-star-fill"></i> Genre :
                            </div>
                            <div className="mt-2">
                                Rhythm & Adventure game
                            </div>
                        </div>

                        <div className="flex">
                            <div className="text-rose-400 mr-[52px] mt-2">
                                <i className="bi bi-star-fill"></i> App Type
                            </div>
                            <div className="mt-2">
                                Free play (In-App Purchases)
                            </div>
                        </div>

                        <div className="flex">
                            <div className="text-rose-400 mr-[52px] mt-2">
                                <i className="bi bi-star-fill"></i> Publisher
                            </div>
                            <div className="mt-2">
                                Bushiroad International Pte Ltd
                            </div>
                        </div>

                        <div className="flex">
                            <div className="text-rose-400 mr-[30px] mt-2">
                                <i className="bi bi-star-fill"></i> OS Required
                            </div>
                            <div className="mt-2">
                                iPhone 8.0 and above, Android 9.0 and above
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-5">
                        <a href="https://apps.apple.com/us/app/bang-dream-girls-band-party/id1335529760"><img className="h-[60px] mr-2" src="/appstore.png" alt="App Store" /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.bushiroad.en.bangdreamgbp"><img className="h-[60px] ml-2" src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png" alt="Play Store" /></a>
                    </div>
                    <div className="mt-8">
                        <p><i className="bi bi-flower1"></i> Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries</p>
                        <p><i className="bi bi-flower1"></i> pp Store is a service mark of Apple Inc., registered in the U.S. and other countries.</p>
                        <p><i className="bi bi-flower1"></i> Google Play and the Google Play logo are trademarks of Google LLC.</p>
                    </div>
                </div>
            </div>
          <div className="flex justify-center mt-[50px] text-rose-400">
              <p className="text-[30px] font-bold">SHARE</p>
              <p className="text-[50px] ml-[20px] hover:opacity-75 mt-[-15px] text-[#2980b9]"><i className="bi bi-facebook"></i></p>
              <p className="text-[50px] ml-[20px] hover:opacity-75 mt-[-15px] text-[#2ecc71]"><i className="bi bi-whatsapp"></i></p>
              <p className="text-[50px] ml-[20px] hover:opacity-75 mt-[-15px] text-[#000000]"><i className="bi bi-twitter-x"></i></p>
          </div>
          <div className="flex justify-center mt-5">
              <img className="hover:opacity-75" src="https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/pc/footer/logo_bang-dream.png" alt="BD" />
          </div>
        </div>
      );
}