import Terminal from "./components/Terminal";

export default function Home() {
  return (
    <div className="mx-auto flex h-full cursor-default flex-col items-start justify-center px-8 lg:w-1/2">
      <header className="w-full bg-gray-700 py-1 text-center text-white">
        <p>sushi@github.com: ~</p>
      </header>
      <Terminal />
    </div>
  );
}
