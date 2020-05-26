import AbstractComponent from "./abstract-component.js";

const METHOD_IS_NOT_INPLEMENTED_RECOVERY_LISTENERS = `Abstract method not implemented: recoveryListeners`;
export default class AbstractSmartComponent extends AbstractComponent {
  recoveryListeners() {
    throw new Error(METHOD_IS_NOT_INPLEMENTED_RECOVERY_LISTENERS);
  }

  rerender() {
    const oldElement = this.getElement();
    const parent = oldElement.parentElement;

    this.removeElement();

    const newElement = this.getElement();

    parent.replaceChild(newElement, oldElement);

    this.recoveryListeners();
  }
}
