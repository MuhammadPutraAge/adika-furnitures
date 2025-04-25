interface Props {
  title: string;
}

const Badge = ({ title }: Props) => (
  <div className="bg-muted px-4 py-1 rounded-md">
    <p className="text-primary-hover font-semibold capitalize">{title}</p>
  </div>
);

export default Badge;
