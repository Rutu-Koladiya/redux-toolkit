// 1. Problem Description:
//              You are given a fake API function getUser(id) that simulates fetching a user by ID with a fixed delay.

//              Your task is to:

//               (1) Implement fetchSequential(ids): Fetch each user one after the other is done. Log each user and total time taken.

//               (2) Implement fetchParallel(ids): Fetch all users in parallel. Log all users and total time taken.

//      Note: Each fetch call takes exactly 1 second, regardless of the ID.

// fuction to mimic api call:
//    function getUser(id) {
//      return new Promise((resolve) => {
//        const delay = 1000; // Fixed delay for simulation
//        setTimeout(() => {
//          resolve({ id, name: `User ${id}` });
//        }, delay);
//      });
//    }

// Examples:

// await fetchSequential([1, 2, 3]);
// // Output (rough):
// // Sequential Results: [ { id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }, { id: 3, name: 'User 3' } ]
// // Sequential Time: ~3000ms

// await fetchParallel([1, 2, 3]);
// // Output (rough):
// // Parallel Results: [ { id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }, { id: 3, name: 'User 3' } ]
// // Parallel Time: ~1000ms

const SequentialvsParallel = () => {
  function getUser(id) {
    return new Promise((resolve) => {
      const delay = 1000;
      setTimeout(() => {
        resolve({ id, name: `User ${id}` });
      }, delay);
    });
  }

  async function fetchSequential(ids) {
    const results = [];
    const start = Date.now();

    for (let id of ids) {
      const data = await getUser(id);
      results.push(data);
    }

    const end = Date.now();

    console.log(`Sequential Time: ~${end - start}ms`);
    console.log(results);
  }

  async function fetchParallel(ids) {
    const start = Date.now();

    const datas = ids.map((id) => getUser(id));
    const result = await Promise.all(datas);

    const end = Date.now();

    console.log(`Parallel Time: ~${end - start}ms`);
    console.log(result);
  }

  (async () => {
    await fetchSequential([1, 2, 3]);
    await fetchParallel([1, 2, 3]);
  })();
};

export default SequentialvsParallel;
