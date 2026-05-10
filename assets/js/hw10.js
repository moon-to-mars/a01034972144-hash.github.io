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

// Q2
const works = ["날개", "오감도", "지주회시", "종생기", "권태"];

// 1. length, 첫 항목, 마지막 항목 출력
console.log(works.length);
console.log(works[0]);
console.log(works[works.length - 1]);

// 2. map으로 「...」 감싸기
const titled = works.map(w => `「${w}」`);
console.log(titled);

// 3. filter로 3자 이상인 작품만 선별
const long = works.filter(w => w.length >= 3);
console.log(long);

// 4. long을 "N번째 작품: 제목" 형식으로 출력
for (let i = 0; i < long.length; i++) {
  console.log(`${i + 1}번째 작품: ${long[i]}`);
}

// Q3
function countChar(text, target) {
  let count = 0;
  for (const ch of text) {
    if (ch === target) {
      count++;
    }
  }
  return count;
}

console.log(`"박씨는 이씨에게 시집간 김씨의 외사촌 동생이다."에서 '씨'는 ${countChar("박씨는 이씨에게 시집간 김씨의 외사촌 동생이다.", "씨")}번 등장합니다.`);
console.log(`"이상의 「날개」는 1936년 작품이다."에서 '이'는 ${countChar("이상의 「날개」는 1936년 작품이다.", "이")}번 등장합니다.`);
console.log(`"banana"에서 'a'는 ${countChar("banana", "a")}번 등장합니다.`);