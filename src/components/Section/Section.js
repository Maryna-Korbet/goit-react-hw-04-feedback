import css from 'components/Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;