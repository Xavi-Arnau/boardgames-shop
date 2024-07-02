interface SuggestionsProps {
  data: Product[];
  handleClick: (name: string) => void;
}

export interface Product {
  id: string;
  name: string;
  picture: string;
}

const Suggestions = ({ data, handleClick }: SuggestionsProps) => {
  console.log(data);

  return (
    <div className="absolute left-0 top-20 w-full bg-zinc-200 z-20">
      <ul className="">
        {data && data.length
          ? data.map((item, index) => (
              <li
                className="hover:bg-zinc-400 px-2 py-2 flex flex-row gap-2 items-center cursor-pointer"
                onClick={() => handleClick(item.name)}
                key={index}
              >
                <img src={item.picture} alt="" className="object-cover w-20" />
                {item.name}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Suggestions;
