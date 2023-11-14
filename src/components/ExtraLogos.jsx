import React from "react";
import Image from "next/image";
import logoFigma from "@/images/logos/figma.svg";
import logoExcel from "@/images/logos/excel.svg";
import logoCss from "@/images/logos/Css.svg";
import logoGithub from "@/images/logos/Github.svg";
import logoHtml from "@/images/logos/html.svg";
import logoIllu from "@/images/logos/illu.svg";
import logoJs from "@/images/logos/Js.svg";
import logoMiro from "@/images/logos/miro.svg";
import logoPowerPoint from "@/images/logos/powerpoint.svg";
import logoReact from "@/images/logos/react.svg";
import logoSlack from "@/images/logos/slack.svg";
import logoVercel from "@/images/logos/vercel.svg";
import logoVs from "@/images/logos/vs.svg";
import logoWrd from "@/images/logos/wrd.svg";

const ExtraLogos = () => {
  const logos = [
    { _id: 2001, title: "Figma", logo: logoFigma },
    { _id: 2006, title: "Illustrator", logo: logoIllu },
    { _id: 2013, title: "Visual Studio", logo: logoVs },
    { _id: 2005, title: "Html", logo: logoHtml },
    { _id: 2003, title: "Css", logo: logoCss },
    { _id: 2007, title: "Js", logo: logoJs },
    { _id: 2010, title: "React", logo: logoReact },
    { _id: 2012, title: "Vercel", logo: logoVercel },
    { _id: 2004, title: "Github", logo: logoGithub },

    { _id: 2014, title: "Word", logo: logoWrd },
    { _id: 2002, title: "Exel", logo: logoExcel },
    { _id: 2009, title: "PowerPoint", logo: logoPowerPoint },
    { _id: 2011, title: "Slack", logo: logoSlack },
    { _id: 2008, title: "Miro", logo: logoMiro },
  ];

  return (
    <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
      <p className="text-center text-sm font-semibold text-gray-900 lg:text-left"></p>
      <div className="flex justify-center lg:justify-start mt-4">
        <div className="bg-white p-4 shadow-lg rounded-xl flex">
          {logos.map(({ title, logo }) => (
            <div key={title} className="ml-2">
              <Image src={logo} alt={title} className="h-8" unoptimized />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraLogos;
