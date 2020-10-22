import React from 'react';

function Home(){
    //const [toggle, setToggle] = React.useState("Hiya");
    //const [color, setColor]= React.useState("blue");

    //const [boxInfo]=React.useState([{name:"Fred", age:69},{name:"Freddy", age:40},{name:"Frooty", age:10}]);
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
    return(
        <div>
            {"Welcome to Mason's Material UI web app"}
        </div>
    );
}

export default Home;