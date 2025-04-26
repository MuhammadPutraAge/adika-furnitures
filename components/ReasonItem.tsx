import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  title: string;
  description: string;
}

const ReasonItem = ({ Icon, title, description }: Props) => (
  <div className="flex flex-col items-center w-full md:w-[calc(50%-64px)] lg:w-[calc(100%/3-22px)]">
    <div className="bg-surface p-6 rounded-full flex items-center justify-center mb-6">
      <Icon className="text-primary text-4xl" />
    </div>
    <h4 className="font-bold text-xl md:text-2xl mb-2">{title}</h4>
    <p className="text-dark-muted/80 text-center text-base md:text-lg max-w-96">{description}</p>
  </div>
);

export default ReasonItem;
