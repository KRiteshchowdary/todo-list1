import styled from 'styled-components';

// .Add-event{
//     display: flex;
//     flex-wrap: wrap;
//     width: 60%;
//     background-color: white;
//     color: #4d4d4d;
//     padding:20px;
//     margin :auto;
//   }

export const Textinput = styled.input`
    flex-grow: 3;
    color: #4d4d4d;
    background-color:white;
    padding : 20px 0px 20px 35px;
    font-size: 24px;
    border: none;
  `
  
  const Addbutton = styled.button`
  flex-grow: 1;
  padding : 20px 20px 20px 5px;
  font-family: Roboto;
  font-size: 20px;
  // background-color: white;
  color: #4d4d4d;
  border:1px solid #4d4d4d
  `
  
  export const TodoEventAdder = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    background-color: white;
    color: #4d4d4d;
    padding:20px;
    margin :auto;
  `
  
  
  export const TodoEvent = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 62%;
    padding:30px;
    margin :auto;
    background-color: white;
    border-top: 2px solid #e1e1e1;
    padding:10px 10px 15px;
  `


  export const Checkboxinput = styled.input`
    height:40;
    width:40;
    border-radius:20;
    color:#f5f5f5
  `
  
  export const Todolabel = styled.label`
    font-size: 24px;
    color:#4d4d4d;
    text-align: left;
    flex-grow: 7;
  `
  
  export const Todolistbutton = styled.button`
    background-color: transparent;
    margin-left: 80%;
    /* width: 10%; */
    opacity: 0.0;
    color: black;
    font-size: 24px;
    border: transparent;
    flex-grow: 3;
      
    &:hover{
        opacity: 1;
    }
  `

  
export const Footer = styled.div`
    margin : Auto;
    width:60%;
    background-color: white;
    padding:20px;
    border-top: 2px solid #e1e1e1;
    color:#4d4d4d;
    display: flex;
    font-size: 14px;
    flex-wrap: nowrap;
    justify-content: space-around;
    box-shadow:
    /* The top layer shadow */
        0 1px 1px rgba(0,0,0,0.15),
            /* The second layer */
        0 10px 0 -5px #eee,
            /* The second layer shadow */
        0 10px 1px -4px rgba(0,0,0,0.15),
            /* The third layer */
        0 20px 0 -10px #eee,
            /* The third layer shadow */
        0 20px 1px -9px rgba(0,0,0,0.15);
  `
  
  export const span = styled.span`
    width : 30%;
    margin-left:10px;
    font-family: Roboto;
    padding:10px;
    text-align: left;
  `
  
  export const Footerbutton = styled.button`
    margin-left:10px;
    background-color: transparent;
    font-family: Roboto;
    padding:10px;
    border:none

  &:hover{
    border-color: rgb(175,47,47,0.2);
  
  }
  `
  