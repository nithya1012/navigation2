import React from 'react';
import ReactDom from 'react-dom';
const userNames=['Jesse','Tom','Anna']
function Li(){
    const renderListOfUserNames=(names)=>{
        return names.map(name=><li>{name}</li>)
        }
        return(<div>
            <ul>
                {renderListOfUserNames(userNames)}
            </ul>
        </div>);
}
export default Li;