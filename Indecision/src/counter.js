let count=0;
    const addOne= () =>{
        console.log("addOne")
        count=count+1;
        console.log(count);
        rendercount();
    }
    const templateone=(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={addOne}>+1</button>
        </div>
    )

    const substractOne = () =>{
        console.log("substarctOne")
        count=count-1;
        console.log(count);
        rendercount();
    }
    



const rendercount= () =>{
    const templatetwo=(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={substractOne}>-1</button>
        </div>
    )
    ReactDOM.render(templatetwo,appid);
}

rendercount();