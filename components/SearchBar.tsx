import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full ">
      <div className="w-10/12 mx-auto flex flex-row justify-between gap-6">
        <div className="flex w-1/3">
          <img
            src="/searchbar/logo-1672213539.jpg"
            alt=""
            className="object-fit"
          />
          <img
            src="/searchbar/personajeGoblin2.png"
            alt=""
            className="object-fit"
          />
        </div>
        <div className="flex w-2/3 gap-2  items-center">
          <Input type="text" placeholder="Busca en todo nuestro catálogo" />
          <Button type="submit" className="bg-green-700">
            <Search />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
