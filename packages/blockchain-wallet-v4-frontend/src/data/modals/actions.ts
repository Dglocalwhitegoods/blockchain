import * as AT from './actionTypes'
import { ModalActionTypes, ModalNameType, ModalParamPropsType } from './types'

// Remove the last modal added in the stack
export const closeModal = (modalName?: ModalNameType): ModalActionTypes => ({
  payload: {
    modalName
  },
  type: AT.CLOSE_MODAL
})
// Remove all the modals in the stack
export const closeAllModals = (): ModalActionTypes => ({
  type: AT.CLOSE_ALL_MODALS
})
// Add a modal in the stack
export const showModal = (
  type: ModalNameType,
  props: ModalParamPropsType,
  options = {}
): ModalActionTypes => ({
  payload: { options, props, type },
  type: AT.SHOW_MODAL
})
// Update the last modal added in the stack
export const updateModalOptions = (options = {}): ModalActionTypes => ({
  payload: { options },
  type: AT.UPDATE_MODAL
})
