function Warning({ content }) {
  return (
    <div className="card text-white warning">
      <div className="card-header warning-header">Yasal Uyarı</div>
      <div className="card-body warning-body">
        <h5 className="card-title warning-title">Dikkat !</h5>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}

export default Warning;
