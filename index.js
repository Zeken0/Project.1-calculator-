class calculator {
  constructor(previousoperandtextelement, currentoperandtextelement) {
    this.previousoperandtextelement = previousoperandtextelement;
    this.currentoperandtextelement = currentoperandtextelement;
    this.clear()
  }
}

clear() {
this.currentoperand = ''
this.previousoperand = ''
this.operation = undefined
}

delete() {

}

appendnumber(number) {
this.currentoperand = number
}

chooseOperation(operation) {

}

compute() {

}

updatedisplay() {
    this.currentoperandtextelement.innertext = this.currentoperand
}


const numberbuttons = document.querySelectorAll("[data-number]");
const operationbutton = document.querySelectorAll("[data-operation]");
const equalsbutton = document.querySelectorAll("[data-equals]");
const deletebutton = document.querySelectorAll("[data-delete]");
const allclearbutton = document.querySelectorAll("[data-all-clear]");
const previousoperandtextelement = document.querySelectorAll(
  "[data-previous-operand]"
);
const currentoperandtextelement = document.querySelectorAll(
  "[data-current-operand]"
);


const calculator = new calculator(previousoperandtextelement, currentoperandtextelement)

numberbuttons.forEach(buttons => {
    button.addeventlistener('click', () => {
        calculator.appendnumber(button.innertext)
        calculator.updatedisplay()
    })
}) 

