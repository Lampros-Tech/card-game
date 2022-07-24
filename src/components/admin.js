import React, { useState, useEffect } from "react";
import "./admin.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Cookies from "universal-cookie";
import { ethers } from "ethers";

import token from "../artifacts/solidGames.json";

const tokenAddress = "0xcc329c1f5b87C02741926F5aF4Eb5bc4B4Abd0F8"

const Admin = () => {
  const [collection, setCollection] = useState("");
  const [twitter, setTwitter] = useState("");
  const [discord, setDiscord] = useState("");
  const [medium, setMedium] = useState("");
  const [collectionurl, setCollectionurl] = useState("");
  const [change, setChange] = useState("");
  const [give, setGive] = useState("");
  const [account, setAccount] = useState("");
  const cookie = new Cookies();

  const { ethereum } = window;

  useEffect(() => {
    if (!ethereum) {
      cookie.remove("account");
    }
  }, [ethereum]);

  const loadContracts = async(signer) => {
    const contract = new ethers.Contract(
      tokenAddress,
      token.abi,
      signer
    )

    contract.createCollection(

    )
  };

  const createCollection = async() => {
    if (window.ethereum) {
      const accounts = window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .catch((err) => {
        const error = err.code;
        console.log(error);
      });

      setAccount(accounts[0]);      

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      let networkName = await provider.getNetwork();
      let chainId = networkName.chainId;
      if(chainId !== 4){
        alert("Please change the network to Polygon Mumbai testnet.");
      }
      loadContracts(signer);
    } else {
      alert("Please install a Web3 wallet.")
    }
  };

  return (
    <div className="admin">
      <div className="input">
        <br />

        {/* <TextField
          className="textfield"
          value={collection}
          label="Collection"
          onChange={(e) => {
            setCollection(e.target.value);
          }}
        /> */}
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

      <button className="admin-submit" onClick={() => { createCollection() }}>Submit</button>
    </div>
  );
};

export default Admin;
