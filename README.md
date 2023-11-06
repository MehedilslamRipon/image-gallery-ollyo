📝 **Documentation for Ollyo Image Gallery Task**

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Functionality](#functionality)
- [Conclusion](#conclusion)

## Introduction

The Ollyo Image Gallery Task required implementing a ReactJS image gallery with specific functionalities such as a gallery layout, sorting, deleting multiple images, setting a feature image, smooth user experience, and hosting a live demo. The task was successfully completed using ViteJS, ReactJS, and Tailwind CSS.

## Technologies Used

- ViteJS
- ReactJS
- Tailwind CSS
- DND Kit (third-party library for drag-and-drop functionality)

## Project Structure

The project was structured with two main components, and a unique id generator function:

1. **App.jsx**
   - This component served as the wrapper for the image gallery.
   - It included the overall layout and integrated the Sortable.jsx component.
   - The gallery layout was implemented using Tailwind CSS grid.
   - The App component handled the image upload functionality and passed relevant data and callbacks to Sortable.jsx.

2. **Sortable.jsx**
   - This component represented the individual images in the gallery.
   - It included checkboxes for image selection, visual indication of selected images.
   - The drag-and-drop functionality was implemented using the DND Kit library.
   - Sortable.jsx received image data and callbacks from the App component to manage image reordering, deletion, and setting a feature image.
   - 
3. **UUIDgenerator.js**
   - This JavaScript function generates a UUID using the current timestamp and a random number. It replaces certain characters in a predefined format with random hexadecimal digits, and returns a UUID.

## Usage

1. **Selecting Images:**
   - Users can select multiple images by clicking the checkbox associated with each image.
  
2. **Deleting Images:**
   - Selected images can be deleted using the delete button.

3. **Reordering Images:**
   - Users can reorder images by dragging and dropping them within the gallery.
   - Dragging an image indicates its position, and dropping it updates the gallery order.
  
4. **Setting Feature Image:**
   - The first image (from left to right) is considered the featured image.
   - The feature image is displayed larger and visually distinct from other images.

## Functionality

1. **Gallery Layout**
   - The image gallery was implemented using a responsive grid layout provided by Tailwind CSS.
   - The gallery displayed images with one feature image appearing larger than the others, offering a visually distinct appearance.

2. **Sorting**
   - The image gallery enabled users to reorder images by providing intuitive drag-and-drop functionality.
   - Images could be dragged and dropped to a new position in the gallery, updating the visual order accordingly.

3. **Deleting Multiple Images**
   - Users could select multiple images for deletion.
   - Checkboxes were displayed for each image, and selected images were visually indicated.
   - The "Delete" button allowed users to delete the selected images from the gallery.

4. **Setting Feature Image**
   - The first image from the left-to-right (LTR) direction was considered the feature image by default.
   - Users could set a different image as the feature image by dragging it to the desired position in the gallery.
   - The feature image was visually distinct from the other images, ensuring clear identification.

5. **User Experience**
   - Efforts were made to ensure a smooth and responsive user experience.
   - Transitions and animations were implemented to enhance the look and feel of the gallery.
  
6. **Live Demo**
   - The implemented ReactJS image gallery was hosted on Vercel.
   - The live demo of the project can be accessed at the following URL: [https://reactjs-task-ollyo-mehedi.vercel.app/](https://reactjs-task-ollyo-mehedi.vercel.app/).

## Conclusion

The Ollyo Image Gallery Task was successfully completed by fulfilling all the provided requirements. The project utilized ViteJS, ReactJS, Tailwind CSS, and the DND Kit library for creating a grid-based image gallery with sorting, deletion, and feature image functionalities. The project delivered a smooth user experience and was hosted on Vercel for assessment.

(*Note: This documentation assumes that the provided information accurately represents the implemented solution.*)
