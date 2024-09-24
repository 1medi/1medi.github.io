function random(n) {
  return Math.floor(Math.random() * n);
}

function TwoBoxes() {

    function handleInnerClick(e) {
      const color = random(255);
      e.target.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
    }

    function handleOuterClick(e) {
      const color = random(255);
      setTimeout(() => {
        e.target.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
      }, 2500)

    }
  return (
    <div className="outer" onClick={handleOuterClick}>
      <div className="inner" onClick={handleInnerClick}>

      </div>
    </div>
  )
};

export default TwoBoxes;