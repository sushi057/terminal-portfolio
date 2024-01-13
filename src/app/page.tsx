import Terminal from "./components/Terminal";

export default function Home() {
  return (
    <div className="mx-auto flex h-full cursor-default flex-col items-start justify-center px-8 lg:w-1/2">
      <header className="w-full rounded-t-md bg-gray-800 text-white">
        <p className="py-2 text-center text-sm">sushi@github.com: ~</p>
      </header>
      <Terminal />
    </div>
  );
}
