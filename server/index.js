const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const serverInfo = {
  players: "60/64",
  ping: "104ms",
  tickrate: "60 Hz",
  settings: {
    region: "Europe - DE",
    punkBuster: "ON",
    fairFight: "ON",
    password: "OFF",
    preset: "NORMAL",
  },
  advanced: {
    minimap: "ON",
    onlySquadLeaderSpawn: "OFF",
    vehicles: "ON",
    teamBalance: "ON",
    minimapSpotting: "ON",
    hud: "ON",
    "3pVehicleCam": "ON",
    regenerativeHealth: "ON",
    killCam: "ON",
    friendlyFire: "OFF",
    "3dSpotting": "ON",
    enemyNameTags: "ON",
  },
  rules: {
    tickets: 400,
    vehicleSpawnDelay: 25,
    bulletDamage: 100,
    kickAfterTeamKills: 5,
    playerHealth: 100,
    playerRespawnTime: 100,
    kickAfterIdle: 300,
    banAfterKicks: 3,
  },
};

app.get('/api/server-info', (req, res) => {
  res.json(serverInfo);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
