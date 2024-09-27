import news_feed from "/src/news_stories.json"
import "/src/app.css"
import React from 'react';
function App() {

  // Get stories from news feed
  const stories = news_feed.results;
  console.log(stories)

  function handleDelete(e) {

    if (e.target === e.currentTarget) {
      return;
    }
    if (e.target.tagName !== 'SPAN') {
      return;
    }
    e.currentTarget.remove();
  }
  return (
    <>
      <div className="App">
        {stories.map(results => {
          return (
            <div className='box' onClick={handleDelete}>
              <span onClick={handleDelete}>X</span>
              <div className='inner'>
                <div className='img-container'>
                <img src={results.image_url}/>
                </div>
              <div>
              <h1>{results.title}</h1>
              <p>Date Posted: {results.pubDate}</p>
              <h3>Author: {results.creator}</h3>
              <p>{results.description}</p>
              <a id="myLink" href={results.link} target="_blank">Click Here For More Information!</a>
              </div>
              </div>

            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
