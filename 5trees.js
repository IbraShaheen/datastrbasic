const prompt = require("prompt-sync")({ sigint: true });



class TreeNode {
    constructor(name) {
    
      this.name = name;
      this.children = [];
    }

    
  addChild = (child) => {
    if (this.children.length < 2) {this.children.push(child);
   console.log(`Child ${child.name} has been added `); }
    else console.log("You're not allowed to add more chiled");
  };


  traverse = () => {
    let nodes = [this];
    while (nodes.length > 0) {
      let currentNode = nodes.pop();
      console.log(currentNode.name);
      nodes = [...nodes, ...currentNode.children];
    }
  };


  searchForParent = (child) => {
    let nodes = [this];
    while (nodes.length > 0) {
      let currentNode = nodes.pop();

      if(child.name.split(" ")[1] === currentNode.name.split(" ")[0] )
      return currentNode
      // console.log(currentNode.name);
      nodes = [...nodes, ...currentNode.children];
    }
    return "Parent doesn't exist";
  };

  
}



let childName = prompt("Enter the child full name please, done if finish: ")
const root = new TreeNode("family")

//console.log(child.name.split(" "));

while (childName.toLowerCase() !== "done") {
  let child = new TreeNode(childName)
//console.log(root.searchForParent(child));
  let parent = root.searchForParent(child)

  if(parent !== "Parent doesn't exist" ){
    //adding
    parent.addChild(child)
  }
  else console.log(parent);


  childName = prompt("Enter the full name please , done if finish: ")
}

root.traverse();

// const family = new TreeNode("family");
// const childOne = new TreeNode("Fahad");
// const childTwo = new TreeNode("Jassim");

// const child3 = new TreeNode("ahmad");

// family.addChild(childOne);
// family.addChild(childTwo);

// family.addChild(child3);

// console.log(family);



// family.children !== [] // parent always 