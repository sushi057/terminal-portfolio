import About from "./commands/About";
import Help from "./commands/Help";
import Neofetch from "./commands/Neofetch";
import Certificates from "./commands/Certificates";
import Experience from "./commands/Experience";
import Skills from "./commands/Skills";

export default function Output({ command }: { command: string }) {
  return (
    <div className="mr-16">
      <p className="mr-auto min-w-fit text-green-500">
        sushi@linux-desktop:~$<span className="ml-2 text-white">{command}</span>
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

              case "repo": {
                setTimeout(() => {
                  window.open(
                    "https://github.com/sushi057/terminal-portfolio",
                    "_blank",
                  );
                }, 2000);

                return <p>Redirecting you to repo....</p>;
              }
              case "resume":
                return <p>Downloading Resume........</p>;

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
