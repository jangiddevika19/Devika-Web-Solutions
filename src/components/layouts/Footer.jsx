import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";


const FOOTER_LINKS = [
  "Home",
  "Services",
  "Portfolio",
  "Pricing",
  "About",
  "Contact",
];


const SERVICES = [
  "Website Development",
  "Full Stack Development",
  "UI/UX Design",
  "Website Optimization",
];


const SOCIALS = [
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/devika-jangid/",
  },
//   {
//     icon: FaGithub,
//     link: "#",
//   },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/codingwithdvk?igsh=c2Uxa2p5MGw5ZHZ6",
  },
//   {
//     icon: FaYoutube,
//     link: "#",
//   },
];


export default function Footer() {

  return (

    <footer
      className="
      relative overflow-hidden
      border-t border-slate-200
      bg-slate-50/70
      "
    >

      {/* glow */}

      <div
        className="
        pointer-events-none absolute
        left-1/2 top-0
        h-[300px] w-[500px]
        -translate-x-1/2
        rounded-full
        bg-sky-100/50
        blur-3xl
        "
      />


      <div
        className="
        relative mx-auto
        max-w-6xl
        px-6 py-16
        "
      >


        <div
          className="
          grid grid-cols-1
          gap-10
          sm:grid-cols-2
          lg:grid-cols-4
          "
        >


          {/* Brand */}

          <div>

            <div className="
            flex items-center gap-3
            ">

              <div
                className="
                flex h-11 w-11
                items-center justify-center
                rounded-xl
                bg-slate-900
                text-xl font-bold
                text-white
                "
              >
                D
              </div>


              <div>

                <h3
                className="
                font-bold
                text-slate-950
                "
                >
                  Devika Web Solutions
                </h3>


                <p
                className="
                text-xs
                text-slate-600
                "
                >
                  Web & Product Studio
                </p>

              </div>

            </div>



            <p
            className="
            mt-5
            text-sm
            leading-relaxed
            text-slate-600
            "
            >
              Creating modern websites and scalable digital
              solutions that help businesses grow online.
            </p>


          </div>





          {/* Links */}

          <div>

            <h4
            className="
            text-sm
            font-bold
            text-slate-950
            "
            >
              Quick Links
            </h4>


            <ul className="
            mt-5 space-y-3
            ">

            {
              FOOTER_LINKS.map((item)=>(
                <li key={item}>

                  <a
                  href={`#${item.toLowerCase()}`}
                  className="
                  text-sm
                  text-slate-600
                  transition
                  hover:text-sky-700
                  "
                  >
                    {item}
                  </a>

                </li>
              ))
            }

            </ul>

          </div>






          {/* Services */}

          <div>

            <h4
            className="
            text-sm
            font-bold
            text-slate-950
            "
            >
              Services
            </h4>


            <ul className="
            mt-5 space-y-3
            ">

            {
              SERVICES.map((item)=>(

                <li
                key={item}
                className="
                text-sm
                text-slate-600
                "
                >
                  {item}
                </li>

              ))
            }

            </ul>


          </div>






          {/* Contact */}

          <div>

            <h4
            className="
            text-sm
            font-bold
            text-slate-950
            "
            >
              Connect
            </h4>



            <a
            href="mailto:devika1909jangid19@gmail.com"
            className="
            mt-5 block
            text-sm
            font-medium
            text-slate-700
            hover:text-sky-700
            "
            >
              devika1909jangid19@gmail.com
            </a>



            <div
            className="
            mt-5 flex gap-3
            "
            >

            {
              SOCIALS.map(({icon:Icon,link},index)=>(

                <a
                key={index}
                href={link}
                className="
                flex h-9 w-9
                items-center justify-center
                rounded-xl
                border border-slate-200
                bg-white
                text-slate-600
                transition
                hover:bg-sky-50
                hover:text-sky-700
                "
                >

                  <Icon size={16}/>

                </a>

              ))
            }

            </div>


          </div>


        </div>





        {/* Bottom */}

        <div
        className="
        mt-12
        border-t
        border-slate-200
        pt-6
        text-center
        "
        >

          <p
          className="
          text-xs
          text-slate-600
          "
          >
            © {new Date().getFullYear()} Devika Web Solutions.
            All rights reserved.
          </p>


        </div>



      </div>


    </footer>

  );
}