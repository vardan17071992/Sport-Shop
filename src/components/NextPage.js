import React from 'react'
import { useParams } from 'react-router-dom'

export default function NextPage({ items }) {
  const params = useParams();
  let item = items.find((el) => el.id == params.id)
  console.log(item);
  return (
    <div className='nextPageDiv'>
      <h1>{item.title}</h1>
      <img src={"/img_section/" + item.img} alt="" width={300} height={300} />
    </div>
  )
}
