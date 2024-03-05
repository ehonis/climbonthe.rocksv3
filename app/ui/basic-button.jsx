import clsx from "clsx";
export default function BasicButton({ text, color }) {
  return (
    <button
      className={clsx(
        "mb-5 mr-5 rounded-md border-none px-5 pb-3 pt-3 transition-transform duration-300 hover:scale-110 hover:border-solid hover:border-white",
        { "bg-green-400": color === "green" },
        { "bg-blue": color === "blue" },
        { "bg-red": color === "red" },
      )}
    >
      {text}
    </button>
  );
}
