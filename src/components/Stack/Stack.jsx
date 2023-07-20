import React from 'react';

const Stack = (data) => {
    return (
        <>
        <div className="border p-4">
            <div className='flex items-center gap-7 mb-2'>
            <img className="w-1/3 h-1/3" src={data.image} alt={data.alt}/>            
            <h3>{data.title}</h3>
            </div>
            <p>{data.description}</p>
        </div>
        </>
    );
};

export default Stack;