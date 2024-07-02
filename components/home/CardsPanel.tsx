const CardsPanel = () => {
  return (
    <div className="w-full flex flex-row flex-wrap md:p-4">
      <div className="w-1/2 p-2 hover:scale-110 cursor-pointer">
        <img className="object-cover " src="/cards/juego-de-mesa.jpg" alt="" />
      </div>
      <div className="w-1/2 p-2 hover:scale-110 cursor-pointer">
        <img
          className="object-cover "
          src="/cards/goblintraderweb2023categoriachollos.png"
          alt=""
        />
      </div>
      <div className="w-1/2 p-2 hover:scale-110 cursor-pointer">
        <img
          className="object-cover "
          src="/cards/categoriaeventostienda-1.jpg"
          alt=""
        />
      </div>
      <div className="w-1/2 p-2 hover:scale-110 cursor-pointer">
        <img
          className="object-cover "
          src="/cards/categorialaseta-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CardsPanel;
