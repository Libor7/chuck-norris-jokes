import { getArraySlice, getRandomArrayItem, keyHandler } from "@shared/utils/helper";

describe("getArraySlice", () => {
  it("should slice an array correctly", () => {
    const arr = [1, 2, 3, 4, 5];
    const slicedArray = getArraySlice(arr, 1, 3);

    expect(slicedArray).toEqual([2, 3]);
  });

  it("should return an empty array if `from` and `to` are out of bounds", () => {
    const arr = [1, 2, 3, 4, 5];
    const slicedArray = getArraySlice(arr, 10, 15);

    expect(slicedArray).toEqual([]);
  });

  it("should return the entire array when from is 0 and to is the length of the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const slicedArray = getArraySlice(arr, 0, arr.length);

    expect(slicedArray).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("getRandomArrayItem", () => {
    it("should return a random item from the array", () => {
      const arr = [10, 20, 30];
      
      jest.spyOn(Math, 'random').mockReturnValue(0.5);
  
      const randomItem = getRandomArrayItem(arr);
  
      expect(randomItem).toBe(20);
    });
  
    it("should work for arrays with a single item", () => {
      const arr = [42];
      
      const randomItem = getRandomArrayItem(arr);
  
      expect(randomItem).toBe(42);
    });
  
    it("should return undefined for an empty array", () => {
      const arr: number[] = [];
      
      const randomItem = getRandomArrayItem(arr);
  
      expect(randomItem).toBeUndefined();
    });
  });

  describe("keyHandler", () => {
    it("should call handler when the key is 'Enter'", () => {
      const handler = jest.fn();
  
      keyHandler("Enter", handler);
  
      expect(handler).toHaveBeenCalledTimes(1);
    });
  
    it("should not call handler for other keys", () => {
      const handler = jest.fn();
  
      keyHandler("Escape", handler);
  
      expect(handler).toHaveBeenCalledTimes(0);
    });
  
    it("should not call handler when key is empty", () => {
      const handler = jest.fn();
  
      keyHandler("", handler);
  
      expect(handler).toHaveBeenCalledTimes(0);
    });
  });
