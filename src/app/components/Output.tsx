import About from "./commands/About";
import Help from "./commands/Help";
import Neofetch from "./commands/Neofetch";
import Projects from "./commands/Projects";

export default function Output({ command }: { command: string }) {
  switch (command) {
    case "clear":
      return <></>;

    case "help":
      return <Help />;

    case "about":
      return <About />;

    case "projects":
      return <Projects />;

    case "neofetch":
      return <Neofetch />;

    case "repo":
      return <p>Redirecting you to repo....</p>;

    default:
      return (
        <p>{`Command '${command}' not found, type 'help' to see all commands.`}</p>
      );
  }
}
