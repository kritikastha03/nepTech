import { useFilePicker } from "use-file-picker";
import { useState } from "react";
// import { handleExportImage } from "./components/ImageCollection";
import {
  FileAmountLimitValidator,
  FileTypeValidator,
  FileSizeValidator,
  ImageDimensionsValidator,
} from "use-file-picker/validators";

export default function Filepicker({ url }) {
  const [img, setImg] = useState(false);
  const { openFilePicker, filesContent, loading, errors } = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
    validators: [
      new FileAmountLimitValidator({ max: 1 }),
      new FileTypeValidator(["jpg", "png"]),
      new FileSizeValidator({ maxFileSize: 50 * 1024 * 1024 }),
      new ImageDimensionsValidator({
        maxHeight: 1100,
        maxWidth: 1000,
        minHeight: 200,
        minWidth: 200,
      }),
    ],
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors.length) {
    console.log("Errors:", errors);
    const errorReasons = errors.map((error) => error.name);
    return (
      <div className=" border border-dashed border-gray-500 flex flex-col justify-center items-center w-[40%] h-[400px]">
        <h1 className="md:text-xl sm:text-sm">Error occured.....</h1>
        <h4>Reason: {errorReasons}</h4>
      </div>
    );
  }
  return (
    <>
      <div 
        className={`${
          !img && "border"
        } border-dashed border-gray-500 flex justify-center items-center w-[40%] h-[400px]`}
      >
        {!img ? (
          <button
            onClick={() => {
              openFilePicker();
              setImg(true);
            }}
            className="border rounded p-2 border-gray-500 text-gray-700 hover:bg-gray-300 hover:border-none"
          >
            Select an image.
          </button>
        ) : (
          <div>
            {url !== "" ? (
              <Image alt="image" src={url} height={300} width={300} />
            ) : (
              filesContent.map((file, index) => (
                <div key={index}>
                  <Image height={500} width={500} alt={file.name} src={file.content}/>
                  <br />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}
