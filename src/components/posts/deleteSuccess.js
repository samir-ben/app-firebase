import React from 'react';


const DeleteSuccss = (props) => {


    
    
    return (
        
        <div>
           
            Supression réalisée
            {setTimeout( props.history.push('/'), 5000)}
        </div>
    );
};

export default DeleteSuccss;