import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <>
      <div className="flex flex-col px-10 gap-5">
        <div className="flex justify-between">
          <div className="w-3/6 p-3 text-lg">
            <h1 className="font-block text-5xl mb-2">Block of text</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              doloremque esse sint quo id? Provident vitae adipisci alias magni?
              Unde aperiam quam corrupti consequatur iste alias quo nihil
              consequuntur laborum ratione, sapiente nostrum assumenda neque
              dolore ab voluptatem incidunt temporibus minus tempora natus quod
              pariatur. Inventore minima perferendis vitae quos sapiente labore.
              Totam voluptate quod tempore praesentium commodi optio sed
              laudantium autem nulla delectus, odio id excepturi, modi iste hic
              perspiciatis quo magnam tenetur atque corporis reprehenderit
              inventore. Ipsam, in non? Maiores alias quo hic deserunt sequi
              nemo sit veritatis debitis.
            </p>
          </div>
          <div>
            <Image
              src="/images.jpg"
              width={600}
              height={400}
              className="rounded"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <Image
              src="/images.jpg"
              width={600}
              height={400}
              className="rounded"
            />
          </div>
          <div className="w-3/6 p-3 text-lg">
            <h1 className="font-block text-5xl  mb-2">Block of text</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              doloremque esse sint quo id? Provident vitae adipisci alias magni?
              Unde aperiam quam corrupti consequatur iste alias quo nihil
              consequuntur laborum ratione, sapiente nostrum assumenda neque
              dolore ab voluptatem incidunt temporibus minus tempora natus quod
              pariatur. Inventore minima perferendis vitae quos sapiente labore.
              Totam voluptate quod tempore praesentium commodi optio sed
              laudantium autem nulla delectus, odio id excepturi, modi iste hic
              perspiciatis quo magnam tenetur atque corporis reprehenderit
              inventore. Ipsam, in non? Maiores alias quo hic deserunt sequi
              nemo sit veritatis debitis. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
