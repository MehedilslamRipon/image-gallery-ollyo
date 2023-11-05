/* eslint-disable react/prop-types */
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Sortable = ({ itm, img, id, uid, index, handleSelectItem, isSelected }) => {
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
        } border overflow-hidden relative group`}
      {...attributes}
      {...listeners}
      style={{ transformOrigin: "0 0", ...style }}
      ref={setNodeRef}
    >
      {
        isSelected ? (
          <div className="bg-white/50 absolute top-0 left-0 w-full h-full">
            <input onClick={(e) => handleSelectItem(e, id)}
              checked={isSelected} type="checkbox" className="w-5 h-5 m-4" />
          </div>
        ) : <div className="absolute top-0 left-0 w-full h-full hover:bg-black/40 duration-700 ease-in-out">
          <input
            type="checkbox"
            className="w-5 h-5 m-2 sm:m-4 group-hover:block hidden"
            onClick={(e) => handleSelectItem(e, id)}
            checked={isSelected}
          />
        </div>
      }
      <img className="galleryImage" src={img} alt="img" />
      {/* </div> */}
    </div>
  );
};

export default Sortable;
