import Link from 'next/link';
import Image from 'next/image';

import { BsArrowRight } from "react-icons/bs";


export default function Banner({ setObj }) {
  
  const url = `${setObj.image.url}/${setObj.image.width*2}/${setObj.image.height*2}?${setObj.image.attribute}`
  
  return (
    <div className='border-0 rounded-3xl shadow-xl p-8 flex flex-col'>
      <div className='flex justify-between'>
        <div>
          <h1>{setObj.title}</h1>
          <p>{setObj.description}</p>
        </div>
        <Image
          src={url}
          alt= {setObj.image.alt}
          width={setObj.image.width}
          height={setObj.image.height}
        />
      </div>
      <Link 
        href="{setObj.link.url}"
        className='flex flex-start items-center'>
        {setObj.link.text}
        <BsArrowRight/>
      </Link>
    </div>
  );
}