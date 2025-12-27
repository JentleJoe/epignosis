import { portfolioData } from '../../data/portfolioData';
import Button from '../common/Button';

const Projects = () => {
  return (
    <section className="py-[120px] px-5 bg-dark-bg max-lg:py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20 max-md:gap-[60px]">
        {portfolioData.projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`grid grid-cols-2 gap-[60px] items-center max-lg:grid-cols-1 max-lg:gap-10 ${
              index === 1 ? 'direction-rtl [&>*]:direction-ltr max-lg:direction-ltr' : ''
            }`}
          >
            <div className="relative">
              <div className="w-full h-[400px] bg-gradient-to-br from-dark-surface to-dark-border border-2 border-dark-border rounded-[15px] flex items-center justify-center text-[#808080] font-semibold transition-all duration-400 overflow-hidden hover:border-primary hover:shadow-[0_20px_40px_rgba(255,215,0,0.15)] max-lg:h-[300px]">
                {project.title}
              </div>
            </div>
            <div>
              <div className="inline-block bg-primary text-black py-1.5 px-3 rounded-[20px] text-[0.8rem] font-semibold mb-[15px] uppercase tracking-[0.5px]">{project.id} Recent Project</div>
              <h3 className="text-[2rem] mb-[10px] text-white font-bold max-lg:text-2xl max-md:text-[1.3rem]">{project.title}</h3>
              <p className="text-[1.1rem] text-primary mb-[15px] font-semibold">{project.subtitle}</p>
              <p className="text-base text-[#a0a0a0] mb-[30px] leading-[1.8] max-md:text-[0.95rem]">{project.description}</p>
              <Button variant="secondary">View Project</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
