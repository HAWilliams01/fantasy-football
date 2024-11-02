import React from 'react';
import Navigation from './Navigation';
import { useQuery } from 'react-query';

function Wrapper() {
  const {
    isLoading,
    isSuccess,
    isError,
    data: teams,
  } = useQuery('teams', fetchTeams);

  function fetchTeams() {
    return fetch(
      'https://nfl-api-data.p.rapidapi.com/nfl-team-listing/v1/data',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            'bb199be5d2mshdea9eec3806d994p1640d1jsn12f149376f53',
          'x-rapidapi-host': 'nfl-api-data.p.rapidapi.com',
        },
      }
    )
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        return data.map(item => item.team);
      });
  }

  return (
    <div className="min-h-full">
      <Navigation />

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h3>Todos</h3>
          <ul>
            <li>Routing with Next.js</li>
            <li>Teams API integration</li>
            <li>Players API integration</li>
          </ul>
          <br />

          <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching teams</p>}
            {isSuccess && (
              <ul>
                {teams.map(team => (
                  <li key={team.id}>{team.displayName}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Wrapper;
