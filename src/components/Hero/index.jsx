import { useState } from "react";
import Typewriter from "typewriter-effect";

let malang = [
  "##     ##    ###    ##          ###    ##    ##  ######   ",
  "###   ###   ## ##   ##         ## ##   ###   ## ##    ##  ",
  "#### ####  ##   ##  ##        ##   ##  ####  ## ##        ",
  "## ### ## ##     ## ##       ##     ## ## ## ## ##   #### ",
  "##     ## ######### ##       ######### ##  #### ##    ##  ",
  "##     ## ##     ## ##       ##     ## ##   ### ##    ##  ",
  "##     ## ##     ## ######## ##     ## ##    ##  ######   ",
].join("\n");

let hacker = [
  "##     ##    ###     ######  ##    ## ######## ########  ",
  "##     ##   ## ##   ##    ## ##   ##  ##       ##     ## ",
  "##     ##  ##   ##  ##       ##  ##   ##       ##     ## ",
  "######### ##     ## ##       #####    ######   ########  ",
  "##     ## ######### ##       ##  ##   ##       ##   ##   ",
  "##     ## ##     ## ##    ## ##   ##  ##       ##    ##  ",
  "##     ## ##     ##  ######  ##    ## ######## ##     ## ",
].join("\n");

let link = [
  "##       #### ##    ## ##    ## ",
  "##        ##  ###   ## ##   ## ",
  "##        ##  ####  ## ##  ##  ",
  "##        ##  ## ## ## #####    ",
  "##        ##  ##  #### ##  ##   ",
  "##        ##  ##   ### ##   ##  ",
  "######## #### ##    ## ##    ## ",
].join("\n");

const Hero = ({ showContent, setShowContent }) => {
  const [heroShow, setHeroShow] = useState(false);
  return (
    <header>
      <div className={showContent ? "mb-5" : "min-h-screen"}>
        <p>
          <span className="text-green-500">root@malanghackerlink.org:~ #</span>{" "}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("./install.sh")
                .pauseFor(1000)
                .callFunction(() => {
                  setHeroShow(true);
                })
                .start();
            }}
          />
        </p>
        {heroShow ? (
          <>
            <p className="my-8">Welcome User988</p>
            <pre className="md:text-ascii mb-5 text-ascii-mobile">{malang}</pre>
            <pre className="md:text-ascii mb-5 text-ascii-mobile">{hacker}</pre>
            <pre className="md:text-ascii text-ascii-mobile">{link}</pre>
            <div className="w-full border-b-4 border-dashed border-white my-3"></div>
            <p className="mt-5">type "-help" for help</p>
            <p className="mt-8">
              <span className="text-green-500 ">
                root@malanghackerlink.org:~ #
              </span>{" "}
              mhl{" "}
              <span
                onClick={() => setShowContent((state) => !state)}
                className="hover:bg-white hover:text-black font-bold cursor-pointer text-red-500"
              >
                -help
              </span>
            </p>
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Hero;
