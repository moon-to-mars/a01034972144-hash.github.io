// [숙제10] JavaScript 기초 연습
// 2025-14294 조선하

// Q1
function classifyEra(year) {
  if (year < 1910) {
    return "개화기 이전";
  } else if (year < 1945) {
    return "일제강점기";
  } else if (year < 1990) {
    return "해방 이후~현대";
  } else {
    return "동시대";
  }
}

const years = [1908, 1936, 1972, 2025];
for (const year of years) {
  console.log(`${year}년: ${classifyEra(year)}`);
}