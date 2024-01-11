export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-start justify-center px-8">
      <header className="w-full bg-gray-700 py-1 text-center text-white">
        <p>sushi@github.com: ~</p>
      </header>
      <div className="flex h-1/2 w-full flex-col bg-[#2C001E]/90 p-1 text-white">
        <form className="flex flex-row">
          <p className="mr-auto min-w-fit text-green-500">
            sushi@linux-desktop<span>:~$</span>
          </p>
          <input type="text" className="ml-2 w-full bg-inherit outline-none" />
        </form>
        <section className="flex-1">Result</section>
      </div>
    </div>
  );
}
