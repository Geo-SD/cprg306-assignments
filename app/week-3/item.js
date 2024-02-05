export default function Item({ name, quantity, category }) {
  return (
    <div className="border border-black m-5 p-5">
      <p> {name} </p>
      <p>
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
