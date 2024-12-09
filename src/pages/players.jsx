import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Layout from '../components/Layout';

function Players() {
  const [searchQuery, setSearchQuery] = useState('');
  const {
    isLoading,
    isSuccess,
    isError,
    data: players,
  } = useQuery('players', fetchPlayers);

  function fetchPlayers() {
    console.log('fetchPlayers');

    return fetch(
      'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLProjections?week=season&archiveSeason=2024&twoPointConversions=2&passYards=.04&passAttempts=-.5&passTD=4&passCompletions=1&passInterceptions=-2&pointsPerReception=1&carries=.2&rushYards=.1&rushTD=6&fumbles=-2&receivingYards=.1&receivingTD=6&targets=.1&fgMade=3&fgMissed=-1&xpMade=1&xpMissed=-1',
      {
        headers: {
          'x-rapidapi-key':
            'bb199be5d2mshdea9eec3806d994p1640d1jsn12f149376f53',
          'x-rapidapi-host':
            'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com',
        },
      }
    )
      .then(response => response.json())
      .then(data => {
        // console.log('API Response:', data);
        return Object.values(data?.body?.playerProjections || {});
      });
  }

  const filteredPlayers = players?.filter(player => {
    // console.log('Player:', player);
    return player.longName?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  console.log('Filtered Players:', filteredPlayers);

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
          <div className="text-white">
            {/* Ideal buttons:
              Sort A - Z by default
              Give option for Z - A */}
            Filter by team dropdown
          </div>
          <input
            type="text"
            placeholder="Search players"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <div className="text-white">
            {!isLoading && <p>NOT Loading...</p>}
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching players</p>}
            {isSuccess && filteredPlayers?.length > 0 && (
              <ul>
                {filteredPlayers.map(player => (
                  <li key={player.id} className="text-white text-lg">
                    {player.longName} - {player.fantasyPointsDefault.PPR}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Players;
