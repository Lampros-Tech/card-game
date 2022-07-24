import React, { useState } from "react";
import "./admin.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

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
        <br />

        <TextField
          className="textfield"
          value={collection}
          label="Collection"
          onChange={(e) => {
            setCollection(e.target.value);
          }}
        />
        <br />
        <TextField
          className="textfield"
          value={twitter}
          label="Twitter"
          onChange={(e) => {
            setTwitter(e.target.value);
          }}
        />
        <br />

        <TextField
          className="textfield"
          value={discord}
          label="Discord"
          onChange={(e) => {
            setDiscord(e.target.value);
          }}
        />
        <br />

        <TextField
          className="textfield"
          value={medium}
          label="Medium URL"
          onChange={(e) => {
            setMedium(e.target.value);
          }}
        />
        <br />

        <TextField
          className="textfield"
          value={collectionurl}
          label="Collection URL"
          onChange={(e) => {
            setCollectionurl(e.target.value);
          }}
        />
        <br />

        <TextField
          className="textfield"
          value={change}
          label="Changing Games"
          onChange={(e) => {
            setChange(e.target.value);
          }}
        />
        <br />

        <TextField
          className="textfield"
          value={give}
          label="How Many Give Aways"
          onChange={(e) => {
            setGive(e.target.value);
          }}
        />
        <br />
        <Button variant="contained" component="label">
          Upload Image
          <input type="file" hidden />
        </Button>
        <br />
        <br />
        <br />
      </div>
      <br />

      <button className="admin-submit">Submit</button>
    </div>
  );
};

export default Admin;
