import React from 'react'
import  { roboto } from '../../utils/fonts/fonts'

const Tag = () => {

    const tagList = [
        {id: 1, name: 'Tradicional', icon: ''},
        {id: 2, name: 'Especial', icon: ''},
        {id: 3, name: 'Com Leite', icon: ''},
        {id: 4, name: 'Alcólico', icon: ''},
        {id: 5, name: 'Gelado', icon: ''},
    ]

  return (
    <div className={`${roboto.className} text-xs font-bold leading-[13px] flex justify-between align-middle gap-4`}>
        {tagList.map(tag => (
            <div key={tag.id} className="text-[#C47F17] px-3 py-[6px] border border-[#DBAC2C] rounded-full">
                {tag.name.toUpperCase()}
            </div>
        ))}
    </div>
  )
}

export default Tag