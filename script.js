//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  for (const episode of episodeList) {
  const nameOfEpisode = episode.name;
  const nameDiv = document.createElement("div");
  nameDiv.textContent = nameOfEpisode;
  rootElem.appendChild(nameDiv);

  const nameOfSeason = episode.season;
  
  const episodeNumber = episode.number;

  const episodeCodeDiv = document.createElement("div");
  if(episodeNumber < 10){
  episodeCodeDiv.textContent = `S0${nameOfSeason}E0${episodeNumber}`;
  rootElem.appendChild(episodeCodeDiv);
  }
  else if(episodeNumber >= 10){
    episodeCodeDiv.textContent = `S0${nameOfSeason}E${episodeNumber}`;
    rootElem.appendChild(episodeCodeDiv);
  }
   const episodeMediumImage = episode.image.medium;
   const episodeMediumImageDiv = document.createElement("img");
   episodeMediumImageDiv.src = episodeMediumImage;
   rootElem.appendChild(episodeMediumImageDiv);

   const episodeSummary = episode.summary;
   const episodeSummaryDiv = document.createElement("div");
   episodeSummaryDiv.innerHTML = episodeSummary;
   rootElem.appendChild(episodeSummaryDiv);
  }
}


window.onload = setup;
