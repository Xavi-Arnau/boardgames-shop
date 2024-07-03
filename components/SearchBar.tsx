"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Trash2 } from "lucide-react";
import { useState, useContext, useEffect } from "react";
import Suggestions from "./search/Suggestions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CartContext } from "@/app/context/CartContext";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const router = useRouter();
  const { addToCart, cartItems, removeFromCart } = useContext(CartContext);

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

  const handleSearchSubmit = () => {
    setQuery("");
    setShowDropDown(false);
    router.push(`/results?search=${query}`);
  };

  return (
    <div className="w-full ">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div className="flex flex-row gap-2 md:w-1/2 items-end">
          <div>
            <Link href="/">
              <img
                src="/searchbar/logo-1672213539.jpg"
                alt=""
                className="object-cover"
              />
            </Link>
          </div>
          <div>
            <img
              src="/searchbar/personajeGoblin2.png"
              alt=""
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex md:w-1/2 gap-2  items-center relative">
          <Input
            type="text"
            placeholder="Busca en todo nuestro catálogo"
            onChange={handleChange}
            value={query}
          />
          <Button
            type="submit"
            className="bg-green-700"
            onClick={handleSearchSubmit}
          >
            <Search />
          </Button>
          {showDropDown ? (
            <Suggestions data={products} handleClick={handleClick} />
          ) : null}
        </div>
        <div className="flex items-center ">
          <Popover>
            <PopoverTrigger
              className="bg-green-700 py-2 px-4 rounded-lg text-white relative"
              onClick={() => setShowCart(!showCart)}
            >
              <ShoppingCart />
              {cartItems && cartItems.length > 0 ? (
                <div
                  className="text-xs absolute text-white bg-red-700 -right-2 -top-2 w-4 h-4 rounded-full 
              flex flex-row items-center justify-center"
                >
                  <span>{cartItems.length}</span>
                </div>
              ) : null}
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col gap-4">
                {cartItems &&
                  cartItems.map((line) => (
                    <div className="flex flex-row items-center">
                      <div className="w-1/3">
                        <img
                          src="/detail/shatterpoint-clone-force-99-squad-pack-castellano.jpg"
                          className="object-cover"
                          alt=""
                        />
                      </div>
                      <div className="w-1/3 ">x{line.quantity}</div>
                      <div className="w-1/3">
                        <Button onClick={() => removeFromCart(line.id)}>
                          <Trash2 />
                        </Button>
                      </div>
                    </div>
                  ))}
                <Button>Checkout</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
