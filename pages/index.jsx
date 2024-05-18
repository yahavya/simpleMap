import { PageContainer } from "@features/layout";

const HomePage = () => {

  const saveInput = () => {
    return document.getElementById("userInput").value;
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const input = saveInput();
    console.log(input);
    //?handle=${input}
    const response = fetch(`https://ssrsimplemapd3ec4-es5dg2hjaa-uc.a.run.app/`)
      .then(function(serverPromise) {serverPromise.json().then(function(j){
        alert(j.names);
        console.log(response);
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
