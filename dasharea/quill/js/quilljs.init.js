var quill=new Quill("#snow-editor",{theme:"snow",modules:{toolbar:[[{font:[]},{size:[]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{script:"super"},{script:"sub"}],[{header:[!1,1,2,3,4,5,6]},"blockquote","code-block"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["direction",{align:[]}],["link","image","video"],["clean"]]}}),quill=new Quill("#bubble-editor",{theme:"bubble"});

// var form = document.querySelector("#richtextform");
var hiddenInput = document.querySelector('#hiddenInput');

// form.addEventListener('submit', function(e){
//   hiddenInput.value = quill.root.innerHTML;
// });

$('#richtextform').submit(function(e) {
   e.preventDefault();
   hiddenInput.value = $('#snow-editor .ql-editor').html();
   $("#richtextform")[0].submit();
});