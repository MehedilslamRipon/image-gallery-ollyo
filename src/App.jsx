import { DndContext, DragOverlay, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import image1 from "../public/images/image-1.webp";
import image2 from "../public/images/image-2.webp";
import image3 from "../public/images/image-3.webp";
import image4 from "../public/images/image-4.webp";
import image5 from "../public/images/image-5.webp";
import image6 from "../public/images/image-6.webp";
import image7 from "../public/images/image-7.webp";
import image8 from "../public/images/image-8.webp";
import image9 from "../public/images/image-9.webp";
import Sortable from "./Sortable";

const arr = [
  { id: "1", img: image1 },
  { id: "2", img: image2 },
  { id: "3", img: image3 },
  { id: "4", img: image4 },
  { id: "5", img: image5 },
  { id: "6", img: image6 },
  { id: "7", img: image7 },
  { id: "8", img: image8 },
  { id: "9", img: image9 },
];

export default function App() {
  const [image, setImage] = useState(arr);
  const [activeId, setActiveId] = useState(null);

  // const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragStart = (e) => {
    setActiveId(e.active.id);
  };

  const onDragEndHandler = (e) => {
    const { active, over } = e;

    if (active.id !== over.id) {
      setImage((items) => {
        const activeIndex = image.findIndex((item) => item.id === active.id);
        const overIndex = image.findIndex((item) => item.id === over.id);

        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  return (
    <section className="w-[1220px] border mx-auto mt-20 p-10">
      <div className="flex items-center justify-between px-8 border-b-2 mb-5 pb-10">
        <span className="text-2xl">3 Selected File</span>
        <span className="text-lg text-red-500 font-medium capitalize">
          Delete files
        </span>
      </div>
      <div className="grid grid-cols-10 gap-5">
        <DndContext
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={onDragEndHandler}
          onDragCancel={handleDragCancel}
        >
          <SortableContext strategy={rectSortingStrategy} items={image}>
            {image.map((itm, index) => (
              <Sortable key={itm.id} {...itm} index={index} uid={itm.id} />
            ))}
          </SortableContext>
          <DragOverlay adjustScale>
            {activeId ? (
              <Sortable
                img={image.find((item) => item.id === activeId).img}
                isDragging
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </section>
  );
}
