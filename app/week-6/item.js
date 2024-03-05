export default function Item({ name, quantity, category }) {
    return (
      <ul className="border-transparent border-x-4 p-2 mb-2 bg-slate-800 w-4/12">
        <div className="font-extrabold text-2xl ">{name}</div>
        <div className="text-s">Buy {quantity} in {category} </div>
      </ul>
    );
  }