import { useState } from "react";
import Marquee from "react-fast-marquee";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { ImFacebook, ImGithub, ImWhatsapp } from "react-icons/im";

function App() {
  const [marquee, setMarquee] = useState(false);
  const [marquee1, setMarquee1] = useState(false);
  const [marquee2, setMarquee2] = useState(false);
  const [marquee3, setMarquee3] = useState(false);
  const [backShow, setbackShow] = useState(true);
  function handleClick() {
    setbackShow((state) => !state);
  }
  return (
    <div className="h-screen bg-yellow-50">
      {/* header */}
      <div className="bg-yellow-200 py-6 text-center">
        <h1 className=" text-3xl font font-bold">
          Honey <span className="text-yellow-900">Comb</span> Task 🍯
        </h1>
      </div>
      {/* custom marquee and button card+
       */}
      <div className="flex ml-48 ">
        <div>
          <div>
            <h1
              className="absolute font-bold z-10 p-3 mt-20 text-lg hover:bg-yellow-600 hover:text-white "
              onMouseEnter={() => {
                setMarquee(true);
              }}
              onMouseLeave={() => {
                setMarquee(false);
              }}
            >
              Home
            </h1>
            {marquee && (
              <Marquee speed={200} className="absolute my-auto mt-20 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                modi quos ullam vel sit laboriosam, deserunt fugiat dolorem
                dolor necessitatibus qui dicta perspiciatis doloribus
                repellendus, expedita facere beatae quo saepe!
              </Marquee>
            )}
          </div>

          <div>
            <h1
              className="absolute z-10  font-bold p-3 mt-36 text-lg hover:bg-yellow-600 hover:text-white "
              onMouseEnter={() => {
                setMarquee1(true);
              }}
              onMouseLeave={() => {
                setMarquee1(false);
              }}
            >
              About Us
            </h1>
            {marquee1 && (
              <Marquee className="absolute my-auto mt-36 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                modi quos ullam vel sit laboriosam, deserunt fugiat dolorem
                dolor necessitatibus qui dicta perspiciatis doloribus
                repellendus, expedita facere beatae quo saepe!
              </Marquee>
            )}
          </div>
          <div>
            <h1
              className="absolute z-10 p-3 font-bold mt-52 text-lg hover:bg-yellow-600 hover:text-white "
              onMouseEnter={() => {
                setMarquee2(true);
              }}
              onMouseLeave={() => {
                setMarquee2(false);
              }}
            >
              Carrers
            </h1>
            {marquee2 && (
              <Marquee className="absolute my-auto mt-52 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                modi quos ullam vel sit laboriosam, deserunt fugiat dolorem
                dolor necessitatibus qui dicta perspiciatis doloribus
                repellendus, expedita facere beatae quo saepe!
              </Marquee>
            )}
          </div>
          <div>
            <h1
              className="absolute z-10 font-bold p-3 mt-[17rem] text-lg hover:bg-yellow-600 hover:text-white "
              onMouseEnter={() => {
                setMarquee3(true);
              }}
              onMouseLeave={() => {
                setMarquee3(false);
              }}
            >
              Contact Us
            </h1>
            {marquee3 && (
              <Marquee className="absolute my-auto mt-[17rem] p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                modi quos ullam vel sit laboriosam, deserunt fugiat dolorem
                dolor necessitatibus qui dicta perspiciatis doloribus
                repellendus, expedita facere beatae quo saepe!
              </Marquee>
            )}
          </div>
        </div>
      </div>

      {/* div */}
      <div>
        <div
          className={
            backShow
              ? "ml-[1660px] mt-0   flex translate-x-2 transform items-center justify-center duration-1000"
              : " flex -translate-x-2 transform items-center justify-center duration-1000"
          }
        >
          <button onClick={handleClick} className="mr-4 mt-[8rem]">
            <BsFillArrowLeftCircleFill size={30} color="#000" />
          </button>
          <div className="mt-[7rem] h-80 w-96 rounded-lg bg-gray-700 text-center">
            <div className="text-white text-lg p-10 block relative text-center">
              &quot; Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus recusandae modi excepturi similique vitae natus
              doloribus, porro exercitationem temporibus voluptatibus maxime
              quibusdam iure eius ut consequatur eum obcaecati quas
              repellendus!&quot;
            </div>
          </div>
        </div>
        {/* // footer and social media icon */}
        <div className="flex flex-row space-x-8 mt-32 mb-0  justify-end mr-16">
          <div>
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImWhatsapp size={25} color="" />
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImFacebook size={25} />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImGithub size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
