import React from 'react';
import fire from "../Fire";

function FirePage(){

    const [songs, setSongs]=React.useState([]);
    const [song , setSong]=React.useState({
        name: "",
        age:"",
    });
    const [submit, setSubmit]=React.useState(false);
    const db = fire.firestore();

    React.useEffect(()=>{
        let newItems = [];

        db.collection("people").get().then(function(snapshot){
            snapshot.forEach(function(doc){
                const object = doc.data();

                let item ={
                    name: object.name,
                    age:object.age,
                    id:doc.id
                };

                newItems.push(item);

            });

            setSongs(newItems);
        });


    },[db, submit]);

    const handleChange = prop => event =>{
        setSong({
            ...song, [prop]: event.target.value
        });
    };

    const handleSubmit = ()=>{
        db.collection("people").add(song).then(()=>{
            setSong({
                name:"",
                age:"",
            });
            setSubmit(!submit);
        })
    };

    const handleDelete = (id)=>{
        db.collection("people").doc(id).delete().then(()=>{
            setSubmit(!submit);
        })
    };

    const peopleEles = songs.map((sng, idx)=>
        <div key={idx}>
            <h1>{sng.name}</h1>
            <h3>{sng.age}</h3>
            <button onClick={()=>handleDelete(sng.id)}>Delete Person</button>
        </div>
    );

    return(
        <div>
            <div>{peopleEles}</div>
            <input placeholder={"Name..."} onChange={handleChange("name")}/>
            <input placeholder={"Number..."} onChange={handleChange("age")}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default FirePage;