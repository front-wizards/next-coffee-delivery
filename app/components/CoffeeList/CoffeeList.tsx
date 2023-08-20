import React from 'react'
import  { baloo2 } from '../../utils/fonts/fonts'
import Tag from '../Tag/Tag'

const CoffeeList = () => {
  return (
    <div>
        <div className="flex justify-between items-center py-8 w-full sm:px-[160px]">
            <div className={`${baloo2.className} text-3xl leading-[41.6px] font-extrabold max-w-[588px]`}>Nossos Cafés</div>
            <div className="max-w-[588px]">
                <Tag />
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default CoffeeList