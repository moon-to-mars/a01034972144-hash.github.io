function extractBody(text) {
  const startMark = "*** START OF THE PROJECT GUTENBERG EBOOK";
  const endMark = "*** END OF THE PROJECT GUTENBERG EBOOK";
  return text.slice(text.indexOf(startMark), text.indexOf(endMark));
}

function analyze(text, stopwords) {
  const body = extractBody(text);
  const words = getWords(body);
  const cleaned = removeStopwords(words, stopwords);
  const counts = countWords(cleaned);

  return topN(counts, 30);
}

Promise.all([
  fetch("/data/frankenstein.txt").then(r => r.text()),
  fetch("/data/dracula.txt").then(r => r.text()),
  fetch("/data/stopwords-en.txt").then(r => r.text()),
  fetch("/data/stopwords-custom.txt").then(r => r.text()),
]).then(([frankText, dracText, baseStop, customStop]) => {
  const stopwords = (baseStop + "\n" + customStop)
    .split(/\s+/)
    .filter(w => w.length > 0);
  drawChart("#chart-frankenstein", analyze(frankText, stopwords), "rgba(40, 167, 69, 0.6)");
  drawChart("#chart-dracula",      analyze(dracText, stopwords),  "rgba(220, 53, 69, 0.6)");
});