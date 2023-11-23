import { StatisticsSection, StatList, StatItem } from './Statistics.styles';

const bgColor = label => {
  switch (label) {
    case '.docx':
      return '#4fc4f7';
    case '.pdf':
      return '#a43cf5';
    case '.mp3':
      return '#e64c66';
    case '.psd':
      return '#20b8c5';
    default:
      return '#51c3f8';
  }
};
const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection className="statistics">
      <h2 className="title">{title}</h2>
      <StatList className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatItem
            key={id}
            className="item"
            style={{ backgroundColor: `${bgColor(label)}` }}
          >
            <span
              className="label"
              style={{ fontSize: '20px', color: 'white' }}
            >
              {label}
            </span>
            <span
              className="percentage"
              style={{ fontSize: '30px', color: 'white' }}
            >{`${percentage}%`}</span>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

export default Statistics;
