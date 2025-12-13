import React from "react";
import videoUploadIcon from "../assets/video-upload.png";

function VideoUpload() {
  return (
    <div class="flex justify-center py-9">
      <form class="flex flex-col space-x-6">
        <div className="flex items-center space-x-6">
            <div class="shrink-0">
          <img
            class="h-16 w-16 object-cover rounded-full"
            src={videoUploadIcon}
            alt="Current profile photo"
          />
        </div>
        <div>
          <label class="block">
            <span class="sr-only">Choose profile photo</span>
            <input
              type="file"
              class="block w-full text-sm text-gray-500
                        file:mr-4 file:rounded-full file:border-0
                        file:bg-violet-50 file:px-4 file:py-2
                        file:text-sm file:font-semibold
                      file:text-violet-700
                    hover:file:bg-violet-100
                dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500
                "
            />
          </label>
        </div>
        </div>

        <div className="flex flex-col items-start gap-4 mt-4">
          <div className="flex flex-col gap-1 ">
            <label htmlFor="Title">Title</label>
            <input
              id="Title"
              className="rounded-xl p-1 "
              type="text"
              placeholder="Enter title"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="Description">Description</label>
            <input
              id="Description"
              className="rounded-xl p-1"
              type="text"
              placeholder="Enter description"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default VideoUpload;
