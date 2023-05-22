"use client";
import lazy from "next/dynamic";

import { useState, type FC } from "react";

const Image = lazy(() => import("next/image"));

const PreviewImage: FC = () => {
  const [previewImage, setPreviewImage] = useState<File | null>(null);

  return (
    <>
      <input
        className="dark:bg-semi-gray w-[90%] rounded-lg p-4 outline-none duration-200 dark:text-white"
        type="file"
        name="image"
        aria-label="Post File Upload"
        onChange={event => setPreviewImage(event.target.files?.[0] as File | null)}
        required
      />
      {previewImage && (
        <Image
          src={URL.createObjectURL(previewImage)}
          className="mt-7 h-fit w-[90%] rounded-xl"
          alt="Selected Image"
          height={previewImage.size}
          width={previewImage.size}
        />
      )}
    </>
  );
};

export default PreviewImage;