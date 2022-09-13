function Dog(props) {
  return (
    <div className="dog">
      <div className="dog-pic">
        <img
          className="avatar"
          src={props.moreInfo.avatarUrl}
          alt={props.moreInfo.alt}
        />
      </div>
      <div className="dog-type">Type: {props.type}</div>
      <div className="dog-name">Name: {props.name}</div>
    </div>
  );
}

const dog = {
  name: "Rocky",
  type: "puggle(?)",
  moreInfo: {
    avatarUrl: "https://picsum.photos/id/237/200/300",
    alt: "dog image",
  },
};
ReactDOM.render(
  <Dog name={dog.name} type={dog.type} moreInfo={dog.moreInfo} />,
  document.getElementById("root")
);
