import { motion } from 'framer-motion';
import React from 'react';

const Modal = ({selectedImage, setSelectedImage}) => {
    console.log(selectedImage)
    const hideModal = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImage(null)
        } 
    }
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className="backdrop" onClick={hideModal} >
            <motion.img
            initial={{y: "-100vh"}}
            animate={{y: '0'}}
            src={selectedImage} alt=""/>
        </motion.div>
    );
};

export default Modal;