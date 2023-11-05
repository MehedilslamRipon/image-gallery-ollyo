/* eslint-disable no-unused-vars */
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const data = [
  {
    id: "1",
    text: "one",
  },
  {
    id: "2",
    text: "two",
  },
  {
    id: "3",
    text: "three",
  },
  {
    id: "4",
    text: "four",
  },
  {
    id: "5",
    text: "five",
  },
  {
    id: "6",
    text: "six",
  },
  {
    id: "7",
    text: "seven",
  },
  {
    id: "8",
    text: "eight",
  },
  {
    id: "9",
    text: "nine",
  },
  {
    id: "10",
    text: "ten",
  },
];

function ReactBeautifulDND() {
  const [photoData, setPhotoData] = useState(data);

  const handleDragAndDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedStores = [...photoData];

      const storeSourceIndex = source.index;
      const storeDestinationIndex = destination.index;

      const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
      reorderedStores.splice(storeDestinationIndex, 0, removedStore);

      return setPhotoData(reorderedStores);
    }
  };

  return (
    <section className="mt-20">
      <div className="container mx-auto p-5 border">
        <DragDropContext onDragEnd={handleDragAndDrop}>
          <Droppable
            droppableId="GALLERY"
            type="group"
            mode="virtual"
            direction="horizontal"
          >
            {(provided) => (
              <div
                className="grid gap-5 grid-cols-10"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {photoData.map(({ id, text }, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        className="flex items-center justify-center col-span-2 h-[50px] border"
                      >
                        {text}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </section>
  );
}

export default ReactBeautifulDND;
