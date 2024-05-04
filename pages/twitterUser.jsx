import { useState } from 'react';

const twitterUser = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const getUserByUsername = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/getUserByUsername?username=${username}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        console.error('Failed to fetch user');
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Twitter username"
      />
      <button onClick={getUserByUsername} disabled={loading}>
        {loading ? 'Loading...' : 'Get User'}
      </button>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Twitter Handle: {user.username}</p>
          <p>Description: {user.description}</p>
          <p>Followers: {user.public_metrics.followers_count}</p>
          <p>Following: {user.public_metrics.following_count}</p>
        </div>
      )}
    </div>
  );
}
export default twitterUser;
