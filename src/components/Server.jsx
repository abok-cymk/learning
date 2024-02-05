import { BsHash, BsJustifyLeft, BsFillPersonPlusFill } from "react-icons/bs";

const Server = () => {
  return (
    <>
      <div className="border-t border-b border-y-slate-800">
        <h5 className="flex items-center gap-2 py-2">
          <BsJustifyLeft /> Browse Channels
        </h5>
      </div>
      <div className="py-2 flex items-center bg-gray-400">
        <div>
          <BsHash className="text-white text-2xl" />
        </div>
        <select
          name="welcome"
          id="welcome"
          className="w-full outline-none bg-inherit hover:bg-inherit"
        >
          <option value="#" selected>
            Welcome
          </option>
          <option value="#" className="bg-inherit">
            {" "}
            🤗-getting-started{" "}
            
          </option>
        </select><BsFillPersonPlusFill />
      </div>
      <div>container</div>
      <div>container</div>
      <div>container</div>
    </>
  );
};

export default Server;
