/* eslint-disable react/prop-types */
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Sortable = ({ itm, img, id, uid, index }) => {
  const {
    isDragging,
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isOver,
  } = useSortable({ id: uid });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    // backgroundColor: isOver ? "green" : undefined,
  };

  // const inlineStyles = {
  //   transformOrigin: "0 0",
  //    border: "1px solid #b8b5b5",
  //    borderRadius: "10px",
  //   ...style,
  // };

  return (
    <div
      className={`${
        // index === 0 ? "col-span-2 row-span-2" : ""
        index === 0 ? "col-span-4 row-span-2" : "col-span-2"
      } border overflow-hidden`}
      {...attributes}
      {...listeners}
      style={{ transformOrigin: "0 0", ...style }}
      ref={setNodeRef}
    >
      {/* <div
        className={`flex items-center justify-center bg-white border px-4 py-1 ${
          isDragging ? "scale-x-105 shadow-md" : ""
        } ${isDragging ? "opacity-25" : "opacity-100"}`}
      > */}
      <img className="galleryImage" src={img} alt="img" />
      {/* </div> */}
    </div>
  );
};

export default Sortable;
