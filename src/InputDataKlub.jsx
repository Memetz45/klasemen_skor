import React, { useState } from 'react';
import axios from 'axios';
const InputDataKlub = () => {
  const [clubData, setClubData] = useState({ namaKlub: '', kotaKlub: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClubData({ ...clubData, [name]: value });
    console.log(event.target);
  };

  const postDataToAPI = () => {
    const jsonData = JSON.stringify(clubData);
    axios.post('./data.json', jsonData).then((res)=>{console.log(res);
    }), (err)=>{
        console.log(err);
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    postDataToAPI();
  };

  return (
    <div>
      <h1>Form Input Klub</h1>
      <form onSubmit={handleSubmit}>
        <label>Nama Klub:</label>
        <input type="text" name="namaKlub" value={clubData.namaKlub} onChange={handleInputChange} />
        <br />
        <label>Kota Klub:</label>
        <input type="text" name="kotaKlub" value={clubData.kotaKlub} onChange={handleInputChange} />
        <br />
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}

export default InputDataKlub;
