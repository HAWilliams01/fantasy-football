import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Layout from '../components/Layout';

function Players() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  //   const {
  //     isLoading,
  //     isSuccess,
  //     isError,
  //     data: players,
  //   } = useQuery('players', fetchPlayers);

  const players = [
    { id: 1, name: 'Tom Brady' },
    { id: 2, name: 'Aaron Rodgers' },
    { id: 3, name: 'Patrick Mahomes' },
    { id: 4, name: 'Josh Allen' },
    { id: 5, name: 'Lamar Jackson' },
  ];

  function fetchPlayers() {
    console.log('fetchPlayers');
    return;
    // return fetch(
    //   'https://nfl-api-data.p.rapidapi.com/nfl-team-listing/v1/data',
    //   {
    //     headers: {
    //       'x-rapidapi-key':
    //         'bb199be5d2mshdea9eec3806d994p1640d1jsn12f149376f53',
    //       'x-rapidapi-host': 'nfl-api-data.p.rapidapi.com',
    //     },
    //   }
    // )
    //   .then(response => response.json())
    //   .then(data => {
    //     return data;
    //   });
  }

  const filteredPlayers = players?.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <header className="bg-gray-900 shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Players
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div>
          <input
            type="text"
            placeholder="Search players"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          {/* {isLoading && <p>Loading...</p>} */}
          {/* {isError && <p>Error fetching players</p>} */}
          {isSuccess && filteredPlayers.length > 0 && (
            <ul>
              {filteredPlayers.map(player => (
                <li key={player.id}>{player.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Players;
