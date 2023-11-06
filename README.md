📝 **Documentation for Ollyo Image Gallery Task**

[![Ollyo photo gallery banner image](https://i.ibb.co/6sj8Chk/Ollyo-Image-Gallery-Mehedi-Islam-Ripon.png)](https://ollyo-image-gallery-mehedi.vercel.app/)

## Table of Contents

-  [Introduction](#introduction)
-  [Technologies Used](#technologies-used)
-  [Installation](#installation)
-  [Live Demo](#live-demo)
-  [Project Structure](#project-structure)
-  [Usage](#usage)
-  [Functionality](#functionality)
-  [Conclusion](#conclusion)

## Introduction

The Ollyo Image Gallery Task required implementing a ReactJS image gallery with specific functionalities such as a gallery layout, sorting, deleting multiple images, setting a feature image, smooth user experience, and hosting a live demo. The task was successfully completed using ViteJS, ReactJS, and Tailwind CSS.

## Technologies Used

-  ViteJS: ViteJS is used as the development server and bundler for the ReactJS application.
-  ReactJS: The application is built using the ReactJS library, which provides a component-based architecture for building user interfaces.
-  Tailwind CSS: Tailwind CSS is used for styling the user interface. It provides a utility-first approach to CSS and enables rapid UI development.
-  DND Kit: DND Kit is a third-party library used to implement drag-and-drop functionality for reordering images in the gallery.
-  Vercel: A cloud platform that enables developers to host websites and web services.

## Installation

To install the project using either Yarn or npm, follow the steps below:

1. Clone the repository to your local machine or download the source code as a ZIP file.

2. Open a terminal and navigate to the project's root directory.

3. Install the project dependencies by executing either of the following commands:

   Using Yarn:

   ```
   yarn install
   ```

   Using npm:

   ```
   npm install
   ```

   This command will download and install all the required packages and dependencies defined in the `package.json` file.

4. Once the installation is complete, you can start the development server by running either of the following commands:

   Using Yarn:

   ```
   yarn dev
   ```

   Using npm:

   ```
   npm run dev
   ```

   This command will compile the project and start a local development server. You can access the running application by visiting `http://localhost:3000` in your browser.

5. Voila! You have successfully installed and started the Ollyo Image Gallery Task project locally.

If you encounter any issues during the installation process, feel free to ask for further assistance.

## Live Demo

-  The live demo of the project can be accessed at the following URL: [https://ollyo-image-gallery-mehedi.vercel.app/](https://ollyo-image-gallery-mehedi.vercel.app/).

## Project Structure

The project was structured with two main components, and a unique id generator function:

1. **App.jsx**

   -  This component served as the wrapper for the image gallery.
   -  It included the overall layout and integrated the Sortable.jsx component.
   -  The gallery layout was implemented using Tailwind CSS grid.
   -  The App component handled the image upload functionality and passed relevant data and callbacks to Sortable.jsx.

2. **Sortable.jsx**
   -  This component represented the individual images in the gallery.
   -  It included checkboxes for image selection, visual indication of selected images.
   -  The drag-and-drop functionality was implemented using the DND Kit library.
   -  Sortable.jsx received image data and callbacks from the App component to manage image reordering, deletion, and setting a feature image.
   -
3. **UUIDgenerator.js**
   -  This JavaScript function generates a UUID using the current timestamp and a random number. It replaces certain characters in a predefined format with random hexadecimal digits, and returns a UUID.

## Usage

1. **Selecting Images:**

   -  Users can select multiple images by clicking the checkbox associated with each image.

2. **Deleting Images:**

   -  Selected images can be deleted using the delete button.

3. **Reordering Images:**

   -  Users can reorder images by dragging and dropping them within the gallery.
   -  Dragging an image indicates its position, and dropping it updates the gallery order.

4. **Setting Feature Image:**

   -  The first image (from left to right) is considered the featured image.
   -  The feature image is displayed larger and visually distinct from other images.

5. **Uploading new images:**
   -  Click on the "Add Images" button located at the bottom right corner of the gallery.
   -  A file selection dialog box will appear.
   -  Navigate to the image file you wish to upload and select it.
   -  Click on the "Open" button.

## Functionality

1. **Gallery Layout**

   -  The image gallery was implemented using a responsive grid layout provided by Tailwind CSS.
   -  The gallery displayed images with one feature image appearing larger than the others, offering a visually distinct appearance.

2. **Sorting**

   -  The image gallery enabled users to reorder images by providing intuitive drag-and-drop functionality.
   -  Images could be dragged and dropped to a new position in the gallery, updating the visual order accordingly.

3. **Deleting Multiple Images**

   -  Users could select multiple images for deletion.
   -  Checkboxes were displayed for each image, and selected images were visually indicated.
   -  The "Delete" button allowed users to delete the selected images from the gallery.

4. **Setting Feature Image**

   -  The first image from the left-to-right (LTR) direction was considered the feature image by default.
   -  Users could set a different image as the feature image by dragging it to the desired position in the gallery.
   -  The feature image was visually distinct from the other images, ensuring clear identification.

5. **Adding New Images**

   -  A user-friendly "Add New Image" feature was implemented, enhancing user interaction and flexibility.
   -  A dedicated "Add Images" button was placed in the bottom right corner of the gallery, easily accessible to users. Upon clicking the "Add Images" button, users were prompted to upload images from their devices.

6. **User Experience**

   -  Efforts were made to ensure a smooth and responsive user experience.
   -  Transitions and animations were implemented to enhance the look and feel of the gallery.

7. **Deployment**
   -  The implemented ReactJS image gallery was hosted on Vercel.
   -  Live demo - [Ollyo Image Gallery](https://ollyo-image-gallery-mehedi.vercel.app/).

## Conclusion

The Ollyo Image Gallery Task was successfully completed by fulfilling all the provided requirements. The project utilized ViteJS, ReactJS, Tailwind CSS, and the DND Kit library for creating a grid-based image gallery with sorting, deletion, and feature image functionalities. The project delivered a smooth user experience and was hosted on Vercel for assessment.

(_Note: This documentation assumes that the provided information accurately represents the implemented solution._)
