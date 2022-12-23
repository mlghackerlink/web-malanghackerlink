import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";
import { Hero, Section, Footer } from "./components";
import { about } from "./asciiArt";

const data = [
  {
    id: 1,
    icon: <FaFacebookF size={24} />,
  },
  {
    id: 2,
    icon: <FaInstagram size={24} />,
  },
  {
    id: 3,
    icon: <FaYoutube size={24} />,
  },
  {
    id: 4,
    icon: <FaGithub size={24} />,
  },
  {
    id: 5,
    icon: <FaTelegram size={24} />,
  },
];

const App = () => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="min-h-screen p-5 bg-stone-800 text-white font-display overflow-x-hidden relative">
      <div className="bg-[#0D0D0D]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-row">
            <div className="px-10 pt-16 max-w-2xl w-full">
              <Hero showContent={showContent} setShowContent={setShowContent} />

              {showContent ? (
                <Section title="-about">
                  <pre className="text-sub-ascii-mobile md:text-sub-ascii mb-5">
                    {about}
                  </pre>
                  <p className="my-3">
                    Komunitas IT yang secara khusus membahas Hacking, Cyber
                    Security, dan Programming. Sempat non-aktif dan berdiri
                    kembali pada tahun 2016 yang bertempat di Kota Malang.
                  </p>

                  <p className="my-10">
                    <span className="font-bold underline">Our mission</span> -
                    Menjadikan Kota Malang maju dalam aspek bidang Cyber
                    Security, baik dengan mengadakan Seminar, Gathering, maupun
                    Workshop. Menerapkan Ethical Hacking dalam Penetration
                    Testing sebuah sistem.
                  </p>
                  <p className="my-3">
                    <span className="font-bold underline">Our vision</span> -
                    Membangun talenta - talenta muda cyber security profesional,
                    baik technical maupun non-technical.
                  </p>

                  <p>More information ? Follow us:</p>
                  <div className="flex flex-row gap-5 p-4">
                    {data.map((item) => (
                      <div key={item.id} className="cursor-pointer">
                        {item.icon}
                      </div>
                    ))}
                  </div>

                  <p className="my-10">
                    <span className="text-green-500">
                      root@malanghackerlink.org:~ #
                    </span>{" "}
                    <span className="blink-cursor">|</span>
                  </p>
                </Section>
              ) : null}

              <Footer />
            </div>
          </div>
          <div className="p-4 text-center text-sm">
            <p>&copy;2022 - Malang Hacker Link</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
