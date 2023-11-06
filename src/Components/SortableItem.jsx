/* eslint-disable react/prop-types */
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableItem = ({
   img,
   id,
   uid,
   index,
   handleSelectItem,
   isSelected,
}) => {
   const { setNodeRef, attributes, listeners, transform, transition } =
      useSortable({ id: uid });

   const style = {
      transform: CSS.Transform.toString(transform),
      transition,
   };

   return (
      <div
         className={`${
            index === 0
               ? 'col-span-8 sm:col-span-4 row-span-2'
               : 'col-span-4 sm:col-span-2'
         } group border-2 rounded-lg overflow-hidden relative border-[#B0B0B0]]`}
         {...attributes}
         {...listeners}
         style={{ transformOrigin: '0 0', ...style }}
         ref={setNodeRef}
      >
         <div
            className={`absolute top-0 left-0 w-full h-full ${
               isSelected
                  ? 'bg-white/50'
                  : 'hover:bg-black/40 duration-700 ease-in-out'
            }`}
         >
            <input
               onChange={(e) => handleSelectItem(e, id)}
               checked={isSelected}
               type="checkbox"
               className={`w-5 h-5 ${
                  isSelected ? 'm-4' : 'm-2 sm:m-4 group-hover:block hidden'
               }`}
            />
         </div>

         <img className="galleryImage" src={img} alt="img" />
      </div>
   );
};

export default SortableItem;
