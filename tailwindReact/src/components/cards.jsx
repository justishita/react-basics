import React from 'react';

function Card({username,position, location="Algolia"}){
    return(
        <figure className="bg-slate-100 w-[290px] h-[400px] p-6 mt-4 mx-auto dark:bg-slate-800 flex flex-col items-center">
        <img
          className="w-32 h-32 rounded-full"
          src="https://images.pexels.com/photos/29870472/pexels-photo-29870472/free-photo-of-scenic-winter-view-of-a-mountain-village-by-a-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Sarah Dayan"
        />
        <div className="pt-6 text-center">
          <blockquote>
            <p className="text-lg font-semibold">“Tailwind CSS is the only framework that I've seen scale on large teams.”</p>
          </blockquote>
          <figcaption className="font-medium mt-4">
            <div className="text-sky-500 dark:text-sky-400">{username || "Maria Kenny"}</div>
            <div className="text-slate-700 dark:text-slate-400 text-sm">
              {position || "Manager"}, {location }
            </div>
          </figcaption>
        </div>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" >Visit Me</button>
      </figure>
    )
}

export default Card