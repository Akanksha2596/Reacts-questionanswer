import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
    const[showInfo, setShowInfo] = useState(false)
    
    function toggle() {
        setShowInfo(prevShowInfo => !prevShowInfo);
    }
    return (
            <article className='question'>
                <div>
                    <h2>{title}</h2>
                    <button className='btn' onClick={toggle}>
                        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                </div>
                 {showInfo && <p>{info}</p>}
             </article>
        );
};

export default Question;
