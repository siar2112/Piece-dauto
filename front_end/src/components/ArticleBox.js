import React, { useState} from 'react';
import './/StyleComponents/ArticleBoxStyle.css';
import { useCart } from '../CartContext';
import Modal from 'react-modal';
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

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalQuantity, setModalQuantity]= useState(1);

    const {addToCart } = useCart();

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setModalQuantity(1);
        setIsOpen(false);
    }

    function upModalQuantity(){
        setModalQuantity(modalQuantity+1);
    }

    function lowerModalQuantity(){
        if(modalQuantity>1)
            setModalQuantity(modalQuantity-1);
        else{
            setModalQuantity(1);
        }
    }

    function addOrder(){
        //Create order (article: quantity)
        const order = {
            article,
            quantity: modalQuantity,
        };
        // Add to the Cart
        addToCart(order);

        alert(modalQuantity + " " + article.name + " bien ajouter au panier!");
        closeModal();
    }


    return (
        <div>
            <div onClick={openModal} className="ArticleBox" style={style}>
                <img style={{borderTopRightRadius:"20px", borderTopLeftRadius:"20px",width:"100%"}} src={article.image} alt={article.name}/>
                <div style={{paddingLeft:"2%", marginTop:"2%",paddingRight:"2%",textAlign:"center"}}>
                    <h1 style={{fontSize:"25px"}}>{article.name}</h1>
                    <p1>Prix: {article.price}$</p1>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <button className="ModalClosebutt" onClick={closeModal}><ion-icon name="close-circle-outline"></ion-icon></button>
                <div className="ModalImageContainer">
                    <img src={article.image} alt=""/>
                </div>
                <h1 style={{textAlign:"center", marginTop:"2%"}}>{article.name}</h1>
                <ul className="ModalList">
                    <li>
                        Prix: {article.price}$
                    </li>
                    <li style={{borderBottom:" 1px solid black",paddingBottom:"2%"}}>
                        Quantité:
                        <button onClick={lowerModalQuantity} className="DownButt">
                            <ion-icon name="remove-circle-outline"></ion-icon>
                        </button>
                        {modalQuantity}
                        <button onClick={upModalQuantity} className="UpButt">
                            <ion-icon name="add-circle-outline"></ion-icon>
                        </button>
                    </li>
                    <li>
                        <p>Total: {modalQuantity * article.price}$</p>
                        <button onClick={addOrder} className="AddCartButt">Ajouter au panier</button>
                    </li>
                </ul>
            </Modal>
        </div>
    );
};

export default ArticleBox;