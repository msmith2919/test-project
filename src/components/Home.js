import React from 'react';
import Box from "./Box";
import style from "../style/style";

function Home(){
    const [toggle, setToggle] = React.useState("Hiya");
    const [color, setColor]= React.useState("blue");

    const [boxInfo]=React.useState([{name:"Fred", age:69},{name:"Freddy", age:40},{name:"Frooty", age:10}]);
    //const [displayInfo, setInfo]=React.useState(boxInfo);
    //const [currentSort, setSort]=React.useState("all")

    /*React.useEffect(()=>{ //This is how to sort using buttons (lifecycle event)
        let newArray;
        if (currentSort!=="all"){
            newArray=boxInfo.filter(person => person.name===currentSort);
            setInfo(newArray);
        }else{
            setInfo(boxInfo)
        }

    }, [currentSort]);*/

    const boxEles = boxInfo.map((bx, idx)=>
        <Box name={bx.name} age={bx.age} key={idx}/>
    );

    return (
        <div className="homePage" style={{backgroundColor:color, color: "white"}}>
            <div className="cool">
                {toggle}
            </div>
            <div style={style.exampleBox}></div>
            <button onClick={()=>setToggle("Hello there")}>Click Me</button>
            <button onClick={()=>setColor("red")}>Change Color</button>
            {boxEles}
        </div>
    );
}

export default Home;