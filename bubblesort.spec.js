describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles array with single element', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('handles array with multiple elements', function() {
    expect(bubbleSort([9, 3, 8, 7, 1])).toEqual([1, 3, 7, 8, 9]);
  });

  it('handles an array of letters', function() {
    expect(bubbleSort(['r', 'l', 'e', 't', 'i', 'q'])).toEqual([
      'e',
      'i',
      'l',
      'q',
      'r',
      't',
    ]);
  });

  it('sorts positive and negative integers', function() {
    expect(bubbleSort([2, -1, 5, 0, -3])).toEqual([-3, -1, 0, 2, 5]);
  });
});
