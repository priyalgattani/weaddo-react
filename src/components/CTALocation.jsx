import React, { useState } from 'react';

export default function CTALocation(props) {
  let states = [
    { "key": "AN", "name": "Andaman and Nicobar Islands" },
    { "key": "AP", "name": "Andhra Pradesh" },
    { "key": "AR", "name": "Arunachal Pradesh" },
    { "key": "AS", "name": "Assam" },
    { "key": "BR", "name": "Bihar" },
    { "key": "CG", "name": "Chandigarh" },
    { "key": "CH", "name": "Chhattisgarh" },
    { "key": "DH", "name": "Dadra and Nagar Haveli" },
    { "key": "DD", "name": "Daman and Diu" },
    { "key": "DL", "name": "Delhi" },
    { "key": "GA", "name": "Goa" },
    { "key": "GJ", "name": "Gujarat" },
    { "key": "HR", "name": "Haryana" },
    { "key": "HP", "name": "Himachal Pradesh" },
    { "key": "JK", "name": "Jammu and Kashmir" },
    { "key": "JH", "name": "Jharkhand" },
    { "key": "KA", "name": "Karnataka" },
    { "key": "KL", "name": "Kerala" },
    { "key": "LD", "name": "Lakshadweep" },
    { "key": "MP", "name": "Madhya Pradesh" },
    { "key": "MH", "name": "Maharashtra" },
    { "key": "MN", "name": "Manipur" },
    { "key": "ML", "name": "Meghalaya" },
    { "key": "MZ", "name": "Mizoram" },
    { "key": "NL", "name": "Nagaland" },
    { "key": "OR", "name": "Odisha" },
    { "key": "PY", "name": "Puducherry" },
    { "key": "PB", "name": "Punjab" },
    { "key": "RJ", "name": "Rajasthan" },
    { "key": "SK", "name": "Sikkim" },
    { "key": "TN", "name": "Tamil Nadu" },
    { "key": "TS", "name": "Telangana" },
    { "key": "TR", "name": "Tripura" },
    { "key": "UK", "name": "Uttarakhand" },
    { "key": "UP", "name": "Uttar Pradesh" },
    { "key": "WB", "name": "West Bengal" }]


  let [st, setSt] = useState("Location*")
  let handlestChange = (e) => {
    setSt(e.target.value)
  }

  return (
    <div className={`form-group ${props.width}`}>
      <select
        id="n-location"
        className="form-control"
        onChange={handlestChange}
      >
        <option className="form-option" value="">Location*</option>
        {states.map((st) => <option className="form-option" value={st.key}>{st.name}</option>)}
      </select>
    </div>
  );
}