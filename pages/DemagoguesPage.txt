import {useEffect, useState} from "react";


interface Demagogue {
  name: string;
}
interface ApiResponse {
  success: boolean;
  demagogues_list: Demagogue[];
  names: string;
}

const DemagoguesPage = () => {
  const [data, setData] = useState<ApiResponse | null>(null);

  /*useEffect(() => {
    fetch(`http://localhost:8080/api/getDemagogues/?handle=${userHandle}`)
      .then(response => response.json())
      .then((json: ApiResponse) => setData(json))
      .catch(error => console.error(error));
  }, [userHandle]);
*/
  return (
    <div>
      {data ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 10 }}>
          {data.names}
        </div>
      ) : (
        "Hi This is me"
      )}
    </div>
  );
}

export default DemagoguesPage;
