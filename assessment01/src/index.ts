import { Core } from './service/Core'


(async() => {
  const data = new Core();
  const result = [];
  result.push(await data.findLargestPower(90));
  result.push(await data.findLargestPower(6));
  result.push(await data.findLargestPower(65));
  result.push(await data.findLargestPower(3));
  result.push(await data.findLargestPower(1));
  result.push(await data.findLargestPower(81));
  result.push(await data.findLargestPower(29));
  result.push(await data.findLargestPower(4));
  console.log(result)
})()
