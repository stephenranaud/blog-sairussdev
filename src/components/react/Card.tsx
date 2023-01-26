import "../../styles/components/_Card.scss";

type StringJsx = string | JSX.Element;

type PropsCard = {
  contentBody: StringJsx;
  title?: StringJsx;
  imgSrc?: string;
  width?: number;
  height?: number;
};

export default function Card(props: PropsCard) {
  const contentBody = props.contentBody;
  const title = props.title;

  return (
    <div
      className="card"
      style={{
        width: `${props?.width}px`,
        height: `${props?.height}px`,
      }}
    >
      <header className="card__heading">{title && <h3>{title}</h3>}</header>
      <div className="card__body">{contentBody}</div>
    </div>
  );
}
