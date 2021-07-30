const lauches = new Map();

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'), 
    destanation: 'kepler-442 b',
    customers: ['ARTcodeSH', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);
launches.get(100) === launch;

module.exports = {
    launches,
};

