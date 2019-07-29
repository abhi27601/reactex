console.log("aaaaaaaaaaa");

//JSX
var template=<div><p>Hell Boy !! you started</p><h1>My first react with Babel</h1></div>;
//var template = React.createElement("p", null, "This is my first react app");
const user={
    name:"Abhijit",
    age:26,
    location:'bangalore'
}

//<p>My location: {getlocation(user.location)}</p>
function getlocation(location){
 if(location){
     return <p>My location:{location}</p>;
 }
 /*else{
     return "";
 }*/
}
var username="Abhi";
var userage=26;
var userlocation='Bangalore';
var temp2=(
<div>
    <h1>{username.toUpperCase()}!</h1>
    <p>My Age: {userage}</p>
    <p>My location: {userlocation}</p>
</div>
)

const temp3=(
    <div>
        <h1>{user.name ? user.name.toUpperCase():'Anonymous'}! From Object</h1>
    {user.age >=18 && <p>My Age: {user.age}</p> }   
    
        {getlocation(user.location)}
    </div>
    )
    var app={
        title:"Indecision App",
        subtitle: "To do list",
        options:[]
    }

    const onFormSubmit = (e) =>{

        e.preventDefault();
        const option= e.target.elements.option.value;
        if(option){
            app.options.push(option);
            e.target.elements.option.value='';
        }
        renderindecision();
    }
    const removeall= () =>{
        app.options.length = 0 ;
        renderindecision();
    }
   
    const appid=document.getElementById("app");
    const numbers=[55,101,1000];


    const renderindecision= () =>{
        const temp5=(
            <div>
                <h1>{app.title}</h1>
                { app.subtitle && <p>{app.subtitle}</p>}
                <p> {app.options.length >0 ? 'Here are options':'No options'}</p>
                <p>{app.options.length}</p>
                {
                    
                    numbers.map((number) =>{
                        return <p key={number}>Number:{number*2}</p>;
                    })
                }
                
                    <ol>
                        <li>List one</li>
                        <li>List two</li>
                    </ol>
    
                    <form onSubmit={onFormSubmit} >
    
                        <input type="text" name="option"></input>
                        <button onClick = {removeall}>RemoveAll button</button>
                        <button type="submit"> Add Button </button>
    
                    </form>
            </div>
        )
        ReactDOM.render(temp5,appid);
    }
    renderindecision();