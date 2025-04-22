import { Skills } from "../constants";
import { section } from "../style";
import { divider } from "../assets";

const About = () => (
  <section id="about" className="relative">
    <div>
      <h2 className={`${section.heading} ${section.MarginY}`}>About</h2>
      <div className="w-11/12 m-auto">
        <p className={`${section.textPaddingY} ${section.text}`}>
          Hi there! I'm Simon Gideon. I'm a passionate and results-driven
          Full-Stack Software Engineer with over 4 years of hands-on experience
          building dynamic, user-focused web applications. I specialize in
          crafting visually appealing and SEO-optimized websites that not only
          engage users but also drive measurable business results.
        </p>
        <p className={`${section.textPaddingY} ${section.text}`}>
          Proficient in a wide range of technologies including JavaScript,
          TypeScript, PHP, C#, .NET, ReactJS, Angular, Laravel and WordPress, I bring a
          strong balance of frontend finesse and backend expertise to every
          project. I thrive on turning ideas into functional, elegant solutions
          by collaborating closely with designers, developers, and stakeholders.
        </p>
        <p className={`${section.textPaddingY} ${section.text}`}>
          What sets me apart is not just my technical ability, but my commitment
          to clear communication, teamwork, and continuous learning. Whether
          it's solving complex problems or pushing the boundaries of innovation,
          I'm always eager to grow and deliver exceptional results.
        </p>
        <p className={`${section.textPaddingY} ${section.text}`}>
          Let’s connect and transform your digital vision into a powerful, engaging
          experience that truly resonates with your audience.
        </p>
        <p
          className={`${section.textPaddingY} mt-8 text-center text-deep-blue font-poppins text-2xl sm:text-4xl font-bold dark:text-gray`}
        >
          Skills
        </p>
        <div
          className={`grid sm:grid-cols-3 md:grid-cols-4 gap-7 m-auto max-w-2xl`}
        >
          {Skills.map((skill) => (
            <div key={skill.text} className="flex items-center gap-2">
              <img src={skill.icon} alt={skill.text} className="w-12" />
              <p
                className={`${section.textLgDefault} ${section.textSmall} break-normal`}
              >
                {skill.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="absolute -right-80 -bottom-40">
      <img src={divider} alt="page-divider" />
    </div>
  </section>
);

export default About;
