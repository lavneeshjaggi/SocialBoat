import "./card.styles.scss";

const Card = ({ video }) => {
  var img;

  if (video.tags[0].toLowerCase() === "running")
    img =
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=885&q=80";
  else if (video.tags[0].toLowerCase() === "strength training")
    img =
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  else if (video.tags[0].toLowerCase() === "gym")
    img =
      "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80";
  else if (video.tags[0].toLowerCase() === "hiit")
    img =
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80";
  else if (video.tags[0].toLowerCase() === "cycling")
    img =
      "https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80";
  else if (video.tags[0].toLowerCase() === "tabata")
    img =
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  else if (video.tags[0].toLowerCase() === "hrx")
    img =
      "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  else if (video.tags[0].toLowerCase() === "cardio")
    img =
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

  return (
    <div className="card">
      <img alt="video" className="img" src={img} />
      <div className="info">
        <h2> {video.tags[0]} </h2>
        <p> {video.tags[2]} </p>
        <a className="icon" href={video.video}>
          Link to the {video.tags[0]} video
        </a>
      </div>
    </div>
  );
};

export default Card;
