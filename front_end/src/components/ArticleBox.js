import React, { useState} from 'react';
import './/StyleComponents/ArticleBoxStyle.css';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width:'75%',
        zIndex:'1',
        borderRadius:'20px',

    },
};


const ArticleBox=({article, style})=>{

    return (
        <div>
            <div className="ArticleBox" style={style}>
                <img style={{borderTopRightRadius:"20px", borderTopLeftRadius:"20px",width:"100%"}} src={article.image} alt={article.name}/>
            </div>
        </div>
    );
};

export default ArticleBox;