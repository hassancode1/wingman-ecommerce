import React from 'react';
import { Star } from 'lucide-react';

interface Props {
    rating:number;
     image:string;
      name:string;
       price: number;
        description  :string
}
const ProductCard = ({rating, image, name, price , description }:Props) => {

  const renderStars = (currentRating: number) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <Star 
        key={star} 
        size={20} 
        fill={star <= currentRating ? "#54958a" : "none"}
        stroke={star <= currentRating ? "#54958a" : "#888"}
        className="text-yellow-500"
      />
    ));
  };

  return (
    <div className='flex flex-col w-[350px] justify-center items-center mx-auto h-[600px] bg-secondary rounded-lg overflow-hidden'>
      <div className='bg-secondary h-[250px] flex items-center rounded-lg justify-center p-4'>
        <img
          className='max-w-full max-h-full object-contain'
          src={image}
          alt="Wireless Buds"
        />
      </div>
      
      <div className='p-4 flex-grow flex flex-col justify-between'>
        <div>

            <h2 className='font-semibold text-text text-lg'>{name}</h2>
          <p className='text-text text-sm mb-2'>{description}</p>
          
          <div className='flex  justify-between items-center mt-8'>
          <div className='flex items-center space-x-1 '>
            {renderStars(rating)}
            <span className='text-text text-sm ml-2'>({rating}/5)</span>
          </div>
          <span className='font-semibold text-text text-xl'>${`${price}`}</span>
        </div>
        </div>
          
        {/* <button
          className='
            bg-[#66B29B]
            rounded-full
            p-3
            text-white
            w-full
            hover:bg-[#54958a]
            transition-colors
            duration-300
          '
        >
          Add to Cart
        </button> */}
      </div>
    </div>
  );
};

export default React.memo(ProductCard);