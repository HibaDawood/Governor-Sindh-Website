import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans w-full overflow-x-hidden">
      {/* Navbar */}
      <div className="fixed z-50 w-full">
      <header>
        <nav className="bg-[#254b91]  h-[72px] flex flex-wrap items-center ">
          <div className="">
            <h1
              className="text-sky-200 text-2xl font-semibold items-start font-sans py-4 
          tracking-tighter pl-48 md:pl-48"
            >
              Tuition Free Education Program on Latest Technologies
            </h1>
          </div>

          <div
            className="text-neutral-200 font-sans font-medium py-6 flex flex-wrap 
          justify-center md:justify-end ml-36 "
          >
            <Link className="mr-6" href={"/"}>
              Home
            </Link>
            <Link className="mr-6" href={"/"}>
              Apply
            </Link>
            <Link className="mr-6" href={"/"}>
              Jobs
            </Link>
            <Link className="mr-6" href={"/"}>
              Result
            </Link>
            <Link className="mr-6" href={"/"}>
              Courses
            </Link>
          </div>
        </nav>

        {/* logo */}
        <div>
          <Image
            src={"/picture/govlogo.png"}
            alt="logo"
            width={85}
            height={85}
            className="flex justify-start md:justify-start -mt-12 ml-6 "
          ></Image>
        </div>
      </header>
      </div>
        <div className="overflow-hidden relative after:absolute after:bg-opacity-25
         z-10 after:inset-0 "
        >
        </div>
        

      <div className="flex flex-col md:flex-row mt-28 justify-between ">
        <div className="flex flex-col ">
          <h1 className="text-[#254b91] font-extrabold text-6xl mt-10 ml-6 tracking-wide">
            Governor Sindh
          </h1>
          <h2 className="text-[#254b91] font-normal text-4xl mt-2 ml-6 tracking-widest">
            Kamran Khan Tessori
          </h2>

          <div className="text-sky-500 text-4xl font-extrabold flex flex-col ml-6 mt-5 tracking-widest">
            <p>Certified Cloud</p>
            <p>Applied Generative AI</p>
            <p>Engineer (GenEng)</p>
          </div>

          <h2 className="text-[#254b91] text-2xl font-extrabold ml-6 mt-6">
            Earn up to $5,000 / month
          </h2>
          <h2 className="text-[#254b91] text-2xl font-extrabold mt-4 ml-6">
            Now admissions are open in <br />
            Hyderabad
          </h2>

          {/* button */}
          <div className="flex items-center mt-9">
            <div
              className="w-44 h-12 ml-6 bg-[#254b91] rounded-lg hover:translate-y-2 flex justify-center 
          items-center mt-9"
            >
              <button className="text-white font-bold ">Apply Now</button>
            </div>

            {/* Admission number */}
            <div className="mt-7 ml-24 text-[#254b91]">
              <p className="font-extrabold text-3xl tracking-widest ml-7">
                562,143
              </p>
              <p className="tracking-widest">Accepted Applications</p>
            </div>
          </div>
        </div>

        {/* Governor's image */}
        <div className=" flex justify-end -mr-56 -mt-10">
          <Image
            src={"/picture/governorImg.png"}
            alt="governor's image"
            width={850}
            height={850}
          ></Image>
        </div>
      </div>

      <div>
        <h1 className="text-[#254b91] font-bold text-4xl tracking-tighter text-center mt-16">
          Certified Cloud Applied Generative AI Engineer (GenEng) and
          Solopreneur
        </h1>
        <h1 className="text-[#254b91] font-bold text-4xl tracking-tighter text-center">
          Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>

        <p className="font-medium text-lg tracking-wide mt-8 text-justify mx-5">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-8 h-64 justify-evenly mx-5 md:mx-0">
        <Image
          src={"/picture/WebSlideImg1.jpg"}
          alt="slide_Img_1"
          width={350}
          height={100}
          className="shadow-2xl shadow-black rounded-lg"
        ></Image>
        <Image
          src={"/picture/WebSlideImg2.jpg"}
          alt="slide_Img_2"
          width={350}
          height={100}
          className="shadow-2xl shadow-black rounded-lg"
        ></Image>
        <Image
          src={"/picture/WebSlideImg3.jpg"}
          alt="slide_Img_3"
          width={350}
          height={100}
          className="shadow-2xl shadow-black rounded-lg "
        ></Image>
      </div>

      {/* sldeShowImage */}

      <div className="flex flex-col md:flex-row justify-evenly mt-7 h-3/6">
        <Image
          src={"/picture/slideShow1.jpg"}
          alt="slide_Show_Img"
          width={600}
          height={2000}
          className="rounded-lg shadow-black shadow-xl"
        ></Image>
        <Image
          src={"/picture/slideShow2.jpg"}
          alt="slide_Show_Img"
          width={600}
          height={2000}
          className="rounded-lg shadow-black shadow-xl "
        ></Image>
      </div>

      {/* Cards */}
      <h1 className="font-bold text-4xl mt-28 text-[#254b91] ">
        Core Courses Sequence
      </h1>
      <div className="flex justify-evenly ml-4 mr-[328px] mx-2 rounded  text-slate-700 ">
        {/* CoreCourseCard1 */}

        <div
          className="card card-compact tracking-tight bg-base-100 w-72 h-40 mb-28 mt-10
 shadow-black shadow-lg hover:scale-105 duration-200 transition-all will-change-transform
 font-semibold rounded-lg"
        >
          <figure>
            <img
              src="/picture/coreCoursesImg1.jpg"
              alt="core_Course-Card1"
              className="rounded-lg"
            />
          </figure>
          <div className="card-body shadow-black shadow-sm rounded-sm">
            <h2 className="card-title py-5 text-center">
              Programming Fundamentals
            </h2>
          </div>
        </div>

        {/* CoreCourseCard2 */}

        <div
          className="card card-compact bg-base-100 w-72 h-40 mb-28 mt-10 shadow-black
 shadow-lg hover:scale-105 duration-200 transition-all tracking-tight will-change-transform
 font-semibold mx-4"
        >
          <figure>
            <img
              src="/picture/coreCoursesImg2.jpg"
              alt="core_Course-Card2"
              className="rounded-lg"
            />
          </figure>
          <div className="card-body shadow-black shadow-sm rounded-sm">
            <h2 className="card-title py-5 text-center">Web2 Using NextJS</h2>
          </div>
        </div>
        {/* CoreCourseCard3 */}

        <div
          className="card card-compact bg-base-100 w-72 h-40 mb-28 mt-10 shadow-black
 shadow-lg hover:scale-105 duration-200 transition-all tracking-tight will-change-transform
 font-semibold"
        >
          <figure>
            <img
              src="/picture/coreCoursesImg3.jpg"
              alt="core_Course-Card3"
              className="rounded-lg"
            />
          </figure>
          <div className="card-body shadow-black shadow-sm rounded-sm">
            <h2 className="card-title py-5 text-center">Earn as You Learn</h2>
          </div>
        </div>
      </div>

      {/* AdvanceCouses */}
      <h1 className="font-bold text-4xl mt-10 text-[#254b91]">
        Advanced Courses
      </h1>
      <div className="flex justify-evenly ml-0 text-slate-700">
        {/* AdvanceCourseCard1 */}

        <div
          className="card card-compact bg-base-100 w-72 h-40 mb-28 mt-10
 shadow-black shadow-lg hover:scale-105 duration-200 tracking-tight transition-all will-change-transform
 font-semibold "
        >
          <figure>
            <img
              src="/picture/AdvCoreImg1.jpg"
              alt="Advance_Course-Card1"
              className="rounded-lg"
            />
          </figure>
          <div className="card-body shadow-black shadow-sm rounded-sm">
            <h2 className="card-title py-5 text-center">
              Artificial Intelligence
            </h2>
          </div>
        </div>

        {/* AdvanceCourseCard2 */}

        <div
          className="card card-compact bg-base-100 w-72 h-40 mb-28 mt-10 shadow-black
 shadow-lg hover:scale-105 duration-200 transition-all tracking-tight will-change-transform
 font-semibold"
        >
          <figure>
            <img
              src="/picture/AdvCoreImg2.jpg"
              alt="Advance_Course-Card2"
              className="rounded-lg"
            />
          </figure>
          <div className="card-body shadow-black shadow-sm rounded-sm">
            <h2 className="card-title py-5 text-center">Web 3 and Metaverse</h2>
          </div>
        </div>
        {/* AdvanceCourseCard3 */}

        <div
          className="card card-compact bg-base-100 w-72 h-40 mb-28 mt-10 shadow-black
 shadow-lg hover:scale-105 duration-200 transition-all tracking-tightwill-change-transform
 font-semibold"
        >
          <figure>
            <img
              src="/picture/AdvCoreImg3.jpg"
              alt="Advance_Course-Card3"
              className="rounded-lg"
            />
          </figure>
          <div className="card-body shadow-black shadow-sm rounded-sm">
            <h2 className="card-title py-5 text-center">
              Cloud-native Computing
            </h2>
          </div>
        </div>

        {/* AdvanceCourseCard4 */}
        <div
          className="card card-compact bg-base-100 w-72 h-40 mb-28 mt-10
 shadow-black shadow-lg hover:scale-105 duration-200 transition-all tracking-tight will-change-transform
 font-semibold "
        >
          <figure>
            <img
              src="/picture/AdvCoreImg4.jpg"
              alt="Advance_Course-Card4"
              className="rounded-lg"
            />
          </figure>
          <div className="card-body shadow-black shadow-sm rounded-sm">
            <h2 className="card-title py-5 text-center">
              Ambient Native and loT
            </h2>
          </div>
        </div>
      </div>

      <div className="flex text-slate-700">
        {/* AdvanceCourseCard5 */}

        <div
          className="card card-compact bg-base-100 w-72 h-40 mb-28 mt-10 ml-2
 shadow-black shadow-lg hover:scale-105 duration-200 transition-all will-change-transform
 font-semibold tracking-tight"
        >
          <figure>
            <img
              src="/picture/AdvCoreImg5.jpg"
              alt="Advance_Course-Card5"
              className="rounded-lg"
            />
          </figure>
          <div className="card-body shadow-black shadow-sm rounded-sm">
            <h2 className="card-title py-5 text-center">
              Genomics and Bioinformatics
            </h2>
          </div>
        </div>

        {/* AdvanceCourseCard6 */}

        <div
          className="card card-compact bg-base-100 w-72 h-40 mb-28 mt-10 ml-4
           tracking-tight shadow-black
 shadow-lg hover:scale-105 duration-200 transition-all will-change-transform
 font-semibold"
        >
          <figure>
            <img
              src="/picture/AdvCoreImg6.jpg"
              alt="Advance_Course-Card6"
              className="rounded-lg"
            />
          </figure>
          <div className="card-body shadow-black shadow-sm rounded-sm">
            <h2 className="card-title py-2 text-center">
              Networt Programmability and Automation
            </h2>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-200 h-96 pt-2 mt-12 ">
        <footer className="">
          <div className="flex flex-col md:flex-row justify-evenly mt-20 ">
            <div className=" -ml-24 text-black ">
              <h1 className="font-bold text-lg">Core Courses</h1>
              <p className="mt-4">Programming Fundamentals</p>
              <p className="mt-2">Web2 using NextJS</p>
              <p className="mt-2">Earn as you learn</p>
            </div>
            <div className="  text-black ">
              <h1 className="font-bold text-lg">Advanced Courses</h1>
              <p className="mt-4">Web3 and Metaverse</p>
              <p className="mt-2">Cloud-Native Computing</p>
              <p className="mt-2">
                Artificiall Intelligence (AI) and Deep Learning
              </p>
              <p className="mt-2">Ambient Computing and loT</p>
              <p className="mt-2">genomics and Bioinformatics</p>
              <p className="mt-2">Network Progammability and Automation</p>
            </div>
            <div>
              <div className=" flex">
                <h1 className="font-bold text-lg ">Social Links</h1>

                <Image
                  src={"/picture/facebookLogo.png"}
                  alt="Facebook_Logo"
                  width={30}
                  height={60}
                  className="mt-14 h-10 -ml-24 w-7 mr-3"
                ></Image>
                <Image
                  src={"/picture/youtube1.webp"}
                  alt="you"
                  width={40}
                  height={60}
                  className="mt-[3.2rem] h-14 w-9 mr-3"
                ></Image>
                <Image
                  src={"/picture/twitter-logo.png"}
                  alt="twitter_Logo"
                  width={60}
                  height={50}
                  className="mt-14 h-12 -ml-3 w-14"
                ></Image>
                <Image
                  src={"/picture/ticktockLogo1.jpg"}
                  alt="tiktok_Logo"
                  width={40}
                  height={40}
                  className="mt-14 mr-3 h-12 w-8"
                ></Image>
                <Image
                  src={"/picture/intagramLogo.jpg"}
                  alt="insta_Logo"
                  width={50}
                  height={90}
                  className="mt-14 -ml-2 h-11 w-11"
                ></Image>
              </div>
              <p className="underline text-blue-700 mt-5">
                education@governorSindh.com
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
