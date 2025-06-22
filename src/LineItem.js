import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({ handleCheck, handleDelete, item }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
        // In React, Best Practice:
        // Always use:
        // onClick for buttons and UI elements
        // onChange for form inputs (checkboxes, textboxes, etc.)
      />

      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>

      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
