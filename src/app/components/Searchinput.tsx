"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { FormEvent } from "react";

import { BiSearch } from "react-icons/bi";

const Searchinput = () => {
  const [keyword, setKeyword] = useState<string>("");
  const router = useRouter();
  const searchKeyword = (e: FormEvent) => {
    e.preventDefault();
    if (!keyword) {
      router.push("/");
    } else {
      router.push(`/search?q=${keyword}`);
    }
  };

  return (
    <form className="flex space-x-2 items-center" onSubmit={searchKeyword}>
      <input
        type="text"
        placeholder="e.g. sports, lifestyle"
        className="text-sm px-2 outline-none border border-black"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit">
        <BiSearch className="text-black text-xl" />
      </button>
    </form>
  );
};

export default Searchinput;
