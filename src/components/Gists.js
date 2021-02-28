import React, { useEffect, useState } from 'react'
import { Octokit } from "@octokit/rest";
const octokit = new Octokit()

//const Gists = () => octokit.gists.listPublic()

const Gists = () => {
    const [hasError, setErrors] = useState(false);
    const [pubList, setPublicList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await octokit.gists.listPublic();
            setPublicList(res.data)
        }

        fetchData();
      });

    //   return (
    //     <div>
    //       <span>{JSON.stringify(pubList)}</span>
    //     </div>
    //   );

      return (
        <div>
          <ul>
            {pubList.map(el => (
              <li key={el.id}>
                <span>User Picture: {el.owner.avatar_url}   </span>
                <span>Created At: {el.created_at}   </span>
                <span>Updated At: {el.updated_at}  </span>
                <span>Url: {el.url}</span>
                </li>
            ))}
          </ul>
        </div>
      );

}

export default Gists
