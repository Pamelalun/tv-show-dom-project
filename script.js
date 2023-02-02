//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  searchItem();
}



function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = "";
  const allEpisodesDisplay = document.getElementById("all-Episodes");
  allEpisodesDisplay.textContent = `Got ${episodeList.length} episode(s)`;

  for (const episode of episodeList) {
  const section =document.createElement("section");
  rootElem.appendChild(section);
  const nameOfEpisode = episode.name;
  const nameDiv = document.createElement("div");
  nameDiv.textContent = nameOfEpisode;
  section.appendChild(nameDiv);

  const nameOfSeason = episode.season;
  
  const episodeNumber = episode.number;

  const episodeCodeDiv = document.createElement("div");
  if(episodeNumber < 10){
  episodeCodeDiv.textContent = `S0${nameOfSeason}E0${episodeNumber}`;
  section.appendChild(episodeCodeDiv);
  }
  else if(episodeNumber >= 10){
    episodeCodeDiv.textContent = `S0${nameOfSeason}E${episodeNumber}`;
    section.appendChild(episodeCodeDiv);
  }
   const episodeMediumImage = episode.image.medium;
   const episodeMediumImageDiv = document.createElement("img");
   episodeMediumImageDiv.src = episodeMediumImage;
   section.appendChild(episodeMediumImageDiv);

   const episodeSummary = episode.summary;
   const episodeSummaryDiv = document.createElement("div");
   episodeSummaryDiv.innerHTML = episodeSummary;
   section.appendChild(episodeSummaryDiv);
  }
}


function searchItem() {
  const allEpisodes = getAllEpisodes();
  const liveSearch = document.getElementById("research-bar");
  liveSearch.addEventListener("keyup", (event) => {
    const keyValues = event.target.value.toLowerCase();
    const episodeFilter = allEpisodes.filter((searchedEpisodes) => {
      return searchedEpisodes.name.toLowerCase().includes(keyValues) ||
      searchedEpisodes.summary.toLowerCase().includes(keyValues);
    });
    makePageForEpisodes(episodeFilter);
  });

}

const selectElement = document.getElementById('drop-menu');

selectElement.addEventListener('change', (event) => {
  const result = document.getElementById(allEpisodes);
  result.textContent = `You like ${event.target.value}`;
});


window.onload = setup;
