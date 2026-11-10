 import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlaylistCard from './PlaylistCard';

export default function PlaylistGrid() {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/playlists`);
        setPlaylists(response.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="bg-zinc-900/40 p-3 rounded-md animate-pulse flex flex-col">
            <div className="w-full aspect-square bg-zinc-800 rounded-md mb-3" />
            <div className="h-4 bg-zinc-800 rounded w-3/4 mb-2" />
            <div className="h-3 bg-zinc-800 rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 bg-zinc-900/20 rounded-lg border border-zinc-800">
        <p className="text-zinc-400 text-sm">Não foi possível carregar as playlists no momento.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {playlists.map((item) => (
        <PlaylistCard
          key={item.id}
          title={item.title || item.name}
          description={item.description}
          imgUrl={item.coverUrl || item.image}
        />
      ))}
    </div>
  );
}
