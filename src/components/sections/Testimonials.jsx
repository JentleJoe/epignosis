const testimonials = [
  {
    name: 'Mr. Ayeni',
    quote:
      'Aminu quickly became someone I could fully rely on. From managing emails to keeping tasks organized, they made my workload lighter and my days smoother. Communication was clear, proactive, and always professional. If you’re looking for a VA who actually cares about getting things right, Aminu is it.',
    role: 'Client / Executive Support',
    accent: 'from-primary to-secondary'
  },
  {
    name: 'Dr. Amanfoh',
    quote:
      'Working with Aminu was a game-changer for our operations. They brought structure, clarity, and consistency to our daily admin tasks, handled communications professionally, and always stayed one step ahead. Deadlines were met without reminders, and nothing slipped through the cracks. I’d highly recommend Aminu to any business owner who needs reliable, detail-driven virtual support.',
    role: 'Operations Partner',
    accent: 'from-[#9ec8ff] to-[#d6e5ff]'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#0a0a0a] px-5 py-[120px] max-lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Testimonials
          </p>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
            Trusted by leaders who value clarity and consistency.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="group rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,17,17,0.96),rgba(10,10,10,0.9))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${item.accent} text-lg font-black text-[#0a0a0a]`}>
                    {item.name
                      .split(' ')
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join('')}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                    <p className="text-sm text-white/60">{item.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
              </div>

              <div className="mb-5 text-3xl leading-none text-primary">“</div>

              <p className="text-base leading-8 text-white/75 md:text-lg">
                {item.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
