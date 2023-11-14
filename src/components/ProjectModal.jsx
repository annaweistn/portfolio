import React from "react";
import ReactDOM from "react-dom";

const ProjectModal = ({ project, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 max-w-md mx-auto rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{project.name}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full mb-4"
        />
        <div className="flex justify-between">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover-bg-green-600">
            Action Button
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ProjectModal;
