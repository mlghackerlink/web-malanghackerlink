import { AiOutlineRight } from "react-icons/ai";

const List = () => {
  return (
    <div className="flex cursor-pointer hover:bg-white hover:text-black p-2 my-5">
      <div className="p-3">
        <AiOutlineRight size={18} />
      </div>
      <div>
        <div>
          <h2 className="font-bold text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
        <div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non,
            at voluptates laboriosam alias quis ut tempora mollitia similique
            inventore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default List;
