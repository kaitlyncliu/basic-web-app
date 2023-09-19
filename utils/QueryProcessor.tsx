export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "My Andrew ID is kaitlynl"
    );
  }
  if (query.toLowerCase().includes("what is your name")) {
    return (
      "Kaitlyn"
    );
  }
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }
  const subMatch = query.match(/What is (\d+) minus (\d+)/);
  if (subMatch) {
    const x: number = parseInt(subMatch[1]);
    const y: number = parseInt(subMatch[2]);
    return (x-y).toString();
  }
  const timesMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (timesMatch) {
    const x: number = parseInt(timesMatch[1]);
    const y: number = parseInt(timesMatch[2]);
    return (x*y).toString();
  }
  

  // const largestMatch = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)?/)
  // if (largestMatch) {
  //   const x: number = parseInt(largestMatch[1]);
  //   const y: number = parseInt(largestMatch[2]);
  //   const z: number = parseInt(largestMatch[3]);
  //   const maximum = Math.max(x, y, z)
  //   return (maximum).toString();
  // }

  // const primeMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/)
  // if (largestMatch) {
  //   const x: number = parseInt(largestMatch[1]);
  //   const y: number = parseInt(largestMatch[2]);
  //   const z: number = parseInt(largestMatch[3]);
  //   const a: number = parseInt(largestMatch[4]);
  //   const b: number = parseInt(largestMatch[5]);
  //   const maximum = Math.max(x, y, z)
  //   return (maximum).toString();
  // }

  // const squareCubeMatch = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)?/)
  // if (squareCubeMatch) {
  //   for match in squareCubeMatch
  // }

  return "";
}
