'use client'
import React, { useEffect, useState } from 'react'
import types from './contentType.d'
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from '@nextui-org/react'

const Content = (props: types.ConfigProps) => {
  const [contentData, setContentData] = useState<string | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { closeModal } = props

  useEffect(() => {
    if (props.isOpenContent) {
      renderContent()
      onOpen()
    }
  }, [props.isOpenContent])

  const onCloseModal = () => {
    onClose()
    closeModal()
  }

  const renderContent = async () => {
    const ePub = await fetch(`http://localhost:9090/?chapter=7`)
    const ePubText = await ePub.text()
    setContentData(ePubText)
  }

  return (
    <Modal backdrop="blur" isOpen={isOpen} onClose={onCloseModal}>
      <ModalContent>
        <ModalBody
          dangerouslySetInnerHTML={{ __html: contentData as string }}
        ></ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default Content
