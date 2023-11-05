import { DndContext, DragOverlay, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
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
  {
    id: "1",
    img: image1,
    isSelected: false
  },
  {
    id: "2",
    img: image2,
    isSelected: false
  },
  {
    id: "3",
    img: image3,
    isSelected: false
  },
  {
    id: "4",
    img: image4,
    isSelected: false
  },
  {
    id: "5",
    img: image5,
    isSelected: false
  },
  {
    id: "6",
    img: image6,
    isSelected: false
  },
  {
    id: "7",
    img: image7,
    isSelected: false
  },
  {
    id: "8",
    img: image8,
    isSelected: false
  },
  {
    id: "9",
    img: image9,
    isSelected: false
  },
];

export default function App() {
  const [image, setImage] = useState(arr);

  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(useSensor(MouseSensor, { activationConstraint: { distance: 5 } }), useSensor(TouchSensor));

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

  const handleImageDelete = () => {

    const selectedItems = image.filter(el => el.isSelected === true)

    const newItems = image.filter((item) => !selectedItems.includes(item));
    setImage(newItems)
  }

  const handleSelectItem = (e, id) => {
    const { checked } = e.target
    const newItems = [...image]
    const findInx = image.findIndex((img) => img.id === id)
    newItems[findInx].isSelected = checked
    setImage(newItems)
  }

  const handleImageChange = (event) => {
    debugger
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    const newImg = {
      id: image.length + 1,
      img: imageUrl,
      isSelected: false
    }

    setImage([...image, newImg]);
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  return (
    <section className="w-[1220px] border mx-auto mt-20 p-10">
      <div className="flex items-center justify-between px-8 border-b-2 mb-5 pb-10">
        <span className="text-2xl">3 Selected File</span>
        <span onClick={handleImageDelete} className="text-lg text-red-500 font-medium capitalize">
          Delete files
        </span>
      </div>
      <div className="grid grid-cols-10 gap-5">
        <DndContext
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          sensors={sensors}
          onDragEnd={onDragEndHandler}
          onDragCancel={handleDragCancel}
        >
          <SortableContext strategy={rectSortingStrategy} items={image}>
            {image.map((itm, index) => (
              <Sortable handleSelectItem={handleSelectItem} key={itm.id} {...itm} index={index} uid={itm.id} />
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
        <div className="col-span-2 border text-center">
          <label htmlFor="fileInput">
            <img src="/images/img-placeholder.jpg" alt="" />
          </label>
          <input onChange={handleImageChange} id="fileInput" type="file" className="hidden" />
          <h3>Add Image</h3>
        </div>
      </div>
    </section>
  );
}
