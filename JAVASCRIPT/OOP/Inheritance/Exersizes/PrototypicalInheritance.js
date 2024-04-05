
function HtmlElement() {

    this.click = function () {
        console.log("clicked")
    }
}

HtmlElement.prototype.focus = function () {
    console.log("focused")
}


function HtmlSelectElement(array = []) {
    this.items = array
    this.addItem = function (item) {
        this.items.push(item)
    }
    this.removeItem = function (item) {
        let index = this.items.indexOf(item)
        this
            .items.splice(index, 1)
    }
    this.render = () => {
        return `
        <select>${this.items.map(item => `
            <option>${item}<option>`).join('')}
        </select>
        `
    }
}
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;


function HtmlImageElement(src) {
    this.src = src

    this.render = function () {
        return `<img src="${this.src}" />`
    }

}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;


let elements = [new HtmlSelectElement([1, 2]), new HtmlImageElement('srdx')]

for (let element of elements) {
    console.log(element.render())
}