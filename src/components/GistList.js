import React, { useEffect, useState } from 'react'
import { getPublicGists } from "../services/gistService";

const GistList = () => {
    const [hasError, setErrors] = useState(false);
    const [pubList, setPublicList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await getPublicGists();
            setPublicList(res.data)
        }

        fetchData();
      });

      return (
        <div>
          <ul>
            {pubList.map(el => (
              <li key={el.id}>
                <span>User Picture: {el.owner.avatar_url}   </span>
                <span>Created At: {el.created_at}   </span>
                <span>Updated At: {el.updated_at}  </span>
                <span>Id: {el.id}</span>
                </li>
            ))}
          </ul>
        </div>
      );
}

export default GistList