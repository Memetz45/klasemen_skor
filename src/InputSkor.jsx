import React, {useState} from "react";
import styled from "styled-components";

const Input = styled.input`
margin-top: 10px;
margin-right: 20px;
`
const Button = styled.button`
margin-top: 20px;
margin-right: 20px;
`
const InputSkor = () => {
    const [skor, setSkor] = useState([{ klubA: "", klubB:"", skorA: 0, skorB:0 }]);

    const handleSkor = (e) => {
        e.preventDefault();
        setSkor([...skor, { klubA: "", klubB:"", skorA: 0, skorB:0 }]);
      };
    return(
        <form>
            <label>Input Skor Pertandingan: </label>
            <br/>
            <Input type="text" name="klubA" placeholder="nama klub A"/>
            <p style={{display:'inline', marginRight:'20px'}}>vs</p>
            <Input type="text" name="klubB" placeholder="nama klub B"/>
            <p style={{display:'inline', marginRight:'20px'}}>=</p>
            <Input type="number" name="skorA" placeholder="Skor Klub A"/>
            <Input type="number" name="skorB" placeholder="Skor Klub B"/>
            <button>Remove</button>
            <br />
            <Button onClick={handleSkor}>Add</Button>
            <Button>Save</Button>
        </form>
    )
}

export default InputSkor;