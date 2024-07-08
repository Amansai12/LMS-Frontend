import React, { useEffect, useState } from "react";
import "../App.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'
function Card(props) {
  let path = props.info.photoURL;
  let d = props.info.description?.substring(0, 90) + '...';
  let t = props.info.name?.substring(0, 15) + '..';
  
  
  
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  return (
    <>
      <div
        className="p-4 bg-red-50 flex border-2 gap-4 rounded-md flex-col md:flex-row cardd relative overflow-hidden"
        style={{ width: "490px" }}
      >
        <img className="max-w-40 self-center" src={path} alt="" />
        <div className="info flex justify-center items-center md:items-start flex-col text-center md:text-left">
          <h1 className="text-3xl font-semibold mt-4 self-center md:self-start text-red-500">
            {t}
          </h1>
          <p className="text-md my-2">{d}</p>
          {/* <p className='text-lg font-semibold text-red-400'>{props.info.category}</p> */}
          {props.info.quantity > 0 ? (
            <p className="text-white my-1 font-medium text-sm md:text-left text-center bg-green-700 px-4 rounded-2xl">
              Available
            </p>
          ) : (
            <p className="text-white my-1 font-medium text-sm bg-red-700 px-4 rounded-2xl">Not Available</p>
          )}
          <button
            style={{border:'1px solid black'}}
            className="btn bg-red-200 w-full text-lg mt-3 hover:bg-red-400"
            onClick={()=>{
              setOverlay(<OverlayOne />) 
              onOpen()
            }}
          >
            view <i className="ri-arrow-right-line"></i>
          </button>
          <Modal size={'5xl'} scrollBehavior={'inside'} isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader><h1 className="text-3xl font-bold">{props.info.title}</h1></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex md:flex-row gap-5 flex-col justify-center items-center">
              <div className="mr-3" style={{height:"300px"}}>
              <img style={{maxHeight:"100%"}} src={path} alt="" />
              </div>
              <div className="mt-4 w-full md:w-7/12 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-3 text-red-500">{props.info.name}</h1>
                {/* <h1 className="text-xl font-bold">Description: </h1> */}
              <span className="text-lg my-4">{props.info.description}</span>
              <h1 className="text-xl mt-4"><span className="font-semibold bg-red-200 rounded-3xl px-5 inline-block text-lg">{props.info.category}</span> </h1>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn bg-red-300" onClick={onClose}>close</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          
        </div>
        <div className="layer absolute top-0 left-0 w-full h-full bg-red-100 -z-10"></div>

        
      </div>
    </>
  );
}

export default Card;
