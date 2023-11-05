/* eslint-disable react/prop-types */
const Item = ({
  copyOpacity,
  style,
  setNodeRef,
  attributes,
  listeners,
  id,
  isDragging,
  index,
}) => {
  return (
    <div className={` ${index === 0 ? "col-span-4 row-span-2" : "col-span-2"}`}>
      <div
        className={`flex items-center justify-center bg-white border px-4 py-1 ${
          isDragging ? "scale-x-105 shadow-md" : ""
        } ${copyOpacity ? "opacity-50" : "opacity-100"}`}
        style={style}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
      >
        <img src={id} alt="img" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Item;
