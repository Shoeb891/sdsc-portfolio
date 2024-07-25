import Link from 'next/link';

const Landing = () => {
  return (
    <div>
      <div>
        <div
          className="banner pt-4 sm:pt-navbar px-16 relative flex flex-col justify-center items-center sm:px-0 sm:justify-between sm:flex-row"
        >
          <div className="hidden sm:flex w-88 h-full items-center justify-center">
            {/* <img className="w-full pb-20" src="/home1.svg" /> */}
          </div>

          <div className="mx-auto max-w-4xl px-3">
            <div>
              <div className="sm:h-full sm:flex sm:flex-1 flex-col items-center justify-center font-sans">
                <h1 className="text-4.5xl sm:text-5xl pt-navbar text-center font-extrabold leading-170">
                  THINK. BUILD. SHIP.
                </h1>
                <p className="text-1.5xl sm:text-xl font-medium text-center pt-14 sm:w-5/7 leading-160 opacity-60">
                  We at SDSClub are a bunch of developers who
                  aim to encourage the development of technology and
                  innovation by learning, sharing
                  knowledge and solving problems.
                </p>
              </div>

            </div>
          </div>
          <div
            className=" sm:w-88 flex flex-row-reverse justify-between sm:h-full sm:items-center sm:justify-center"
          >
            {/* <div>
              <img
                className="w-60 sm:w-88 pt-8 sm:pt-20"
                src="/home2.svg"
              />
            </div>
            <div>
              <img
                className="w-60 sm:hidden sm:w-full pt-8"
                src="/home4.svg"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
    // <div>
    //     <div className="banner pt-4 sm:pt-navbar px-16 relative flex flex-col justify-center items-center sm:px-0 sm:justify-between sm:flex-row">
    //         <div className="hidden sm:flex w-88 h-full items-center justify-center">
    //             <img className="w-full pb-20" src="/assets/images/home1.svg" alt="home1" />
    //         </div>
    //         <div className="sm:h-full sm:flex sm:flex-1 flex-col items-center justify-center">
    //             <h1 className="text-4.5xl sm:text-5xl pt-navbar text-center font-extrabold leading-170">
    //                 THINK. BUILD. SHIP.
    //             </h1>
    //             <p className="text-1.5xl sm:text-xl font-medium text-center pt-14 sm:w-5/7 leading-160 opacity-60">
    //                 We at SDSLabs are a bunch of designers and developers who
    //                 aim to encourage the development of technology and
    //                 innovation in IITR campus (and beyond) by learning, sharing
    //                 knowledge and solving problems.
    //             </p>
    //         </div>
    //         <div className="w-screen sm:w-88 flex flex-row-reverse justify-between sm:h-full sm:items-center sm:justify-center">
    //             <div>
    //                 <img className="w-60 sm:w-88 pt-8 sm:pt-20" src="/assets/images/home2.svg" alt="home2" />
    //             </div>
    //             <div>
    //                 <img className="w-60 sm:hidden sm:w-full pt-8" src="/assets/images/home4.svg" alt="home4" />
    //             </div>
    //         </div>
    //     </div>
    //     <div className="banner-footer flex justify-center items-start">
    //         <Link className="inline-flex flex-col items-center no-underline text-base" href="/projects" passHref>
    //                 <img className="pt-0 -mt-14 sm:-mt-0 block sm:h-10" src="/assets/images/down-arrow.svg" alt="down arrow" />
    //                 <span className="block text-grey pt-4 font-semibold text-lg">Projects</span>
    //         </Link>
    //     </div>
    // </div>
  );
};

export default Landing;
