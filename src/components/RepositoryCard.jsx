const RepositoryCard = ({ repo }) => {
  return (
    <div className="repository-card">
      <h3>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h3>
      <p>{repo.description || 'No description provided.'}</p>
      <div className="repo-details">
        {repo.language && <span className="language">{repo.language}</span>}
        <span className="stars">⭐ {repo.stargazers_count}</span>
      </div>
    </div>
  );
};

export default RepositoryCard;