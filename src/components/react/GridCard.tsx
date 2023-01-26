import Card from "./Card";

import "../../styles/components/_GridCard.scss";

type PropsGrid = {
  items: Array<string>;
};

export default function GridCard({ items }: PropsGrid) {
  return (
    <div className="grid-card">
      {items.map((item) => (
        <Card title={"title"} contentBody={"content"} />
      ))}
    </div>
  );
}
