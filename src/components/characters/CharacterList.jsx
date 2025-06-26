import ItemCharacter from "./ItemCharacter";

function CharacterList({pcharacters}) {

    return (
        <main>
            <ul className ="character__list"> 

                {pcharacters.map(item => 
                    <ItemCharacter pitem={item} key={item.id} />
                )            
                    }
                
                </ul>
        </main>

   
    );
}

export default CharacterList