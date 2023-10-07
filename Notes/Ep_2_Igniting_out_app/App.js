// create element -> create root -> render the element into the root
// without react render happens into the Browser DOM
// React.createElement(tag, {...attributes}, value);
// React.createElement("div", {}, [child1, child2]);

const heading = React.createElement(
  "h2",
  {
    classNamee: "heading_container",
  },
  "Namaste World",
  React.createElement("i", { id: "name" }, " Kingsuk "),
  ". text"
);

// const heading = React.createElement(
//   "div",
//   {classNamee: "heading_container"},
//   "Namaste World",
//   [
//     React.createElement("p", { className: "name" }, " Kingsuk "),
//     React.createElement("div", { className: "name" }, [
//       React.createElement("a", { className: "name", href:"https://www.google.com" }, "google"),
//       React.createElement('button', {className:"submit"}, "click")
//     ]),
//     // React.createElement("i", { id: "name" }, " Kingsuk "),
//   ],
// );

// create root & render - (by ReactDOM)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// notes :
// most costly operation in browser is (DOM manipulation - bcz DOM tree changes)
// many libraries and frameworks works on optimization of this DOM manipulation
// React also works - using Javascript
// heading : object - React Element - which have properties and values -==
// root.render(heading) :  render function basically takes heading object and convert it into browerreadle format and put it into root

