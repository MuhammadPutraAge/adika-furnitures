interface Props {
  title: string;
}

const Badge = ({ title }: Props) => (
  <div className="bg-surface px-4 py-1 rounded-md border border-primary">
    <p className="text-primary font-semibold capitalize">{title}</p>
  </div>
);

export default Badge;
