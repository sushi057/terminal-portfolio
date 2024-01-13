import Image from "next/image";
import Terminal from "./components/Terminal";

export default function Home() {
  return (
    <div className="mx-auto flex h-full cursor-default flex-col items-start justify-center px-8 lg:w-1/2">
      <header className="flex w-full flex-row justify-between rounded-t-md border-t-2 border-[#2E3436] bg-gray-800 text-white">
        <p className="mx-auto py-2 pl-12 text-center text-sm">
          shawshank@desktop: ~
        </p>
        <div className="flex flex-row items-center gap-4">
          <Image
            src="/minimize.svg"
            alt="minimize button"
            height={16}
            width={16}
            className="mb-3 self-end"
          />
          <Image
            src="/maximize.svg"
            alt="maximize button"
            height={15}
            width={15}
          />
          <Image
            src="/close.svg"
            alt="close button"
            height={20}
            width={20}
            className="mr-2"
          />
        </div>
      </header>
      <Terminal />
    </div>
  );
}
