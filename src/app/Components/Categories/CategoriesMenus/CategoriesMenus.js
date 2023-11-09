import React from 'react'

const CategoriesMenus = ({ duas }) => {
  console.log(duas);
  if (!duas) {
    return <p>Loading...</p>;
  }
  if (!duas || duas.length === 0) {
    return <p>No categories found.</p>;
  }

  return (
        <>
        {duas.map((dua) => (
    <div key={dua.id} className="collapse">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
          <div className="flex justify-between gap-1.5 items-center">
            <div className="flex gap-1.5">
              <div className='flex flex-col items-center justify-center'>
                <img className="max-w-fit" src="https://i.ibb.co/s1Ln5fb/005-fever.png" alt="" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-green-500">{dua?.cat_name_bn}</h4>
                <p className="text-sm font-normal text-gray-400">Subcategory: 11</p>
              </div>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-slate-700">15</h5>
              <p className="text-sm font-normal text-gray-400">Duas</p>
            </div>
          </div>
       
      </div>
      <div className="collapse-content">
        <ul className="steps steps-vertical">
          <li className="step step-secondary">Register</li>
          <li className="step step-secondary">Choose plan</li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
        </ul>
      </div>
    </div>
     ))}
        </>
  )
}

export default CategoriesMenus