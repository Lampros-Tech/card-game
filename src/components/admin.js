import React, { useState } from "react";
import "./admin.css";
import TextField from "@material-ui/core/TextField";

const Admin = () => {
  const [collection, setCollection] = useState("");
  const [twitter, setTwitter] = useState("");
  const [discord, setDiscord] = useState("");
  const [medium, setMedium] = useState("");
  const [collectionurl, setCollectionurl] = useState("");
  const [change, setChange] = useState("");
  const [give, setGive] = useState("");

  return (
    <div className="admin">
      <div className="input">
        <TextField
          className="textfield"
          value={collection}
          placeholder="Collection"
          onChange={(e) => {
            setCollection(e.target.value);
          }}
        />
        <br />
        <TextField
          className="textfield"
          value={twitter}
          placeholder="Twitter"
          onChange={(e) => {
            setTwitter(e.target.value);
          }}
        />
        <br />

        <TextField
          className="textfield"
          value={discord}
          placeholder="Discord"
          onChange={(e) => {
            setDiscord(e.target.value);
          }}
        />
        <br />

        <TextField
          className="textfield"
          value={medium}
          placeholder="Medium URL"
          onChange={(e) => {
            setMedium(e.target.value);
          }}
        />
        <br />

        <TextField
          className="textfield"
          value={collectionurl}
          placeholder="Collection URL"
          onChange={(e) => {
            setCollectionurl(e.target.value);
          }}
        />
        <br />

        <TextField
          className="textfield"
          value={change}
          placeholder="Changing Games"
          onChange={(e) => {
            setChange(e.target.value);
          }}
        />
        <br />

        <TextField
          className="textfield"
          value={give}
          placeholder="How Many Give Aways"
          onChange={(e) => {
            setGive(e.target.value);
          }}
        />
        <br />
      </div>
      <button className="admin-submit">Submit</button>
    </div>
  );
};

export default Admin;
