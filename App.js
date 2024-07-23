const parent = 
    React.createElement("div", {id: "parent"}, 
        [React.createElement("div", {id: "child1"},
            [React.createElement("h1", {id: "heading1"}, "I am an h1 tag"),
                React.createElement("h2", {id: "heading2"}, "I am an h2 tag")]
        ),
        React.createElement("div", {id: "child2"},
            [React.createElement("h1", {id: "heading3"}, "I am an h1 tag"),
                React.createElement("h2", {id: "heading4"}, "I am an h2 tag")]
        )]
    )
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);