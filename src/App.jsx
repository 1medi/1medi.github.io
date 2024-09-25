import news_feed from './sample_news_stories.json';
import "./app.css"
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
      <h1> Random Top Stories</h1>
      <div className="App">
        {stories.map(results => {
          return (
            <div className='box' onClick={handleDelete}>
              <span onClick={handleDelete}>X</span>
              <div className='inner'>
                <div className='img-container'>
                <img src={results.image_url} alt="News Post"/>
                </div>
              <div>
              <h1>{results.title}</h1>
              <h2>{results.creator}</h2>
              <p>{results.language}</p>

              <a id="myLink" href={results.link} target="_blank">News Link</a>
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
