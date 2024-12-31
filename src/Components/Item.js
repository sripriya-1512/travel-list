export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className={`item ${item.packed ? "packed" : ""}`}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span>{item.description || "No description available"}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
