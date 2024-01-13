"use client";

import About from "./commands/About";
import Help from "./commands/Help";
import Neofetch from "./commands/Neofetch";
import Certificates from "./commands/Certificates";
import Experience from "./commands/Experience";
import Skills from "./commands/Skills";

export default function Output({ command }: { command: string }) {
  function handleRepoCase() {
    console.log("new link opens here");
  }
  return (
    <div className="mr-16">
      <p className="mr-auto min-w-fit text-green-500">
        <p className="mr-auto min-w-fit text-green-500">
          shawshank@desktop<span className="text-white">:</span>:
          <span className="text-[#06989A]">~</span>
          <span className="mr-1.5 text-white">$</span>
          <span className="text-cyan-500 ">{command}</span>
        </p>
      </p>
      {command && (
        <div>
          {(() => {
            switch (command) {
              case "help":
                return <Help />;

              case "about":
                return <About />;

              case "certificates":
                return <Certificates />;

              case "neofetch":
                return <Neofetch />;

              case "skills":
                return <Skills />;

              case "experience":
                return <Experience />;

              case "repo":
                handleRepoCase();
                return <p>Redirecting you to.........</p>;

              case "resume":
                return <p>Downloading Resume.........</p>;

              default:
                return (
                  <p>{`Command '${command}' not found, type 'help' to see all commands.`}</p>
                );
            }
          })()}
        </div>
      )}
    </div>
  );
}
