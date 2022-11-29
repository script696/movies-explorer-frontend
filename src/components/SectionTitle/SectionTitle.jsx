import s from "./SectionTitle.module.scss";

const SectionTitle = ({ title }) => {
  return (
    <div className={s.sectionTitle}>
      <h2 className={s.sectionTitle__title}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
