import React from 'react';
import { useQuery } from 'react-query';
import Layout from '../components/Layout';

function Teams() {
  const {
    isLoading,
    isSuccess,
    isError,
    data: teams,
  } = useQuery('teams', fetchTeams);

  function fetchTeams() {
    console.log('fetchTeams');
    return;
    // return fetch(
    //   'https://nfl-api-data.p.rapidapi.com/nfl-team-listing/v1/data',
    //   {
    //     method: 'GET',
    //     headers: {
    //       'x-rapidapi-key':
    //         'bb199be5d2mshdea9eec3806d994p1640d1jsn12f149376f53',
    //       'x-rapidapi-host': 'nfl-api-data.p.rapidapi.com',
    //     },
    //   }
    // )
    //   .then(response => response.json())
    //   .then(data => {
    //     return data.map(item => item.team);
    //   });
  }
  return (
    <Layout>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Teams
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div>
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error fetching teams</p>}
          {/* {isSuccess && (
            <ul>
              {teams.map(team => (
                <li key={team.id}>{team.displayName}</li>
              ))}
            </ul>
          )} */}
        </div>
      </div>
    </Layout>
  );
}

export default Teams;
