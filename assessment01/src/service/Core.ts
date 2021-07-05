import { defaultPrimeNumber, defaultMinimumExponent, defaultMaximumInput } from '../config/constant'
import { CoreProps, PowerResult } from '../type/Core'

export class Core {
  // maximum user input, default is 1000000
  private maximumInput: number = defaultMaximumInput;
  // minimum exponent number, default is 2
  private minimumExponent: number = defaultMinimumExponent;
  // set of number
  private setNumber: number[] = [];
  
  // constructor with default empty props
  // props is config which user can set eg. maximum Input, minimum Exponent
  public constructor(props?: CoreProps) {
    if (props) {
      // check is maximumInput was send via props
      if (props.maximumInput && props.maximumInput !== defaultMaximumInput) {
        this.maximumInput = props.maximumInput
      }
      // check is minimumExponent was send via props
      if (props.minimumExponent && props.minimumExponent !== defaultMinimumExponent && props.minimumExponent > 0) {
        this.minimumExponent = props.minimumExponent;
      }
    }
    // create set of running number 
    this.createNumberSet();
  }

  // find Largest power
  public async findLargestPower(input: number): Promise<number[]> {
    // thorw error when input less than or equal zero
    if (input <= 0) {
      throw new Error("Function is not support input less than or equal zero");
    }
    // thorw error when input more than maximumInput
    if (input > this.maximumInput) {
      throw new Error("Your input more than maximumInput (You can set maximum input by new Core({maximumInput: 10000000}))");
    }
    // return [0, -1] when input === 1
    if (input === 1) {
      return [0, -1]
    }
    // return [1, -1] when input > 0 & input <= 4
    else if (input <= 4) {
      return [1, -1]
    } 
    // input > 4
    else {
      // create promise array to run parallel
      const promisesArray: any = [];
      // push set number to promisesArray
      this.setNumber.forEach((num: number) => {
        promisesArray.push(new Promise((resolve) => {
          resolve(this.power(num, input));
        }));
      });
    
      // Run promisesArray with Promise.all to save time
      return Promise.all(promisesArray).then((values: any[]) => {
        // sorting values
        const powerResult = this.sort(values);
        // get most value from powerResult
        const result = powerResult[0];
        // return value
        const data = [result.value];
        // if exponent divine minimumExponent = 0 return divined value else return 1
        if (result.exponent % this.minimumExponent === 0) {
          data.push(result.exponent / this.minimumExponent)
        } else {
          data.push(1)
        }
        // return data as Array
        return data;
      });
    }
  }

  // sort by value (descending)
  private sort(values: PowerResult[]): PowerResult[] {
    return [...values.sort((a: PowerResult, b: PowerResult) => (a.value > b.value) ? -1 : ((b.value > a.value) ? 1 : 0))]
  }

  // return value is close to max
  private power = (input: number, max: number): PowerResult => {
    let index = this.minimumExponent;
    let result = 0;
    while (Math.pow(input, index) < max) {
      result = Math.pow(input, index);
      index++;
    }
    return {
      value: result,
      base: input,
      exponent: index - 1
    }
  }

  // create set of running number and maximum is n root of maximum number
  private createNumberSet() {
    // set max value that can posible in case
    const maxValue = Math.pow(this.maximumInput, 1/this.minimumExponent);
    const result = [];
    for (let i = 2; i < maxValue; i++) {
      result.push(i);
    }
    // set value
    this.setNumber = result;
  }
}
