import { portfolioData } from '../../data/portfolioData';
import Button from '../common/Button';

const Portfolio = () => {
  return (
    <section className="py-[120px] px-5 bg-gradient-to-br from-dark-surface to-dark-bg max-lg:py-20" id="portfolio">
      <div className="max-w-[1200px] mx-auto text-center mb-20">
        <h2 className="text-[2.5rem] text-white mb-[10px] font-bold max-md:text-[2rem]">Portfolio</h2>
        <p className="text-[1.2rem] text-primary font-semibold">Showcasing My Work for Your Inspiration</p>
      </div>
      <div className="max-w-[1200px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px] mb-[60px] max-lg:grid-cols-2 max-lg:gap-[25px] max-md:grid-cols-1 max-md:gap-5">
        {portfolioData.portfolio.map(item => (
          <div key={item.id} className="relative rounded-xl overflow-hidden aspect-[4/5] cursor-pointer group">
            <div className="w-full h-full">
              <div className="w-full h-full bg-gradient-to-br from-dark-surface to-dark-border flex items-center justify-center text-[#808080] font-semibold transition-all duration-400 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-black group-hover:scale-110 max-md:group-hover:scale-100">
                {item.title}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.9)] p-[30px] flex flex-col justify-end opacity-0 transition-opacity duration-300 z-[2] group-hover:opacity-100 max-md:opacity-100">
              <h3 className="text-[1.3rem] text-white mb-2 font-bold">{item.title}</h3>
              <p className="text-primary text-[0.9rem] mb-[15px] font-semibold">{item.category}</p>
              <Button variant="primary" className="self-start">View</Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-10 border-t border-dark-border">
        <Button variant="primary">View All Projects</Button>
      </div>
    </section>
  );
};

export default Portfolio;
