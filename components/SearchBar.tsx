"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import Suggestions from "./search/Suggestions";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleChange = async (event: React.FormEvent<HTMLInputElement>) => {
    const search = event.currentTarget.value.toLowerCase();
    setQuery(search);
    if (query.length > 1) {
      const response = await fetch(`/api/products/search?query=${search}`);
      const data = await response.json();

      //console.log(data);
      setProducts(data);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };

  const handleClick = (name: string) => {
    setQuery(name);
    setShowDropDown(false);
  };

  return (
    <div className="w-full ">
      <div className="w-10/12 mx-auto flex flex-row justify-between gap-6">
        <div className="flex flex-row gap-2 w-1/2">
          <img src="/searchbar/logo-1672213539.jpg" alt="" className="" />
          <img
            src="/searchbar/personajeGoblin2.png"
            alt=""
            className="object-cover"
          />
        </div>
        <div className="flex w-1/2 gap-2  items-center relative">
          <Input
            type="text"
            placeholder="Busca en todo nuestro catálogo"
            onChange={handleChange}
            value={query}
          />
          <Button type="submit" className="bg-green-700">
            <Search />
          </Button>
          {showDropDown ? (
            <Suggestions data={products} handleClick={handleClick} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
