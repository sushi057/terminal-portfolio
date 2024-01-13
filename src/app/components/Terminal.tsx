"use client";

import { v4 as uuidv4 } from "uuid";

import React from "react";
import Output from "./Output";
import { useState, useRef, useEffect } from "react";

export default function Terminal() {
  const [command, setCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (command === "clear") {
      setCommandHistory([]);
      console.log("clear command");
    } else {
      setCommandHistory([...commandHistory, command]);
    }
    setCommand("");
  };

  useEffect(() => {
    //Scroll to the input element
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.scrollIntoView({ behavior: "instant" });
      }
    }, 150);
  }, [commandHistory]);

  return (
    <div className="flex h-1/2 w-full flex-col overflow-auto rounded-b-md bg-[#300A24]/95 p-0.5 text-white">
      <section>
        {commandHistory.map((cmd) => (
          <Output key={uuidv4()} command={cmd} />
        ))}
      </section>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-row">
        <p className="mr-auto min-w-fit text-green-500">
          shawshank@desktop<span className="text-white">:</span>:
          <span className="text-[#06989A]">~</span>
          <span className="text-white">$</span>
        </p>
        <input
          id="commandline"
          ref={inputRef}
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          className="ml-1.5 w-full bg-inherit text-[#D3D7CF] outline-none focus:h-full"
          autoFocus
        />
      </form>
    </div>
  );
}
