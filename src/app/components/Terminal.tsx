"use client";

import React from "react";
import Output from "./Output";
import { useState } from "react";

export default function Terminal() {
  const [command, setCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [newCommand, setNewCommand] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (command === "clear") {
      setCommandHistory([]);
      console.log("clear command");
    } else {
      setCommandHistory([...commandHistory, command]);
    }
    setNewCommand(command);
    setCommand("");
  };
  return (
    <div className="flex h-1/2 w-full flex-col-reverse overflow-auto bg-[#2C001E]/90 p-1 text-white">
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-row">
        <p className="mr-auto min-w-fit text-green-500">
          sushi@linux-desktop<span>:~$</span>
        </p>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          className="ml-2 w-full bg-inherit outline-none"
        />
      </form>
      <section className="flex-1">
        {commandHistory.map((cmd) => (
          <Output key={cmd} command={cmd} />
        ))}
      </section>
    </div>
  );
}
