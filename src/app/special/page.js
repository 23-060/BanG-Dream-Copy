import Image from "next/image";

const comiclist = [
  {
    date: "2024.05.27",
    title: "Eve Wakamiya.3gp",
    image: "/tempcomic_fourframe_325_01.png"
  },
  {
    date: "2024.04.17",
    title: "Tante Rui Srutal Begs!",
    image: "/tempcomic_fourframe_324_01.jpg"
  },
  {
    date: "2024.03.15",
    title: "Mana Ikan Bilisnya?!",
    image: "/tempcomic_fourframe_326_01.jpg"
  },
  {
    date: "2024.02.07",
    title: "Mbak Asahi Rokka Girang!",
    image: "/tempcomic_fourframe_327_01.jpg"
  },
  {
    date: "2024.01.29",
    title: "Grub Koplo",
    image: "/tempcomic_fourframe_328_01.jpg"
  },
  {
    date: "2023.12.22",
    title: "Pareo Maling Pangsit!",
    image: "/tempcomic_fourframe_329_01.jpg"
  }
];

function renderComic({ date, title, image }) {
  return (
    <div className="flex items-center hover:bg-rose-100 active:bg-rose-200 cursor-pointer p-4 border-2 border-pink-200 bg-pink-50 rounded-lg my-4 shadow-2xl w-[1160px] h-[194px] mx-auto">
      <div className="mr-5">
        <Image src={image} alt={title} width={143} height={196} className="rounded-md w-[200px] h-[150px]" />
      </div>
      <div className="flex flex-col flex-1">
        <span className="text-pink-500 text-[20px]">{date}</span>
        <span className="text-pink-600 text-[30px] font-bold">{title}</span>
      </div>
      <div className="self-end w-[30px] text-pink-400">
        <Image src="/tempicon_double-arrow_right_pink.png" alt="double arrow" width={50} height={50}/>
      </div>
    </div>
  );
}

function Spesial() {
  return (
    <div>
      <div className="w-full h-auto p-24 overflow-hidden bg-[url('/bg_pattern.png')]">
        <div className="flex justify-center font-['Poppins'] font-bold text-white mt-14">
          <button className="bg-[url('/news_pattern.png')] bg-cover px-24 rounded-full py-1 text-2xl">
            Special
          </button>
        </div>
      </div>
      <div className="w-full h-auto p-24 overflow-hidden">
        <div className="flex justify-center font-['Poppins'] font-bold text-white">
          <button className="border-4 border-rose-500 bg-rose-500 py-2 rounded-full px-20 text-xl font-bold mx-5">
            4-koma Comic
          </button>
        </div>
      </div>
      <div className="w-full mb-36 overflow-hidden">
        <div className="flex justify-center font-['Poppins'] font-bold text-white ml-[-350px]">
          <Image src="/tempbg_activity.png" alt="garpa" width={1000} height={200} className="mr-[-660px] h-[300px]" />
          <Image src="/templogo_garpalife.png" alt="garpa" width={472} height={182} className=" self-center" />
        </div>
      </div>
      <div className="flex justify-center my-12 px-36">
        <div className="bg-[#ff3c72] rounded-full px-5 text-white flex font-['Poppins'] font-bold py-3 w-full text-xl">
          <i className="bi bi-star-fill mx-5"></i>
          <p className="self-center">Past Chapter</p>
        </div>
      </div>
      <div className="px-4 my-10">
        {comiclist.map((comic, index) => (
          <div key={index}>{renderComic(comic)}</div>
        ))}
      </div>
      <div className="flex justify-center font-['poppins'] font-bold text-rose-400 mb-[100px]">
        <button className="bg-[#ffffff] active:scale-125 hover:bg-[#DADADA] hover:transition-all transition-all pl-[100px] rounded-xl border-2 border-[#797979] py-5 text-[20px]">
          More <i className="bi bi-chevron-right ml-[80px] mr-[10px]"></i>
        </button>
      </div>
    </div>
  );
}

export default Spesial;
