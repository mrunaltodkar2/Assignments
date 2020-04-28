import React from 'react';

/*With JSX*/
// const Hello = ()=>{
//                     return(
//                     <div className='dummyClass'>
//                         <h1>Hello Mrunal</h1>
//                     </div>    
//                     )
//                 };

//without JSX
const Hello = () =>{
        return React.createElement('div', 
                    {id: 'name', className: 'dummyClass'},
                        React.createElement('h1', null, 'Hello Mrunal') );
}


export default Hello;

