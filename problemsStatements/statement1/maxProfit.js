const prompt=require("prompt-sync")({sigint:true}); 

const maxProfit = (time) => {
  const result = [];
  const theatreCount = Math.floor(time / 5);
  time -= theatreCount * 5;
  const pubCount = Math.floor(time / 4);
  time -= pubCount * 4;
  const commercialParkCount = Math.floor(time / 10);
  time -= commercialParkCount * 10;
  result.push(`T ${theatreCount}`);
  result.push(`P ${pubCount}`);
  result.push(`C ${commercialParkCount}`);
  return result.join(", ");
}

const input = prompt('Enter the time duration.');
console.log(maxProfit(input));
