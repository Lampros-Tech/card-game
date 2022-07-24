import React, { useState, useEffect } from "react";
import "./admin.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Cookies from "universal-cookie";
import { ethers } from "ethers";
import { create, CID } from "ipfs-http-client";

import token from "../artifacts/solidGames.json";

const tokenAddress = "0xcc329c1f5b87C02741926F5aF4Eb5bc4B4Abd0F8";

const Admin = () => {
  const [collection, setCollection] = useState("");
  const [twitter, setTwitter] = useState("");
  const [discord, setDiscord] = useState("");
  const [medium, setMedium] = useState("");
  const [collectionurl, setCollectionurl] = useState("");
  const [change, setChange] = useState([]);
  const [give, setGive] = useState("");
  const [account, setAccount] = useState("");
  const [nft, setNft] = useState(null);
  const [success, setSucccess] = useState({ message: "", status: false });

  const cookie = new Cookies();
  const client = create("https://ipfs.infura.io:5001/api/v0");

  const { ethereum } = window;

  useEffect(() => {
    if (!ethereum) {
      cookie.remove("account");
    }
  }, [ethereum]);

  const loadContracts = async (signer) => {
    const contract = new ethers.Contract(tokenAddress, token.abi, signer);

    const added = await client.add(nft);

    console.log(added);

    const txn = await contract.createCollection(
      added,
      twitter,
      discord,
      medium,
      collectionurl,
      true,
      false,
      give
    );

    await txn.wait();

    if (txn) {
      setTimeout(() => {
        setSucccess(
          (success.status = true),
          (success.message = "Data inserted successfully...")
        );
      }, 3000);
      setSucccess((success.status = false), (success.message = ""));
    }
  };

  const createCollection = async () => {
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
      if (chainId !== 80001) {
        alert("Please change the network to Polygon Mumbai testnet.");
      }
      loadContracts(signer);
    } else {
      alert("Please install a Web3 wallet.");
    }
  };

  useEffect(() => {
    console.log(nft);
  }, [nft]);

  useEffect(() => {
    console.log(change);
  }, [change]);

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

        {/* <TextField
          className="textfield"
          value={change}
          label="Changing Games"
          onChange={(e) => {
            setChange(e.target.value);
          }}
        /> */}
        <select
          className="textfield"
          id="games"
          label="Select Games"
          onChange={(e) => {
            setChange(e.target.value);
          }}
        >
          <option disabled selected value={null}>
            -- Select One Game --
          </option>
          <option value={"RPS"}>Rock Paper Scissor</option>
          <option value={"Memory Game"}>Memory Game</option>
        </select>
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
          <input
            type="file"
            onChange={(e) => {
              setNft(e.target.files[0]);
            }}
            hidden
          />
        </Button>
        <br />
        <br />
        <br />
      </div>
      <br />

      <button
        className="admin-submit"
        onClick={() => {
          createCollection();
        }}
      >
        Submit
      </button>
      {success.status ? (
        <div className="message">
          <div className="message-main">{success.message}</div>
          <div>X</div>
        </div>
      ) : null}
    </div>
  );
};

export default Admin;
