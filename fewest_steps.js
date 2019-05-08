  
  
  target = Math.abs(6);
  console.log(target+" is target ");
  for (let n = 1; n < target * 2 - 1; n++) {
    const sum = (n + n * n) / 2;
    if (sum === target || (sum > target && 0 === (sum - target) % 2))
      console.log(n + " is steps");
  }
