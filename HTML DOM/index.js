function change(){
    // document.getElementByTagName("H2") returns a NodeList of the <h2>
    // elements in the documents, and the first is number 0:

    var header=document.getElementsByTagName("H2").item(0);
    // the firstChild of the header is a Text node.
    header.firstChild.data="A dynamic document";
    // now the header is "A dynamic document".

    var para=document.getElementsByTagName("P").item(0);
    para.firstChild.data="This is the first paragraph";


    // Create a new Text node for the second paragraph.
     var newText=document.createTextNode("This is the second paragraph.");
     // Create a new element to be the second paragraph
     var newElement=document.createElement("p");

     // put the text in the paragraph.
     newElement.appendChild(newText);

     // and put the paragraph on the end of the document by appending it to
     //the BODY (which is the parent of para)

     para.parentNode.appendChild(newElement);
}