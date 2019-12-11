const isPortReachable = require("is-port-reachable");

const ports = [];

for (let i = 0; i < 1024; i++) {
  ports.push(i);
}

const run = async () => {
  const promises = ports.map(async p => {
    const isReachable = await isPortReachable(p, { host: "localhost" });
    console.log(`${p} | ${isReachable}`);
    return { p, success: isReachable };
  });

  const res = await Promise.all(promises);

  console.log("FINISHED");
};

run();
