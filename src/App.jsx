import {
   DndContext,
   DragOverlay,
   MouseSensor,
   TouchSensor,
   closestCenter,
   useSensor,
   useSensors,
} from '@dnd-kit/core';
import {
   SortableContext,
   arrayMove,
   rectSortingStrategy,
} from '@dnd-kit/sortable';
import { useState } from 'react';
import image1 from '../public/images/image-1.webp';
import image2 from '../public/images/image-2.webp';
import image3 from '../public/images/image-3.webp';
import image4 from '../public/images/image-4.webp';
import image5 from '../public/images/image-5.webp';
import image6 from '../public/images/image-6.webp';
import image7 from '../public/images/image-7.webp';
import image8 from '../public/images/image-8.webp';
import image9 from '../public/images/image-9.webp';
import imgPlaceholder from '../public/images/img-placeholder.png';
import Sortable from './Components/Sortable';
import { generateUUID } from './utils/UUIDgenerator';

const imageArray = [
   {
      id: '7a8e0362-7fea-405b-a3f0-ccfcf2fb8040',
      img: image1,
      isSelected: false,
   },
   {
      id: '61cd0c61-73a0-4946-a27a-d744ea4939e3',
      img: image2,
      isSelected: false,
   },
   {
      id: 'bfb65887-56d1-4718-9dcb-24619c791bae',
      img: image3,
      isSelected: false,
   },
   {
      id: 'f9a88841-4eb9-43df-92d8-f6e438c0f1c4',
      img: image4,
      isSelected: false,
   },
   {
      id: '5e8fc62a-a567-42b1-b727-d4e7c3692b61',
      img: image5,
      isSelected: false,
   },
   {
      id: '23a9bf6d-797d-4968-b178-a6a4a151ff18',
      img: image6,
      isSelected: false,
   },
   {
      id: 'f53dd3c8-3e87-433a-aa0f-1a931ebfdd53',
      img: image7,
      isSelected: false,
   },
   {
      id: '47948dce-867e-4577-bf1b-1e222cf701a4',
      img: image8,
      isSelected: false,
   },
   {
      id: 'c2629c23-177a-467f-bf6e-fd8e9d81c8a0',
      img: image9,
      isSelected: false,
   },
];

export default function App() {
   const [images, setImages] = useState(imageArray);
   const [activeId, setActiveId] = useState(null);

   const sensors = useSensors(
      useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
      useSensor(TouchSensor)
   );

   const handleDragStart = (e) => {
      setActiveId(e.active.id);
   };

   const onDragEndHandler = (e) => {
      const { active, over } = e;

      // check if the active and over elements have different IDs
      if (active.id !== over.id) {
         setImages((items) => {
            // find the index of the active element
            const activeIndex = images.findIndex(
               (item) => item.id === active.id
            );
            const overIndex = images.findIndex((item) => item.id === over.id);

            // move the active element to the position of the over element
            return arrayMove(items, activeIndex, overIndex);
         });
      }
   };

   const handleImageDelete = () => {
      // filter out the images that are not selected
      const newImages = images.filter((item) => !item.isSelected);
      setImages(newImages);
   };

   const handleSelectItem = ({ target: { checked } }, id) => {
      // update the images state based on the previous state (prevImages)
      setImages((prevImages) => {
         // the map function to create a new array with updated isSelected property
         return prevImages.map((item) =>
            item.id === id ? { ...item, isSelected: checked } : item
         );
      });
   };

   const handleImageUpload = ({ target: { files } }) => {
      const file = files[0];

      // check if a file is selected and if it is an image
      if (file && file.type.startsWith('image/')) {
         setImages((prevImages) => [
            ...prevImages,
            {
               id: generateUUID(), // generate a unique ID for the image
               img: URL.createObjectURL(file),
               isSelected: false,
            },
         ]);
      } else {
         // handle invalid file type or no file selected
         alert('Invalid file type or no file selected!');
      }
   };

   const handleDragCancel = () => {
      setActiveId(null);
   };

   const selectedItemsCount = images?.filter((item) => item.isSelected).length;

   return (
      <section className="max-w-[1220px] border-2 border-[#e7e1e1] mx-auto my-10 rounded">
         <div className="flex items-center justify-between px-8 border-b-2 py-5">
            <span className="text-2xl font-semibold">
               {selectedItemsCount > 0
                  ? `${selectedItemsCount} Files Selected`
                  : 'Gallery'}
            </span>
            {selectedItemsCount > 0 && (
               <span
                  onClick={handleImageDelete}
                  className="text-lg text-red-500 capitalize font-semibold cursor-pointer hover:border-b-2 border-red-500"
               >
                  Delete files
               </span>
            )}
         </div>
         <div className="grid grid-cols-12 sm:grid-cols-10 gap-3 md:gap-6 px-5 md:px-8 py-8 md:py-10">
            <DndContext
               collisionDetection={closestCenter}
               onDragStart={handleDragStart}
               sensors={sensors}
               onDragEnd={onDragEndHandler}
               onDragCancel={handleDragCancel}
            >
               <SortableContext strategy={rectSortingStrategy} items={images}>
                  {images?.map((item, index) => (
                     <Sortable
                        handleSelectItem={handleSelectItem}
                        key={item.id}
                        {...item}
                        index={index}
                        uid={item.id}
                     />
                  ))}
               </SortableContext>
               <DragOverlay adjustScale>
                  {activeId && (
                     <Sortable
                        img={images.find((item) => item.id === activeId)?.img}
                        isDragging
                     />
                  )}
               </DragOverlay>
            </DndContext>
            <div className="col-span-2 border-2 border-dashed border-[#B0B0B0] text-center rounded flex flex-col justify-center">
               <label htmlFor="fileInput">
                  <img className="w-14 mx-auto" src={imgPlaceholder} alt="" />
               </label>
               <input
                  onChange={handleImageUpload}
                  id="fileInput"
                  type="file"
                  className="hidden"
               />
               <h3 className="font-semibold">Add Images</h3>
            </div>
         </div>
      </section>
   );
}
