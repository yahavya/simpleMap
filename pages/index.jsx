import { PageContainer } from "@features/layout";
import twitterUser  from "./twitterUser";

const HomePage = () => {

  twitterUser();
  const saveInput = () => {
    return document.getElementById("userInput").value;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = saveInput();
    console.log(input);
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
