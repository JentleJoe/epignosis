import './Education.css';

const Education = () => {
  const educationItems = [
    {
      id: 1,
      degree: 'BSC in CSE',
      institution: 'London University',
      period: '2023 - Present'
    },
    {
      id: 2,
      degree: 'Diploma in Web Design',
      institution: 'Oxford College',
      period: '2022 - 2023'
    },
    {
      id: 3,
      degree: 'UI/UX Certificate',
      institution: 'Google Design',
      period: '2020 - 2021'
    },
    {
      id: 4,
      degree: 'Branding Course',
      institution: 'Cambridge Institute',
      period: '2018 - 2019'
    }
  ];

  return (
    <section className="education">
      <div className="education-wrapper">
        <div className="education-header">
          <span className="section-icon">✦</span>
          <h2>Education</h2>
        </div>

        <div className="education-list">
          {educationItems.map((item) => (
            <div key={item.id} className="education-item">
              <div className="education-header-row">
                <div className="education-info">
                  <h3 className="education-degree">{item.degree}</h3>
                  <p className="education-institution">{item.institution}</p>
                </div>
                <span className="education-period">{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
