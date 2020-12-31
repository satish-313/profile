import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import Framework from './Framework'

const LeftContent = ({ link, icon, info, a, link_a, framework }) => {
  const [showButton, setShowButton] = useState(false)

  return (
    <div>
      <div className="left-flex-item">
        <div className="left-flex">
          <div>
            {link ? <img src={icon} /> : <i>{icon}</i>}
          </div>
          <div>
            {a ? <a href={link_a} target="_blank">{info}</a> : <span>{info}</span>}
          </div>
        </div>
        {framework ? <button onClick={() => setShowButton(!showButton)}>{showButton ? <AiOutlineMinus className="plus-minus-button" /> : <AiOutlinePlus className="plus-minus-button" />}</button> : ''}
      </div>
      <div>
        {showButton && <Framework framework={framework} />}
      </div>
    </div>

  )
}

export default LeftContent;