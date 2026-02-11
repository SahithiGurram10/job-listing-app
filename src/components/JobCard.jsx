const highlightText = (text, keyword) => {
  if (!keyword) return text;

  const parts = text.split(new RegExp(`(${keyword})`, "gi"));

  return parts.map((part, index) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <span key={index} style={{ backgroundColor: "yellow" }}>
        {part}
      </span>
    ) : (
      part
    )
  );
};

const JobCard = ({ job, searchTerm }) => {
  return (
    <div className="job-card">
      <h3>{highlightText(job.title, searchTerm)}</h3>
      <p>{job.company} • {job.location}</p>
      <span className="badge">{job.type}</span>
    </div>
  );
};

export default JobCard;
