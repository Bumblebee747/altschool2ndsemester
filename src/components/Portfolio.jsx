import { useState, useEffect } from 'react';
import RepositoryCard from './RepositoryCard';
import ErrorBoundary from './ErrorBoundary';

const Portfolio = ({ username }) => {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }
        const data = await response.json();
        setRepositories(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (username) {
      fetchRepositories();
    }
  }, [username]); 

  if (isLoading) {
    return <p>Loading repositories...</p>;
  }

  if (error) {
    return <ErrorBoundary/>;
  }

  return (
    <div className="portfolio">
      <h1>{username}&apos;s GitHub Portfolio</h1>
      <div className="repository-list">
        {repositories.length > 0 ? (
          repositories.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo} />
          ))
        ) : (
          <p>No repositories found for this user.</p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;