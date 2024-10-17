import { ContextMovies } from '../Store';
import React, { useEffect, useState, useContext } from 'react'
import PeopleCard from '../Home/component/PeopleCard';

export default function People() {

  let {people} = useContext(ContextMovies);

  return (
    <div className='row gy-2 py-5'>
      {people.map((people,i)=>(
        <PeopleCard key={i} people={people} />
      ))}
    </div>
  )
}
