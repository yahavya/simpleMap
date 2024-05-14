import { PageContainer } from "@features/layout";
import {useEffect, useState} from "react";

const HomePage = () => {

  const saveInput = () => {
    return document.getElementById("userInput").value;
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const input = saveInput();
    console.log(input);
    const response = fetch(`http://localhost:8080/api/getDemagogues/?handle=${input}`)
      .then(function(serverPromise) {serverPromise.json().then(function(j){
        alert(j.names);
      })});
  };

  return (
    <PageContainer
      title="undemagogue"
      info=""
    >
      <form id="form" onSubmit={handleSubmit}>
        <h>Enter your twitter handle here (without @): </h>
        <input type="text" id="userInput"/>
        <input type="submit"/>
      </form>
    </PageContainer>
  )

}
export default HomePage;
